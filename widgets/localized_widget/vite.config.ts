import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  build: command === "build"
    ? {
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
      }
    : {},
}));
