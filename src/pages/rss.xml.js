import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('posts')).sort((a, b) =>
    b.id.localeCompare(a.id),
  );

  return rss({
    title: 'Paul Simpson',
    description: 'Writing about tech, life, and whatever else.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.id.match(/^(\d{4}-\d{2}-\d{2})/)[1] + 'T00:00:00'),
      link: `/posts/${post.id.replace(/^\d{4}-\d{2}-\d{2}-/, '')}.html`,
    })),
  });
}
