import { createRequire } from 'node:module';
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import ckeditor5 from '@ckeditor/vite-plugin-ckeditor5'

const require = createRequire( import.meta.url );

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vite-vue3-wujie-ckeditor/',
  plugins: [
    vue(),
    vueJsx(),
    ckeditor5({ theme: require.resolve( '@ckeditor/ckeditor5-theme-lark' )})
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
