import type { Client as NotionClient } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import type { Code as CodeBlock } from "./notion/blocks";
import type { ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints";
import { unified, type Processor } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";

export async function notionHtmlTransform(
  notionClient: NotionClient,
  pageBlocks: ListBlockChildrenResponse
): Promise<string> {
  const pageMarkdown = await notionMarkdownTransform(notionClient, pageBlocks);
  const pageHtml = await composeUnifiedPipeline().process(pageMarkdown);
  return pageHtml.value as string;
}

export async function notionMarkdownTransform(
  notionClient: NotionClient,
  pageBlocks: ListBlockChildrenResponse
): Promise<string> {
  const notionMdTransformer = initNotionBlockMarkdownTransformer(notionClient);

  const markdownLines: string[] = [];

  for (const block of pageBlocks.results) {
    markdownLines.push(await notionMdTransformer.blockToMarkdown(block));
  }

  return markdownLines.join("\n\n");
}

export function initNotionBlockMarkdownTransformer(
  notionClient: NotionClient
): NotionToMarkdown {
  const transformer = new NotionToMarkdown({ notionClient });

  // Custom handler for Notion code blocks
  transformer.setCustomTransformer("code", async (block) => {
    const codeBlock = block as CodeBlock;

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

  return transformer;
}

export function composeUnifiedPipeline(): Processor {
  return unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: "github-light",
      onVisitHighlightedLine(node) {
        // Add 'highlighted' class to selected code block lines
        node.properties.className.push("highlighted");
      },
    })
    .use(rehypeStringify);
}
