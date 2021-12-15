<script context="module" lang="ts">
  export async function load({ fetch }) {
    const url = '/blog.json';
    const response = await fetch(url);

    if (response.ok) {
      return {
        props: {
          posts: await response.json()
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
  export let posts;

  console.log(posts);
</script>

<h2>Posts</h2>
<ul>
  {#each posts as post}
    <li>
      <a href="{`blog/${post.slug}`}"><h3>{post.title}</h3></a>
      <h4>{post.created}</h4>
      <p>{post.tags.join(', ')}</p>
    </li>
  {/each}
</ul>
