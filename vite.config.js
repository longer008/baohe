import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vitePluginImp from 'vite-plugin-imp' //打包更小
// import styleImport from 'vite-plugin-style-import'  //按需加载
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/baohe/',
  plugins: [
    vue(),
    // https://github.com/vuejs/jsx-next/blob/dev/packages/babel-plugin-jsx/README-zh_CN.md
    vueJsx({
      transformOn:true,
      optimize:true,

    }),
    // styleImport({
    //   libs: [
    //     {
    //       libraryName: 'element-plus',
    //       esModule: true,
    //       resolveStyle: name => {
    //         console.log(name)
    //         return `element-plus/lib/theme-chalk/${name}.css`
    //       },
    //       resolveComponent: name => {
    //         return `element-plus/lib/${name}`
    //       },
    //     },
    //   ],
    // }),
    vitePluginImp({
      libList: [
        {
          libName: 'element-plus',
          style: name => {
            return `element-plus/lib/theme-chalk/${name}.css`
          },
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@com': resolve(__dirname, 'src/components'),
      '@api': resolve(__dirname, 'src/api'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@views': resolve(__dirname, 'src/views'),
    },
  },
  css: {
    postcss: {
      plugins: [
        // require('autoprefixer'),
        // require('tailwindcss'),
        // require('postcss-nested'),
        // require('postcss-simple-vars'),
        // require('postcss-import')
      ],
    },
  },
  server: {
    port: 4000,
    open: false,
    // 解决Chrome 里的请求报错 "CAUTION: Provisional headers are shown"
    proxy: {
      '/api': {
        target: 'http://localhost:7002/api/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
      // '/zhihuApi': {
      //   target: 'https://www.zhihu.com',
      //   changeOrigin: true,
      //   rewrite: path => path.replace(/^\/zhihuApi/, ''),
      // },
      // '/weiboApi': {
      //   target: 'https://m.weibo.cn',
      //   changeOrigin: true,
      //   rewrite: path => path.replace(/^\/weiboApi/, ''),
      // },
      // '/jokeApi': {
      //   target: 'https://api.vvhan.com',
      //   changeOrigin: true,
      //   rewrite: path => path.replace(/^\/jokeApi/, ''),
      // },
    },
    cors: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
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
