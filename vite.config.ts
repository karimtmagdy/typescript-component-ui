import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'typescript-component-ui',
      fileName: (format) => `typescript-component-ui.${format}.js`,
    }
  },
  plugins: [react()],
})
