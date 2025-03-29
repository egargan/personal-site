import { createCommentNotationTransformer } from "@shikijs/transformers";

export function transformerNamedMetaHighlight(options = {}) {
  return {
    name: "transformer-named-meta-highlight",

    preprocess(code, options) {
      if (!this.options.meta?.__raw) return;

      const meta = this.options.meta.__raw;

      // Match strings like `foo-highlight:/fooBar/
      const matches = Array.from(
        meta.matchAll(/([a-zA-Z\-]+):\/((?:\\.|[^/])+)\//g),
      );

      options.decorations ||= [];

      // TODO: support multiple matches, allow /g suffixes,
      // or /1 or /2 to match specific words

      matches.forEach(([_, name, pattern]) => {
        const index = code.indexOf(pattern);

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
    /\s*\[!code highlight:((?:\\.|[^:\]])+)(:\d+)?\]/,
    function ([_, highlightName, range = ":1"], _line, _comment, lines, index) {
      const lineNum = Number.parseInt(range.slice(1), 10);

      for (let i = index; i < Math.min(index + lineNum, lines.length); i++) {
        this.addClassToHast(lines[i], `code-highlight ${highlightName}`);
      }

      return true;
    },
    "v3",
  );
}
