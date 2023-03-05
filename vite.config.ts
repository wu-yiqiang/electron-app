import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import * as path from 'path'
import electron from 'vite-plugin-electron'
import electronRenderer from 'vite-plugin-electron/renderer'
import polyfillExports from 'vite-plugin-electron/polyfill-exports'
import { resolve } from 'path'
import svgLoader from 'vite-svg-loader'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// 路径查找
const pathResolve = (dir: string): string => {
  return resolve(__dirname, '.', dir)
}
// 设置别名
const alias: Record<string, string> = {
  '/@': pathResolve('src'),
  '@': pathResolve('src'),
  '@build': pathResolve('build')
}
export default defineConfig({
  resolve: { alias },
  plugins: [
    vue(),
    electron({
      main: {
        entry: 'electron-main/index.ts' // 主进程文件
      },
      // preload: {
      //   input: path.join(__dirname, './electron-preload/index.ts') // 预加载文件
      // }
    }),
    electronRenderer(),
    polyfillExports(),
    svgLoader(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [pathResolve('src/assets/icon/svg/')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "/@/assets/css/index.scss"; @import "/@/assets/css/mixin.scss";`
      }
    },
  },
  // server: {
  //   // 是否开启 https
  //   https: true,
  //   hmr: true,
  //   // 端口号
  //   port: 3002,
  //   host: '0.0.0.0',
  //   // 本地跨域代理
  //   // proxy: {
  //   //   '/api/v1': {
  //   //     // target: VITE_APP_BASE_API,
  //   //     // changeOrigin: true
  //   //   }
  //   // }
  // },
  build: {
    emptyOutDir: false // 默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录
  }
})
