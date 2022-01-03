export default class MarkdownRenderer
  import MarkdownIt from 'markdown-it';
  import MarkdownItAnchor from 'markdown-it-anchor';
  import MarkdownItAttrs from 'markdown-it-attrs';

  import type { Post } from '$lib/PostsDao';
  import { formatDateLong } from '$lib/time';
  import { initialiseHighlightJs } from '$lib/highlight';

  export let post: Post;

  onMount(() => {
    // Apply highlighting to all <pre><code>... elements
    initialiseHighlightJs().highlightAll();
  });

  // TODO: abstract this init? move into $lib file?
  const renderer = new MarkdownIt()
    .use(MarkdownItAttrs)
    .use(MarkdownItAnchor);
