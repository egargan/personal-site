import { Client } from '@notionhq/client';

// Initialise Notion API client
const notion = new Client({ auth: process.env['NOTION_SECRET'] });

export async function handle({ event, resolve }) {
  event.locals.notion = notion;
  console.log(`${event.request.method} ${event.url.host} ${event.url.pathname}`);
  return resolve(event);
}

export async function handleError({ error }) {
  console.error(error);
}
