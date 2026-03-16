// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],
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
