import { Mongo } from '$lib/mongo';

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
    return await new Mongo({ url: process.env['MONGODB_URL'] }).connect();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();

export async function handle({ request, resolve }) {
  let mongo: Mongo = await initialised;
  request.locals.db = mongo.getDb();

  console.log(`${request.method} ${request.host} ${request.path}`);

  return resolve(request);
}

export async function handleError({ error, request }) {
  console.error(error);
}
