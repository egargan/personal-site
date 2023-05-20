import type { Client } from "@notionhq/client";
import type { PostProperties } from "$lib/blog/pageHeaders";
import { getPostProperties } from "$lib/blog/pageHeaders";
import { notionHtmlTransform, } from "$lib/blog/pageContent";

export async function load({ params, locals }) {
  const notion: Client = locals.notion;

  // TODO:
  // * error handling
  // * create DAO around notion client
  const queryResponse = await notion.databases.query({
    database_id: process.env["NOTION_POSTS_DB_ID"],
    filter: {
      property: "Slug",
      rich_text: {
        equals: params.slug,
      },
    },
  });

  const properties: PostProperties = getPostProperties(
    queryResponse.results[0]
  );

  const pageId = queryResponse.results[0]?.id;

  const pageBlocksResponse = await notion.blocks.children.list({
    block_id: pageId,
    page_size: 100,
  });

  const content = await notionHtmlTransform(notion, pageBlocksResponse);

  return { properties, content };
}
