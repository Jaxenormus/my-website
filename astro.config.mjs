import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://calebdelbridge.com",
  integrations: [tailwind(), sitemap(), react()],
  output: "hybrid",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    imageService: true
  })
});