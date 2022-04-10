import prism from 'prismjs';

// A list of all of the languages that can be highlighted.
// This will be updated ad hoc.
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prism-svelte';
import 'prismjs/themes/prism-tomorrow.css';
import './prism-github.css';


export function initialisePrism(): any {
  return prism;
}
