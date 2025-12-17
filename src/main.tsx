// main.tsx 파일의 전체 내용입니다.

import React from 'react';
import ReactDOM from 'react-dom/client';
// BrowserRouter 대신 HashRouter를 불러옵니다.
import App from './App';

const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      {/* 우리 앱 전체에 HashRouter를 적용합니다. */}
      <App />
    </React.StrictMode>
  );
}