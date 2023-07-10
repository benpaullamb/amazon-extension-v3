import { build } from 'esbuild';
import { copy } from 'esbuild-plugin-copy';
import postcss from 'esbuild-postcss';

await build({
  entryPoints: ['./src/popup/popup.tsx', './src/content-script/content-script.ts'],
  bundle: true,
  format: 'esm',
  jsx: 'automatic',
  outdir: 'build',
  entryNames: '[name]',
  plugins: [
    postcss(),
    copy({
      assets: {
        from: ['./public/*'],
        to: ['./'],
      },
    }),
  ],
});
