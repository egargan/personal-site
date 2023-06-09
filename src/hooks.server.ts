import NotionBlogClient from "$lib/blog/notion/NotionBlogClient";
import { Client } from "@notionhq/client";

const notion = new NotionBlogClient(
  new Client({ auth: process.env["NOTION_SECRET"] }),
  process.env["NOTION_POSTS_DB_ID"]
);

export async function handle({ event, resolve }) {
  event.locals.notion = notion;
  return resolve(event);
}

export async function handleError({ error }) {
  console.error(error);
}
