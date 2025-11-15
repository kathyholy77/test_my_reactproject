// main.tsx 파일의 전체 내용입니다.

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 1. 페이지 이동 기능을 불러옵니다.
import App from './index';
// import './index.css'; // App 컴포넌트가 있는 index.tsx에서 이미 불러오고 있으므로 여기서는 필요 없습니다.

const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      {/* 2. 우리 앱 전체에 페이지 이동 기능을 적용합니다. */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}