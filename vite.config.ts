// vite.config.ts 파일의 전체 내용입니다.

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 아래 'base' 부분을 추가하는 것이 가장 중요합니다!
  // 우리 웹사이트의 기본 경로를 알려주는 설정입니다.
  base: "/test_my_reactproject/", 
})