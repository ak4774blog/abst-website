// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import Sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    // We are now adding the `dynamicRoutes` option to the sitemap plugin
    Sitemap({ 
      hostname: 'https://absciencetournament.org',
      // This array explicitly lists all of your pages for the sitemap
      dynamicRoutes: [
        '/info',
        '/register',
        '/sponsors',
        '/about',
        '/join',
      ],
    }) 
  ],
  base: '/',
});
