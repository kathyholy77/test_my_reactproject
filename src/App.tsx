import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../src/pages/Layout';
import Homepage from './Homepage'; // 기존 대시보드 메인 컴포넌트
import NewPage from '../src/pages/NewPage'; // 새로 추가할 페이지 컴포넌트
import MoviePoster from '../src/pages/sub/moviePoster'; // 컴포넌트 이름 대문자 사용

function App() {
  return (
    <BrowserRouter basename='/test_my_reactproject/'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          {/* 여기에 새로운 페이지 라우트를 추가할 예정입니다. */}
          <Route path="/NewPage" element={<NewPage />} />
          <Route path="/moviePoster" element={<MoviePoster />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;