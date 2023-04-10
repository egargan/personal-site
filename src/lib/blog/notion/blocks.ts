// The Notion client lib only exports a very limited subset of its types, only those related to the
// REST client itself, errors, etc.
//
// These types are copied from the lib's src. They are not exhaustive, and contain only the
// essential properties.

export interface RichText {
  type: "text";
  text: {
    content: string;
  };
  plain_text: string;
  href: string | null;
}

export interface Code {
  type: "code";
  code: {
    rich_text: Array<RichText>;
    caption: Array<RichText>;
    language: string;
  };
}
