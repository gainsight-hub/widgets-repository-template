import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ mode }) => {
  const { VITE_TUNNEL_URL } = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),
      {
        name: "absolute-tunnel-urls",
        transformIndexHtml: (html) =>
          VITE_TUNNEL_URL
            ? html.replace(/src="\/(.*?)"/g, `src="${VITE_TUNNEL_URL}/$1"`)
            : html,
        transform: (code) =>
          VITE_TUNNEL_URL
            ? code.replace(/"(\/@[^"]+)"/g, `"${VITE_TUNNEL_URL}$1"`)
            : undefined,
      },
    ],
    server: {
      allowedHosts: true,
      cors: true,
      hmr: false,
    },
  };
});
