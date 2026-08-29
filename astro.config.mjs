import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: 'https://edwardcormac.github.io',
  base: isGitHubPages ? '/codex-testing' : undefined,
  integrations: [sitemap()],
});
