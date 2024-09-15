// @ts-nocheck
// TODO: fix type errors

import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { writeFileSync } from "fs";

const notionSecret = process.env.NOTION_SECRET;
const postsDbId = process.env["NOTION_POSTS_DB_ID"];

if (!notionSecret) {
  throw new Error("NOTION_SECRET environment variable not present");
}
if (!postsDbId) {
  throw new Error("NOTION_POSTS_DB_ID environment variable not present");
}

const notion = new Client({ auth: notionSecret });

(async () => {
  let postListResponse;

  try {
    postListResponse = await notion.databases.query({
      database_id: postsDbId,
      // filter: {
      //   property: "Status",
      //   select: {
      //     equals: "Live",
      //   },
      // },
    });
  } catch (err) {
    throw new Error("failed to fetch posts from Notion database", {
      cause: err,
    });
  }

  const postsMeta = postListResponse.results.map(getPostProperties);

  console.log(
    `Found ${postsMeta.length} blog posts in Notion: \x1b[32m${postsMeta.map((post) => post.slug).join(", ")}\x1b[0m`,
  );

  console.log("Fetching and rendering posts...");

  const completePosts = await Promise.all(
    postsMeta.map(async (postMeta) => {
      let pageBlocksResponse;

      try {
        pageBlocksResponse = await notion.blocks.children.list({
          block_id: postMeta.id,
          // 100 is the Notion API's maximum block response, if posts start exceeding this limit, we'll
          // have to fetch post content in batches
          page_size: 100,
        });
      } catch (err) {
        throw new Error(`failed to fetch content for '${postMeta.slug}'`, {
          cause: err,
        });
      }

      try {
        return {
          meta: postMeta,
          markdown: await notionMarkdownTransform(notion, pageBlocksResponse),
        };
      } catch (err) {
        throw new Error(`failed to produce markdown for '${postMeta.slug}'`, {
          cause: err,
        });
      }
    }),
  );

  completePosts.forEach(async (post) => {
    const { meta, markdown } = post;
    let fileContent = "";

    fileContent += `---\n`;
    fileContent += `slug: "${meta.slug}"\n`;
    fileContent += `title: "${meta.title}"\n`;
    fileContent += `intro: "${meta.intro}"\n`;
    fileContent += `created: "${meta.created}"\n`;
    fileContent += `updated: "${meta.updated}"\n`;
    fileContent += `readTimeMins: ${meta.readTimeMins}\n`;
    fileContent += `tags: [${meta.tags.map((tag) => `"${tag}"`).join(", ")}]\n`;
    fileContent += `---\n\n`;

    fileContent += `import { Image } from 'astro:assets'\n\n`;

    fileContent += markdown;

    writeFileSync(`src/content/blog/${meta.slug}.mdx`, fileContent, "utf-8");
  });

  console.log(`${completePosts.length} posts written to src/content/blog/`);
})();

export function getPostProperties(post) {
  const id = post.id;
  const title = post.properties["Name"].title[0].plain_text;
  const intro = post.properties["Intro"].rich_text[0].plain_text;
  const created = post.properties["Created"].date.start;
  const updated = post.properties["Updated"].last_edited_time;
  const readTimeMins = post.properties["Read Time (Mins)"].number;
  const tags = post.properties["Tags"].multi_select.map((page) => page.name);
  const slug = post.properties["Slug"].rich_text[0].plain_text;

  return { id, title, intro, created, updated, readTimeMins, tags, slug };
}

async function notionMarkdownTransform(notionClient, pageBlocks) {
  const notionMdTransformer = initNotionBlockMarkdownTransformer(notionClient);

  const markdownLines = [];

  for (const block of pageBlocks.results) {
    markdownLines.push(await notionMdTransformer.blockToMarkdown(block));
  }

  return markdownLines.join("\n\n");
}

function initNotionBlockMarkdownTransformer(notionClient) {
  const transformer = new NotionToMarkdown({ notionClient });

  // Custom handler for Notion code blocks
  transformer.setCustomTransformer("code", async (codeBlock) => {
    let fencedBlockFirstLine = "```";

    let language = codeBlock.code.language;

    if (language === "plain text") {
      language = "text";
    }

    fencedBlockFirstLine += language;

    // Take code block caption as fenced block meta string, expected to contain e.g.
    // 'showLineNumbers'
    if (codeBlock.code.caption[0]?.plain_text) {
      fencedBlockFirstLine += ` ${codeBlock.code.caption[0]?.plain_text}`;
    }

    return `${fencedBlockFirstLine}\n${codeBlock.code.rich_text[0].plain_text}\n\`\`\``;
  });

  transformer.setCustomTransformer("image", async (imageBlock) => {
    const url = imageBlock.image.file.url;
    const alt = imageBlock.image.caption[0]?.plain_text;
    return `<Image src="${url}" widths={[360, 720, 1200, 1600]} sizes="(max-width: 360px) 360px, (max-width: 720px) 720px, (max-width: 1200px) 1200px, 1600px" inferSize alt="${alt}" />`;
  });

  return transformer;
}
