import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(() => {
  let port = 5173;

  return {
    plugins: [
      react(),
      {
        name: "absolute-localhost-urls",
        apply: "serve" as const,
        configResolved: (config) => { port = config.server.port ?? 5173 },
        transformIndexHtml: (html) =>
          html.replace(/src="\/(.*?)"/g, `src="http://localhost:${port}/$1"`),
      },
    ],
    server: {
      allowedHosts: true,
      cors: true,
      hmr: false,
    },
  };
});
