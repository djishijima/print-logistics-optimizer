
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "localhost",
    port: 8080,
    strictPort: true,
    cors: false,
    hmr: {
      host: "localhost",
      port: 8080,
      protocol: 'ws',
    },
    headers: {
      "X-Frame-Options": "DENY",
      "X-Content-Type-Options": "nosniff",
      "Content-Security-Policy": "frame-ancestors 'none'; default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.gpteng.co; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; connect-src 'self' ws: wss: https:; font-src 'self'; object-src 'none'; media-src 'self'; child-src 'self';",
      "Referrer-Policy": "no-referrer-when-downgrade",
      "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
      "Permissions-Policy": "camera=(), microphone=(), geolocation=()"
    }
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
