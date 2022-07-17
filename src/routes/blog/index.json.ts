import { getPostProperties } from '$lib/notion/page';
import type { PostProperties } from '$lib/notion/page';
import type { Client } from '@notionhq/client';

export async function get({ params, locals }) {
  const notion: Client = locals.notion;

  // TODO:
  // * error handling
  // * create DAO around notion client
  const response = await notion.databases.query({
    database_id: process.env['NOTION_POSTS_DB_ID'],
  });

  const pages: PostProperties[] = response.results.map(getPostProperties);

  return {
    body: pages,
  };
}
