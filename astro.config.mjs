import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import mdx from "@astrojs/mdx";
import alpinejs from "@astrojs/alpinejs";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://indevitus.com',
  integrations: [tailwind({
    // Example: Disable injecting a basic `base.css` import on every page.
    // Useful if you need to define and/or import your own custom `base.css`.
    applyBaseStyles: false
  }), sitemap(), robotsTxt(), mdx(), alpinejs(), compress()],
  trailingSlash: 'never'
});