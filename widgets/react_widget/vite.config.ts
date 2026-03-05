import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "widget-dev",
      configureServer(server) {
        server.middlewares.use("/widget.js", (_req, res) => {
          res.setHeader("Content-Type", "application/javascript");
          res.end("export * from '/src/main.tsx';");
        });
        server.middlewares.use((req, _res, next) => {
          if (req.url === "/index.html") req.url = "/";
          next();
        });
      },
    },
  ],
  server: {
    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 5173,
    strictPort: true,
    allowedHosts: true,
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
