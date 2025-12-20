import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Fizjoterapia_Karol_Madry/", // Zastąp <REPO_NAME> nazwą swojego repozytorium
})
