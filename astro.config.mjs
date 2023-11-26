import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://calebdelbridge.com",
  integrations: [tailwind(), sitemap()],
  output: "server",
  adapter: vercel({ webAnalytics: { enabled: true }, imageService: true }),
});