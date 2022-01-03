import MarkdownIt from 'markdown-it';
import MarkdownItAnchor from 'markdown-it-anchor';
import MarkdownItAttrs from 'markdown-it-attrs';

export function initialiseRenderer(): MarkdownIt {
  // TODO: abstract this init? move into $lib file?
  const renderer = new MarkdownIt()
    .use(MarkdownItAttrs)
    .use(MarkdownItAnchor);

  return renderer;
}
