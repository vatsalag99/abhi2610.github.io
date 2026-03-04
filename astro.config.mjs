import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://abhinavsh.info',
  output: 'static',
  integrations: [sitemap()],
});