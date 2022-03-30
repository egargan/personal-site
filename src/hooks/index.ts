import { Client } from '@notionhq/client';

// Initialise Notion API client
const notion = new Client({ auth: process.env['NOTION_SECRET'] });

export async function handle({ request, resolve }) {
  request.locals.notion = notion;
  console.log(`${request.method} ${request.host} ${request.path}`);
  return resolve(request);
}

export async function handleError({ error, request }) {
  console.error(error);
}
