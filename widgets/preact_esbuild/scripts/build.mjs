import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["src/main.tsx"],
  bundle: true,
  outfile: "dist/widget.js",
  format: "esm",
  jsx: "automatic",
  jsxImportSource: "preact",
  external: ["preact", "preact/hooks"],
  minify: true,
});
