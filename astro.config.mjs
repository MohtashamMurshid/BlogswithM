// @ts-check
import { defineConfig } from "astro/config";
import { readFileSync } from "node:fs";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import opengraphImages from "astro-opengraph-images";
import { editorialOg } from "./src/lib/og-renderer.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.mohtasham.dev",
  integrations: [
    tailwind(),
    sitemap(),
    opengraphImages({
      options: {
        fonts: [
          {
            name: "Roboto",
            weight: 400,
            style: "normal",
            data: readFileSync("node_modules/@fontsource/roboto/files/roboto-latin-400-normal.woff"),
          },
        ],
      },
      render: /** @type {import("astro-opengraph-images").RenderFunction} */ (editorialOg),
    }),
  ],
});
