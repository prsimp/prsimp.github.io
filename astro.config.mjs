// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://prsimp.com',
  build: {
    format: 'file',
  },
  markdown: {
    shikiConfig: {
      theme: 'solarized-light',
    },
  },
});
