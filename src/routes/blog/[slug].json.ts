import type { PostsDao, Post } from "$lib/PostsDao";

export async function get({ params, locals }) {
  const { slug } = params;

  const postsDao: PostsDao = locals.db?.posts;
  const post: Post = await postsDao.getPost(slug);

  // If !post, SvelteKit returns a 404 for us
  if (post) {
    return {
      body: post,
    };
  }
}
