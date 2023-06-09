import type NotionBlogClient from "$lib/blog/notion/NotionBlogClient";

export async function load({ params, locals }) {
  const notion = locals.notion as NotionBlogClient;
  return await notion.getPost(params.slug);
}
