import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

const pathSrc = path.resolve(__dirname, 'src')

export default defineConfig({
  resolve: {
    alias: {
      '@': pathSrc,
    },
  }
  plugins: [
    vue(),
    AutoImport({
               imports: ['vue'],
      resolvers: [
                // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon',
        }),
        ElementPlusResolver()
        ],
    }),
    Components({
      resolvers: [
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep'],
        }),
        ElementPlusResolver()],
    }),
    Icons({
      autoInstall: true,
    }),
  ],
})