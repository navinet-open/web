import rss from '@astrojs/rss';

const postImportResult = import.meta.glob('./**/*.mdx', { eager: true });
const posts = Object.values(postImportResult);

export const get = () => rss({
    title: 'Redux’s Blog',
    description: 'Open source Android & web developer from Portugal',
    site: import.meta.env.SITE,
    customData: `<language>en-us</language>`,
    items: posts.map((post) => ({
      link: post.url,
      title: post.frontmatter.title,
      pubDate: post.frontmatter.pubDate,
      description: post.frontmatter.postDescription,
    }))
  });