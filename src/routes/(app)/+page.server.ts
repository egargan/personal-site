import type NotionBlogClient from "$lib/blog/notion/NotionBlogClient";

export async function load({ locals }) {
  const notion: NotionBlogClient = locals.notion;
  const posts = await notion.getPostList({ limit: 2 });
  return { posts };
}
