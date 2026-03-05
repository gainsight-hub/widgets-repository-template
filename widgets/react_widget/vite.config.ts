import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 5173,
    strictPort: true,
    allowedHosts: [".trycloudflare.com"],
  },
  build: {
    lib: {
      entry: "src/main.tsx",
      formats: ["es"],
      fileName: "widget",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react-dom/client",
      ],
    },
  },
});
