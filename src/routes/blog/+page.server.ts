import { getPostProperties } from "$lib/blog/pageHeaders";
import type { PostProperties } from "$lib/blog/pageHeaders";
import type { Client } from "@notionhq/client";

export async function load({ locals }) {
  const notion: Client = locals.notion;

  // TODO:
  // * error handling
  // * create DAO around notion client
  const response = await notion.databases.query({
    database_id: process.env["NOTION_POSTS_DB_ID"],
    filter: {
      property: "Status",
      select: {
        equals: "Live",
      },
    },
  });

  const posts: PostProperties[] = response.results.map(getPostProperties);

  return { posts };
}
