import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'signalrx-react',
      fileName: 'index',
      formats: ["es"]
    },
    rollupOptions: {
      external: ["vite"]
    }
  },

  
})
