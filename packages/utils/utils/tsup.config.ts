import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  dts: true,
  sourcemap: true,
  clean: true,
  format: ['cjs', 'esm'],
  minify: process.env.NODE_ENV === 'production',
  watch: process.env.NODE_ENV === 'development',
  banner: { js: "'use client';" },
});
