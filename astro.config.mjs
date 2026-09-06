import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import { readFileSync, readdirSync } from "node:fs";

// Editorial previews are accessible for review but never advertised to search engines.
const previewPaths = ["work", "blog"].flatMap((collection) =>
  readdirSync(new URL(`./src/content/${collection}/`, import.meta.url))
    .filter((file) => /\.mdx?$/.test(file))
    .filter((file) => /^editorial: true$/m.test(readFileSync(new URL(`./src/content/${collection}/${file}`, import.meta.url), "utf8")))
    .map((file) => `/${collection}/${file.replace(/\.mdx?$/, "")}`)
);

// https://astro.build/config
export default defineConfig({
  site: "https://rawat.dev",
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "github-dark-dimmed",
      },
      gfm: true,
    }),
    icon(),
    sitemap({ filter: (page) => !previewPaths.includes(new URL(page).pathname.replace(/\/$/, "")) }),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: "static",
});
