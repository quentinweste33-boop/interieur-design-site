// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Provisoire : à remplacer par le nom de domaine définitif une fois réservé.
  // Sert de base aux URLs canoniques et aux balises Open Graph (SEO).
  site: 'https://interieur-design.pf',
  vite: {
    plugins: [tailwindcss()],
    server: {
      // Vite rejette par défaut les requêtes dont l'en-tête Host n'est pas
      // reconnu (protection anti DNS-rebinding) — bloque donc l'accès via un
      // tunnel (localtunnel, ngrok...) dont le Host est un sous-domaine
      // externe. À restreindre à une liste précise si le dev server est un
      // jour exposé au-delà d'un usage ponctuel de partage de maquette.
      allowedHosts: true
    }
  }
});