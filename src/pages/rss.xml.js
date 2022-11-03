import rss from "@astrojs/rss";

const postImportResult = import.meta.glob("/blog/*.mdx", { eager: true });
const posts = Object.values(postImportResult);

export const get = () =>
  rss({
    title: "NaviNet Blog",
    description: "The official blog of NaviNet",
    site: import.meta.env.SITE,
    stylesheet: "/rss/styles.xsl",
    customData: `<language>en-us</language>`,
    items: posts.map((post) => ({
      link: post.url,
      title: post.frontmatter.title,
      pubDate: post.frontmatter.pubDate,
      description: post.frontmatter.description,
    })),
  });
