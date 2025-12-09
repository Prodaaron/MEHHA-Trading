import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://mehha-db.web.app/', // change to your domain
       generateRobotsTxt: false, // checking auto hosting solution
    }),
  ],
})
