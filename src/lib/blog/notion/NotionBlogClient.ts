import { AppError } from "$lib/error";
import type { Client } from "@notionhq/client";
import type {
  ListBlockChildrenResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { notionHtmlTransform } from "../pageContent";
import { getPostProperties, type PostProperties } from "../pageHeaders";

export class NotionClientError extends AppError {}

export default class NotionBlogClient {
  private notion: Client;
  private databaseID: string;

  constructor(notionClient: Client, databaseID: string) {
    this.notion = notionClient;
    this.databaseID = databaseID;
  }

  async getPostList({ limit }: { limit?: number } = {}): Promise<
    PostProperties[]
  > {
    try {
      const response = await this.notion.databases.query({
        database_id: this.databaseID,
        filter: {
          property: "Status",
          select: {
            equals: "Live",
          },
        },
        page_size: limit,
      });

      return response.results.map(getPostProperties);
    } catch (err) {
      throw new NotionClientError("failed to fetch post list", { err });
    }
  }

  async getPost(slug: string): Promise<{
    properties: PostProperties;
    content: string;
  }> {
    let queryResponse: QueryDatabaseResponse;

    try {
      queryResponse = await this.notion.databases.query({
        database_id: this.databaseID,
        filter: {
          property: "Slug",
          rich_text: { equals: slug },
        },
      });
    } catch (err) {
      throw new NotionClientError(`failed to query notion for slug '${slug}'`, {
        err,
      });
    }

    if (queryResponse.results.length === 0) {
      throw new NotionClientError(`post with slug '${slug}' does not exist`);
    }

    const properties = getPostProperties(queryResponse.results[0]);
    const pageId = queryResponse.results[0]?.id;

    let pageBlocksResponse: ListBlockChildrenResponse;

    try {
      // All notion content is returned in this 'block' format
      pageBlocksResponse = await this.notion.blocks.children.list({
        block_id: pageId,
        // 100 is the Notion API's maximum block response, if posts start exceeding this limit, we'll
        // have to fetch post content in batches
        page_size: 100,
      });
    } catch (err) {
      throw new NotionClientError(
        `failed to fetch content for post '${slug}'`,
        { err }
      );
    }

    let content: string;

    try {
      content = await notionHtmlTransform(this.notion, pageBlocksResponse);
    } catch (err) {
      throw new NotionClientError(
        `failed to convert content for post '${slug}'`,
        { err }
      );
    }

    return { properties, content };
  }
}
