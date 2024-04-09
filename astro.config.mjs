import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],
  base: "/Portfolio_New",
  site: "https://andrea-canale.github.io/Portfolio_New"
});