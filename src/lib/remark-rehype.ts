/**
 * Custom remark-rehype handler that produces more structured code block markup
 *
 * Adapted from the stock remark-rehype code handler:
 *
 * https://github.com/syntax-tree/mdast-util-to-hast/blob/main/lib/handlers/code.js
 */
export function codeHandler(state: any, node: any) {
  const value = node.value ? node.value + "\n" : "";

  let code = createHastNode({
    type: "element",
    tagName: "code",
    className: node.lang ? ["language-" + node.lang] : [],
    children: [{ type: "text", value }],
  });

  if (node.meta) {
    code.data = { meta: node.meta };
  }

  state.patch(node, code);
  code = state.applyData(node, code);

  let pre = createHastNode({
    tagName: "pre",
    children: [code],
  });

  state.patch(node, pre);
  pre = state.applyData(node, pre);

  const containerChildren = [pre];

  const titleText = getNodeMetaTitle(node);

  if (node.lang || titleText) {
    let iconPictureSrc = `/icons/filetype/default.svg`;

    if (node.lang) {
      iconPictureSrc = getLanguageIconSrc(node.lang);
    }

    const icon = createHastNode({
      tagName: "img",
      properties: { src: iconPictureSrc, role: "presentation" },
      className: ["filetype-icon"],
    });

    state.patch(node, icon);

    const title = createHastNode({
      tagName: "span",
      className: ["code-block-title"],
      children: [
        icon,
        { type: "text", value: titleText ?? formatLanguageName(node.lang) },
      ],
    });

    state.patch(node, title);

    const titlebar = createHastNode({
      tagName: "div",
      className: ["code-block-title-bar"],
      children: [title],
    });

    containerChildren.unshift(titlebar);
  }

  const container = createHastNode({
    tagName: "div",
    className: ["code-block-container"],
    children: containerChildren,
  });

  state.patch(node, container);

  return container;
}

function createHastNode({
  type = "element",
  tagName,
  className,
  properties = {},
  children = [],
}: {
  type?: string;
  tagName: string;
  className?: Array<string>;
  properties?: Record<string, any>;
  children?: Array<any>;
}) {
  if (className) {
    properties.className = className;
  }

  return {
    type,
    tagName,
    properties,
    children,
  };
}

function getNodeMetaTitle(node: { meta?: string }) {
  if (node.meta) {
    const titleMetaMatch = node.meta.match(/(title=)(?:["'])(.*?)(?:["'])/);

    if (titleMetaMatch && titleMetaMatch.length > 2) {
      return titleMetaMatch[2];
    }
  }

  return null;
}

function formatLanguageName(lang: string) {
  switch (lang) {
    case "typescript":
      return "TypeScript";
    case "javascript":
      return "JavaScript";
    default:
      return lang.charAt(0).toUpperCase() + lang.slice(1);
  }
}

function getLanguageIconSrc(lang: string) {
  switch (lang) {
    case "typescript":
    case "javascript":
    default:
      return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${lang}/${lang}-original.svg`;
    case "vimscript":
      return "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vim/vim-original.svg";
  }
}
