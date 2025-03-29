/**
 * Custom remark-rehype handler that produces more structured code block markup
 *
 * Adapted from the stock remark-rehype code handler:
 *
 * https://github.com/syntax-tree/mdast-util-to-hast/blob/main/lib/handlers/code.js
 */
export function codeHandler(state: any, node: any) {
  const value = node.value ? node.value + "\n" : "";

  let code = hastNode({
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

  let pre = hastNode({
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

    const titlebar = hastNode({
      tagName: "div",
      className: ["code-block-title-bar"],
      children: [
        hastNode({
          tagName: "span",
          className: ["code-block-title"],
          children: [
            hastNode({
              tagName: "img",
              properties: { src: iconPictureSrc, role: "presentation" },
              className: ["filetype-icon"],
            }),
            { type: "text", value: titleText ?? formatLanguageName(node.lang) },
          ],
        }),
        // hastNode({
        //   tagName: "button",
        //   className: ["code-block-copy"],
        //   children: [
        //     hastNode({
        //       tagName: "span",
        //       children: [{ type: "text", value: "Copy" }],
        //     }),
        //     getCopyIconSvg(),
        //   ],
        // }),
      ],
    });

    containerChildren.unshift(titlebar);
  }

  const container = hastNode({
    tagName: "div",
    className: ["code-block-container"],
    children: containerChildren,
  });

  state.patch(node, container);

  return container;
}

function hastNode({
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

function getCopyIconSvg() {
  return hastNode({
    tagName: "svg",
    properties: {
      viewBox: "0 0 24 24",
      fill: "none",
    },
    children: [
      hastNode({
        tagName: "path",
        properties: {
          d: "M19.4 20H9.6C9.26863 20 9 19.7314 9 19.4V9.6C9 9.26863 9.26863 9 9.6 9H19.4C19.7314 9 20 9.26863 20 9.6V19.4C20 19.7314 19.7314 20 19.4 20Z",
        },
      }),
      hastNode({
        tagName: "path",
        properties: {
          d: "M15 9V4.6C15 4.26863 14.7314 4 14.4 4H4.6C4.26863 4 4 4.26863 4 4.6V14.4C4 14.7314 4.26863 15 4.6 15H9",
        },
      }),
    ],
  });
}
