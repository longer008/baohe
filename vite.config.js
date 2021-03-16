import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vitePluginImp from "vite-plugin-imp"
import styleImport from 'vite-plugin-style-import';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [vue(),
    styleImport({
      libs: [{
        libraryName: 'element-plus',
        esModule: true,
        resolveStyle: (name) => {
          return `element-plus/lib/theme-chalk/${name}.css`;
        },
        resolveComponent: (name) => {
          return `element-plus/lib/${name}`;
        },
      }]
    })
  ],
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
      '/zhihuApi': {
        target: "https://www.zhihu.com/api/v3/",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/zhihuApi/, '')
      },
      '/weiboApi': {
        target: "https://m.weibo.cn/api/",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/weiboApi/, '')
      },
      '/jokeApi': {
        target: "https://api.vvhan.com/api/",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/jokeApi/, '')
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
      // output: {
      //   manualChunks: {
      //     'element-plus': ['element-plus'],
      //     // echarts: ['echarts']
      //   }
      // }
    },
    chunkSizeWarningLimit: 600, //默认500
  },

})