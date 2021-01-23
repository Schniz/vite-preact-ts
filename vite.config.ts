import preactRefresh from '@prefresh/vite'
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
  }
})
