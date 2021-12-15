export async function get({ params, locals }) {
  const { slug } = params;
  const { db } = locals;

  // TODO: error handling
  const post = await db.collection('posts').findOne({ slug });

  if (post) {
    return {
      body: post,
    };
  }
}
