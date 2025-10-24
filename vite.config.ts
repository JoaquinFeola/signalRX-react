import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: path.resolve(__dirname, "tsconfig.json"),
      rollupTypes: true,
      outDir: path.resolve(__dirname, "dist"),
      insertTypesEntry: true,
      entryRoot: path.resolve(__dirname, "src"),
    })
  ],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'signalrx-react',
      fileName: 'index',
      formats: ["es"],
    },

    rollupOptions: {
      external: ["vite"]
    }
  },


})
