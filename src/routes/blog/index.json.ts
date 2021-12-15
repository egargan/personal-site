export async function get({ params, locals }) {
  const { slug } = params;
  const { db } = locals;

  // TODO:
  // * error handling
  // * use projection to filter content, we don't need it here
  const posts = await db.collection('posts').find().toArray();

  if (posts) {
    return {
      body: posts,
    };
  }
}
