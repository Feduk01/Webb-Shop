import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://feduk01.github.io/Webb-Shop/',
  plugins: [react()],
})
