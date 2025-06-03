import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://calebdelbridge.com",
	integrations: [sitemap()],
	adapter: vercel({ webAnalytics: { enabled: true }, imageService: true }),
	vite: { plugins: [tailwindcss()] },
	experimental: {
		fonts: [
			{
				provider: fontProviders.google(),
				name: "IBM Plex Mono",
				cssVariable: "--font-mono",
			},
		],
	},
});
