import preactRefresh from '@prefresh/vite'
import analyzer from "rollup-plugin-analyzer";
import visualizer from "rollup-plugin-visualizer";
import { defineConfig } from 'vite'

export default defineConfig({
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  plugins: [preactRefresh()],
  alias: {
    react: 'preact/compat',
    'react-dom': 'preact/compat'
  },
  build: {
    rollupOptions: {
      plugins: [visualizer(), analyzer()]
    }
  }
})
