import type { Post } from '$lib/notion/page';
import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
  const url = `/blog/${params.slug}.json`;
  const response = await fetch(url);

  const post = await response.json() as Post;

  if (response.ok) {
    return { post };
  }

  throw error(500, `Could not load ${url}`);
}
