import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
  site: "https://www.navinet.tk",
  integrations: [mdx(), sitemap(), robotsTxt()],
});
