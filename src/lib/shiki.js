import { createCommentNotationTransformer } from "@shikijs/transformers";

export function getShikiConfig() {
  return {
    themes: {
      dark: /** @type {const} */ ("github-dark"),
      light: /** @type {const} */ ("github-light"),
    },
    transformers:
      /** @type {Array<import("@shikijs/types").ShikiTransformer>} */ ([
        {
          pre(hast) {
            hast.properties["data-meta"] = this.options.meta?.__raw;
          },
        },
        transformerNamedHighlight(),
        transformerNamedMetaHighlight(),
        removeTransformer,
        foldTransformer,
      ]),
  };
}

export function transformerNamedMetaHighlight() {
  return {
    name: "transformer-named-meta-highlight",

    preprocess(code, options) {
      if (!this.options.meta?.__raw) return;

      const meta = this.options.meta.__raw;

      // Match strings like `foo-highlight:/fooBar/2
      const matches = Array.from(
        meta.matchAll(/([a-zA-Z-]+):\/((?:\\.|[^/])+)\/(\d+)?/g),
      );

      options.decorations ||= [];

      // TODO: support multiple matches, allow /g suffixes,
      // or /1 or /2 to match specific words

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      matches.forEach(([_, name, pattern, occurenceStr = "1"]) => {
        const occurence = Number(occurenceStr) || 1;
        let index = -1;
        let from = 0;

        for (let i = 0; i < occurence; i++) {
          index = code.indexOf(pattern, from);
          if (index === -1) return;
          from = index + pattern.length;
        }

        options.decorations.push({
          start: index,
          end: index + pattern.length,
          properties: {
            class: `code-highlight ${name}`,
          },
        });
      });
    },
  };
}

export function transformerNamedHighlight() {
  return createCommentNotationTransformer(
    "transformer-named-highlight",
    /\s*\[!code highlight:((?:\\.|[^:\]])+)(:\d+)?(\+\d+)?\]/,
    function (
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      [_, highlightName, range1 = ":0", range2 = "+1"],
      _line,
      _comment,
      lines,
      index,
    ) {
      const lineStart = Number.parseInt(range1.slice(1), 10);
      const lineEnd = Number.parseInt(range2.slice(1), 10);

      for (
        let i = index + lineStart;
        i < Math.min(index + lineStart + lineEnd, lines.length);
        i++
      ) {
        this.addClassToHast(lines[i], `code-highlight ${highlightName}`);
      }

      return true;
    },
    "v3",
  );
}

const foldTransformer = {
  name: "code-fold-transformer",
  enforce: "post",
  code(node) {
    const newLines = [];

    for (let i = 0; i < node.children.length; i++) {
      const lineNode = node.children[i];
      const lineText = toText(lineNode);

      if (lineText.includes("fold-start")) {
        const detailsNode = {
          type: "element",
          tagName: "details",
          properties: {},
          children: [],
        };

        i += 1;
        let firstFoldLine = node.children[i];

        while (isNewline(firstFoldLine)) {
          i += 1;
          firstFoldLine = node.children[i];
        }

        i += 1;

        const summaryTextNodes = firstFoldLine.children;

        const summaryNode = {
          type: "element",
          tagName: "summary",
          properties: { class: "line" },
          children: summaryTextNodes,
        };

        detailsNode.children.push(summaryNode);

        while (i + 1 < node.children.length) {
          const nextLine = node.children[i + 1];
          const nextLineText = toText(nextLine);

          if (nextLineText.includes("fold-end")) {
            i += 1;
            break;
          }

          detailsNode.children.push(nextLine);
          i += 1;
        }

        // /2 here to account for newline children
        summaryNode.properties["data-lines-folded"] = Math.ceil(
          (detailsNode.children.length - 1) / 2,
        );

        newLines.push(detailsNode);
      } else if (lineText.includes("fold-end")) {
        continue;
      } else {
        newLines.push(lineNode);
      }
    }

    node.children = newLines;
  },
};

const removeTransformer = {
  name: "code-remove-transformer",
  enforce: "post",
  code(node) {
    // TODO: what's going on with newlines?
    let newLines = [];

    for (let i = 0; i < node.children.length; i++) {
      const lineNode = node.children[i];
      const lineText = toText(lineNode);

      if (lineText.includes("remove-start")) {
        while (i + 1 < node.children.length) {
          const nextLine = node.children[i + 1];
          const nextLineText = toText(nextLine);

          i += 1;

          if (nextLineText.includes("remove-end")) {
            i += 1;
            break;
          }
        }
      } else if (lineText.includes("remove-end")) {
        continue;
      } else {
        newLines.push(lineNode);
      }
    }

    while (toText(newLines.at(-1)) === "") {
      newLines.pop();
    }

    node.children = newLines;
  },
};

function toText(hastNode) {
  if (!hastNode) return "";
  if (hastNode.type === "text") return hastNode.value || "";
  if (hastNode.children) return hastNode.children.map(toText).join("");
  return "";
}

function isNewline(node) {
  return node.type === "text" && node.value === "\n";
}
