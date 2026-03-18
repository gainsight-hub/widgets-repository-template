import * as esbuild from 'esbuild';
import { writeFileSync, mkdirSync, existsSync } from 'fs';

const outdir = 'dist';
if (!existsSync(outdir)) {
  mkdirSync(outdir, { recursive: true });
}

writeFileSync(`${outdir}/index.html`, '<script type="module" src="./widget.js"></script>\n');

const ctx = await esbuild.context({
  entryPoints: ['src/main.ts'],
  bundle: true,
  outfile: `${outdir}/widget.js`,
  format: 'esm',
  target: 'es2020',
  platform: 'browser',
  sourcemap: 'inline',
  tsconfig: 'tsconfig.json',
  define: {
    ngDevMode: 'false',
    ngI18nClosureMode: 'false',
    ngJitMode: 'true',
  },
});

await ctx.watch();

const { host, port } = await ctx.serve({
  servedir: outdir,
  port: 4200,
});

console.log(`Dev server running at http://${host}:${port}/`);
