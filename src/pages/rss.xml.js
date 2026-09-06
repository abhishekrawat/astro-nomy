import rss from '@astrojs/rss';
import { siteConfig } from '@/config/site';
import { getCollection } from 'astro:content';

export async function GET(context) {
	// Blog hidden until posts are written — feed stays valid but empty.
	// To re-enable, restore: getCollection('blog') → items mapping.
	return rss({
		title: siteConfig.name,
		description: siteConfig.description,
		site: context.site,
		items: (await getCollection('blog', ({ data }) => !data.draft && !data.editorial)).map(post => ({
			title: post.data.title, description: post.data.description, pubDate: post.data.pubDate, link: `/blog/${post.id}/`,
		})),
	});
}
