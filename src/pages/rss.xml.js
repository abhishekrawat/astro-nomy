import rss from '@astrojs/rss';
import { siteConfig } from '@/config/site';

export async function GET(context) {
	// Blog hidden until posts are written — feed stays valid but empty.
	// To re-enable, restore: getCollection('blog') → items mapping.
	return rss({
		title: siteConfig.name,
		description: siteConfig.description,
		site: context.site,
		items: [],
	});
}
