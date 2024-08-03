import { defineConfig } from 'vite'
import envCompatiable from 'vite-plugin-env-compatible'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: "REACT_APP_",
  plugins: [react(),
    envCompatiable()
  ],
})
