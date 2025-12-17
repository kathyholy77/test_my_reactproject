// Footer.tsx 파일의 전체 내용입니다.
import React from 'react';

const Footer: React.FC = () => (
    <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Catherine. All rights reserved.</p>
        <p>학교 주소: 경기 분당구 하오개로 351번길 4</p>
    </footer>
);

export default Footer;