import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"

const PORT = Number(process.env.PORT) || 3005

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
  server: {
    port: PORT,
    host: true,
  },
  preview: {
    port: PORT,
    // 0.0.0.0: o contentor do Dokploy precisa de aceitar ligações externas.
    host: true,
    // O Traefik do Dokploy encaminha o pedido com o Host do domínio público,
    // que o vite preview bloquearia por omissão.
    allowedHosts: true,
  }
});
