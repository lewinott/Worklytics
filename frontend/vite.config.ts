import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "icons/*.png"],
      manifest: {
        name: "Formulário PWA",
        short_name: "Form PWA",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#007bff",
        icons: [
          {
            src: "icons/icon-192x192.png",
            type: "image/png",
            sizes: "192x192",
          },
          {
            src: "icons/icon-512x512.png",
            type: "image/png",
            sizes: "512x512",
          },
        ],
      },
    }),
  ],
});
