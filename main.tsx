import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './index'; // App 컴포넌트를 불러옵니다.

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}