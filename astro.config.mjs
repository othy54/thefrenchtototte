import { defineConfig } from 'astro/config';
import { imagetools } from 'vite-imagetools'

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  vite: {
    plugins: [
      imagetools()
    ]
  }
});