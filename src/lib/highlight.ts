import hljs from 'highlight.js/lib/core';

// A list of all of the languages that can be highlighted.
// This will be updated ad hoc.
import typescript from 'highlight.js/lib/languages/typescript';

// Stylesheet use to colour the code blocks
import 'highlight.js/styles/nord.css';

export function initialiseHighlightJs(): any {
  hljs.registerLanguage('typescript', typescript);

  return hljs;
}
