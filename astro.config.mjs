// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Provisoire : à remplacer par le nom de domaine définitif une fois réservé.
  // Sert de base aux URLs canoniques et aux balises Open Graph (SEO).
  site: 'https://interieur-design.pf',
  vite: {
    plugins: [tailwindcss()]
  }
});