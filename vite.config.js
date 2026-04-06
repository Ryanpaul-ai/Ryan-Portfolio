import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.PNG'],
  plugins: [react()],
  optimizeDeps: {
  exclude: ['@react-three/fiber']
},
   build: {
    chunkSizeWarningLimit: 1600
   },
build: {
    target: 'esnext'
  },
  ssr: {
    noExternal: ['three', '@react-three/fiber', '@react-three/drei']
  }
})
