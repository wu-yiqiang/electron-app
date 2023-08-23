import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
const pathResolve = (dir: string): string => {
  return resolve(__dirname, '.', dir)
}
export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@': resolve('src/renderer/src'),
        '/@': resolve('src/renderer/src')
      }
    },
    plugins: [
      vue(),
      svgLoader(),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [pathResolve('src/renderer/src/assets/icon/svg/')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]'
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/renderer/src/style/index.scss"; @import "src/renderer/src/style/mixin.scss"; @import "src/renderer/src/style/variable.scss";`
        }
      }
    }
  }
})
