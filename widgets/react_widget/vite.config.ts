import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ mode }) => {
  const { VITE_TUNNEL_URL } = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),
      {
        name: "absolute-script-urls",
        transformIndexHtml: (html) =>
          VITE_TUNNEL_URL
            ? html.replace(/src="\/(.*?)"/g, `src="${VITE_TUNNEL_URL}/$1"`)
            : html,
      },
    ],
    server: {
      allowedHosts: true,
      cors: true,
      hmr: false,
    },
  };
});
