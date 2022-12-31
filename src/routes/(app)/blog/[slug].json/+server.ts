import { json } from '@sveltejs/kit';
import type { PostProperties } from '$lib/notion/page';
import { getPostProperties } from '$lib/notion/page';
import type { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

export async function GET({ params, locals }): Promise<Response> {
  const notion: Client = locals.notion;

  // TODO:
  // * error handling
  // * create DAO around notion client
  const queryResponse = await notion.databases.query({
    database_id: process.env['NOTION_POSTS_DB_ID'],
    filter: {
      property: 'Slug',
      rich_text: {
        equals: params.slug,
      }
    }
  });

  const pageId = queryResponse.results[0]?.id;

  const pageResponse = await notion.blocks.children.list({
    block_id: pageId,
    page_size: 100,
  });

  const n2m = new NotionToMarkdown({ notionClient: notion });

  const mdBlocks = [];

  for (const block of pageResponse.results) {
    mdBlocks.push(await n2m.blockToMarkdown(block));
  }

  const properties: PostProperties = getPostProperties(queryResponse.results[0]);
  const content = mdBlocks.join('\n\n');

  // const pages: PostProperties[] = response.results.map(getPostProperties);

  return json({ properties, content });
}
