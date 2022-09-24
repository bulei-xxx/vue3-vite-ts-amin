import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  server:{
    host:'0.0.0.0' ,//ip地址
    port: 80, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
  }

})
