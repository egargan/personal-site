import type { PostsDao, Post } from "$lib/PostsDao";

export async function get({ params, locals }) {
  const postsDao: PostsDao = locals.db?.posts;
  const posts: Post[] = await postsDao.getAllPosts();

  return {
    body: posts,
  };
}
