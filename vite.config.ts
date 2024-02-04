import { defineConfig } from "vite";
import { svelte } from '@sveltejs/vite-plugin-svelte';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: false,
    sourcemap: true,

    lib: {
      entry: "src/main.ts",
      formats: ["es", "cjs"],
    },
  },
  plugins: [
    svelte({ configFile: 'svelte.config.js' }),
    dts({
      rollupTypes: true,
    }),
  ],
});
