<script context="module" lang="ts">
  export async function load({ page, fetch }) {
    const url = `/blog/${page.params.slug}.json`;
    const response = await fetch(url);

    if (response.ok) {
      return {
        props: {
          post: await response.json()
        }
      };
    }

    return {
      status: response.status,
      error: new Error(`Could not load ${url}`)
    };
  }
</script>

<script lang="ts">
  import MarkdownIt from 'markdown-it';

  const renderer = new MarkdownIt();

  export let post;
</script>

<h2>{post.title}</h2>
<h3>{post.created}</h3>
<p>{post.tags.join(', ')}</p>
<p>{@html renderer.render(post.content)}</p>
