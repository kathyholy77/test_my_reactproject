// Navbar.tsx 파일의 전체 내용입니다.
import React from 'react';

const Navbar: React.FC<{ activeCategory: string; onSelectCategory: (category: string) => void }> = ({ activeCategory, onSelectCategory }) => {
    const categories = ['Websites', '게임', 'mbti'];
    return (
      <nav className="navbar">
        {categories.map(category => (
          <a
            key={category}
            className={`nav-item ${activeCategory === category ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              onSelectCategory(category);
            }}
            aria-current={activeCategory === category ? 'page' : undefined}
          >
            {category}
          </a>
        ))}
      </nav>
    );
};

export default Navbar;
