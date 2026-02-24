import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context: { site: URL | undefined }) {
  return rss({
    title: "BlogsWithM",
    description: "Articles, notes, and thoughts by Mohtasham Murshid Madani.",
    site: context.site!,
    items: await pagesGlobToRssItems(import.meta.glob("./posts/*.{md,mdx}")),
    customData: "<language>en-us</language>",
  });
}
