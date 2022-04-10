import prism from 'prismjs';

// A list of all of the languages that can be highlighted.
// This will be updated ad hoc.
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prism-svelte';

// Import the styles that colour the Prism-formatted code blocks
import './prism-github-theme.css';

export function initialisePrism(): any {
  return prism;
}
