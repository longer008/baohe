import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/baohe/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@com": resolve(__dirname, "src/components"),
      "@api": resolve(__dirname, "src/api"),
      "@util": resolve(__dirname, "src/util"),
    }
  },
  css:{
    postcss: {
      plugins: [
          require('autoprefixer'),
          // require('tailwindcss'),
          // require('postcss-nested'),
          // require('postcss-simple-vars'),
          // require('postcss-import')
      ]
  }
  },
  server: {
    port: 4000,
    open: true,
    proxy: {
      '/api': {
        target: "https://www.zhihu.com/api/v3/",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    },
    cors: true
  },
  build: {
    sourcemap: false,
    // manifest: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'element-plus': ['element-plus'],
          // echarts: ['echarts']
        }
      }
    },
    chunkSizeWarningLimit: 600, //默认500
  },

})
