import { defineConfig } from 'vite'
import { UserConfigExport, ConfigEnv } from 'vite'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Unocss(), react(), viteMockServe()],
})
