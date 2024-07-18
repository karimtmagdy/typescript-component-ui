import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from "vite-plugin-dts"; import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'typescript-component-ui',
      fileName: (format) => `typescript-component-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    sourcemap: true,
    outDir: 'lib',
    emptyOutDir: true,
  },
  plugins: [react(), dts()],
})
