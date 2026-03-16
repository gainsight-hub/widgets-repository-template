import * as esbuild from "esbuild";

const ctx = await esbuild.context({
  entryPoints: ["src/dev.tsx"],
  bundle: true,
  outfile: "dist/dev.js",
  format: "esm",
  jsx: "automatic",
  jsxImportSource: "preact",
  sourcemap: true,
});

const { port } = await ctx.serve({ servedir: ".", host: "localhost", port: 3002 });
console.log(`Local: http://localhost:${port}/`);
