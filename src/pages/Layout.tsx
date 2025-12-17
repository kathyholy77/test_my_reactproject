import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';     // 기존 헤더 컴포넌트 경로 맞춰주기
import Footer from '../components/Footer';                   // 기존 푸터 컴포넌트 경로 맞춰주기

const Layout = () => {
    return (
        <div>
            {/* <Navbar activeCategory={activeCategory} onSelectCategory={setActiveCategory} /> */}
            <Navbar />
            <Outlet /> {/* 이 부분에 페이지별 콘텐츠가 렌더링됩니다. */}
            <Footer />
        </div>
    );
};

export default Layout;