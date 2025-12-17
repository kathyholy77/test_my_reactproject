// vite.config.ts 파일의 전체 내용입니다.

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  // 개발 중에는 루트(base="/")로 서빙해서 경고를 제거하고,
  // 빌드할 때는 GitHub Pages 경로로 설정합니다.
  const base = command === 'serve' ? '/' : '/test_my_reactproject/';

  return {
    base,
    plugins: [react()],
  };
});