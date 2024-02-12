export interface PostProperties {
  title: string;
  intro: string;
  created: string;
  updated: string;
  readTimeMins: number;
  tags: string[];
  slug: string;
}

export interface Post {
  properties: PostProperties;
  content: string;
}

// TODO: type me
export function getPostProperties(post: any): PostProperties {
  const title = post.properties["Name"].title[0].plain_text;
  const intro = post.properties["Intro"].rich_text[0].plain_text;
  const created = post.properties["Created"].date.start;
  const updated = post.properties["Updated"].last_edited_time;
  const readTimeMins = post.properties["Read Time (Mins)"].number;
  const tags = post.properties["Tags"].multi_select.map(
    (page: { name: string }) => page.name,
  );
  const slug = post.properties["Slug"].rich_text[0].plain_text;

  return {
    title,
    intro,
    created,
    updated,
    readTimeMins,
    tags,
    slug,
  };
}
