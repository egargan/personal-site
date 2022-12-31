import type { PostProperties } from '$lib/notion/page';
import { error } from '@sveltejs/kit';
import type { PageData } from './$types';

export async function load({ fetch }): Promise<PageData> {
  const url = '/blog.json';
  const response = await fetch(url);

  const posts = await response.json();

  if (response.ok) {
    return {
      posts: posts.body as PostProperties[],
    };
  }

  throw error(500, `Could not load ${url}`);
}
