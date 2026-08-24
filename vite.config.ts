import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],

  // O site é servido a partir da raiz do domínio (ver public/.htaccess).
  // Se algum dia for publicado numa subpasta, mude para "/subpasta/".
  base: "/",

  build: {
    outDir: "dist",
    assetsDir: "assets",
    // Sem sourcemaps em produção: não expõem o código-fonte e o .htaccess
    // bloqueia .map de qualquer forma.
    sourcemap: false,
  },
  preview: {
    port: 3005,
    host: true
  }
});