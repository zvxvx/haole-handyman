import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { loadEnv } from "vite";

const { PUBLIC_YELP } = loadEnv(process.env.PUBLIC_YELP, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
});
