import { Mongo } from '$lib/mongo';
import { PostsDao } from '$lib/PostsDao';

// Create promise for a successfully initialised MongoDB connection.
// For dev builds, this init will only run on the first request. In prod,
// it'll run at startup.
//
// TODO:
// * is this really the best way of doing one-time startup?
// * move this into separate module
const initialised: Promise<Mongo> = (async () => {
  try {
    console.info('Connecting to MongoDB...');
    return new Mongo({ url: process.env['MONGODB_URL'] }).connect();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();

export async function handle({ request, resolve }) {
  let mongo: Mongo = await initialised;
  const posts = new PostsDao(mongo.getDb());

  request.locals.db = {
    // Endpoints should really use DAOs to access the db, but provide the
    // handle for the time being
    handle: mongo,
    posts,
  }

  console.log(`${request.method} ${request.host} ${request.path}`);

  return resolve(request);
}

export async function handleError({ error, request }) {
  console.error(error);
}
