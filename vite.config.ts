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
      "@views": resolve(__dirname, "src/views"),
    }
  },
  css:{
    postcss: {
      plugins: [
          // require('autoprefixer'),
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
    // 解决Chrome 里的请求报错 "CAUTION: Provisional headers are shown"
    proxy: {
      '/zhihu-api': {
        target: "https://www.zhihu.com/api/v3/",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/zhihu-api/, '')
      },
      '/weibo-api': {
        target: "https://m.weibo.cn/api/",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/weibo-api/, '')
      }
    },
    cors: true
  },
  build: {
    outDir:"dist",
    assetsDir:"assets",
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
