import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react(), sentryVitePlugin({
    org: "self-x1a",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true
  }
})