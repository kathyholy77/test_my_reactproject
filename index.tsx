// index.tsx 파일의 전체 내용입니다. 아래 코드를 그대로 붙여넣으세요.

import React, { useState, useEffect, useCallback } from 'react';
// --- 1. 페이지 이동에 필요한 기능들과, 우리가 만든 새 페이지를 불러옵니다. ---
import { Routes, Route, Link } from 'react-router-dom';
import NewPage from './NewPage'; // 우리가 만든 NewPage.tsx 파일을 불러옵니다.
import './index.css';

// --- 인터페이스 정의 ---
interface Item {
  id: number;
  name: string;
  description: string;
}

// --- 아이콘 SVG 컴포넌트 ---
// (기존 아이콘 코드는 변경 없이 그대로입니다)
const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
);
const TrashIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6"></polyline>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
      <line x1="10" y1="11" x2="10" y2="17"></line>
      <line x1="14" y1="11" x2="14" y2="17"></line>
    </svg>
);
const GameControllerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="6" x2="10" y1="12" y2="12"/>
        <line x1="8" x2="8" y1="10" y2="14"/>
        <line x1="15" x2="15.01" y1="13" y2="13"/>
        <line x1="18" x2="18.01" y1="11" y2="11"/>
        <rect width="20" height="12" x="2" y="6" rx="2"/>
    </svg>
);
const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
);
const WebsiteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
);


// --- 재사용 컴포넌트 ---
// (Navbar, Footer, CategoryHeader 등 다른 컴포넌트는 변경 없습니다)
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
const Footer: React.FC = () => (
    <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Catherine. All rights reserved.</p>
        <p>학교 주소: 경기 분당구 하오개로 351번길 4</p>
    </footer>
);
const CategoryHeader: React.FC<{visual: React.ReactNode}> = ({ visual }) => (
    <div className="category-header">
      {visual}
    </div>
);

// --- 2. ItemCard 컴포넌트를 수정하여 Link로 감싸줍니다. ---
// 이제 이 카드를 클릭하면 '/new-page' 주소로 이동합니다.
const ItemCard: React.FC<ItemCardProps> = ({ item, onDelete, category }) => {
  const getCategoryIcon = () => {
    switch (category) {
      case 'Websites': return <WebsiteIcon />;
      case '게임': return <GameControllerIcon />;
      case 'mbti': return <UsersIcon />;
      default: return <span>{item.name.charAt(0)}</span>;
    }
  };
  
  return (
    <Link to="/new-page" className="item-card-link"> {/* Link 태그로 감싸줍니다 */}
      <article className="item-card" aria-labelledby={`item-title-${item.id}`}>
        <div className="card-thumbnail">{getCategoryIcon()}</div>
        <div className="card-content">
          <h3 id={`item-title-${item.id}`}>{item.name}</h3>
          <p>{item.description || 'No description provided.'}</p>
        </div>
        {/* 삭제 버튼이 링크의 일부가 되지 않도록 e.preventDefault()를 추가합니다. */}
        <button className="delete-btn" onClick={(e) => { e.preventDefault(); onDelete(item.id); }} aria-label={`Delete ${item.name}`}>
          <TrashIcon />
        </button>
      </article>
    </Link>
  );
};

// (EmptyState, CreateItemModal 컴포넌트는 변경 없습니다)
interface EmptyStateProps {
    category: string;
    onCTAClick: () => void;
}
const EmptyState: React.FC<EmptyStateProps> = ({ category, onCTAClick }) => (
    <div className="empty-state">
        <h2>No {category} Yet</h2>
        <p>It looks like you haven't created any items for this category. Let's create the first one!</p>
        <button className="create-btn" onClick={onCTAClick}>
            <PlusIcon />
            Create Your First Item
        </button>
    </div>
);

interface CreateItemModalProps {
    category: string;
    onClose: () => void;
    onSubmit: (e: React.FormEvent) => void;
    formData: { name: string, description: string };
    onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
const CreateItemModal: React.FC<CreateItemModalProps> = ({ category, onClose, onSubmit, formData, onInputChange }) => {
    return (
      <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h2 id="modal-title">Create a New {category} Item</h2>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={onInputChange} required autoFocus />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description (Optional)</label>
              <textarea id="description" name="description" value={formData.description} onChange={onInputChange} rows={3} />
            </div>
            <div className="modal-actions">
              <button type="button" className="modal-btn cancel" onClick={onClose}>Cancel</button>
              <button type="submit" className="modal-btn submit">Create</button>
            </div>
          </form>
        </div>
      </div>
    );
};


// --- 3. 기존의 메인 페이지 전체를 MainPage라는 새로운 컴포넌트로 만듭니다. ---
// 원래 App 컴포넌트의 내용이 그대로 들어갑니다.
const MainPage: React.FC = () => {
    const [allData, setAllData] = useState<{ [key: string]: Item[] }>({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newItem, setNewItem] = useState({ name: '', description: '' });
    const [activeCategory, setActiveCategory] = useState<string>('Websites');
  
    // (데이터 불러오기, 저장하기 등 모든 로직은 그대로 유지됩니다.)
    useEffect(() => {
        try {
          const storedData = localStorage.getItem('myAppData');
          if (storedData) { setAllData(JSON.parse(storedData)); }
          else {
            const initialData: { [key: string]: Item[] } = {
              'Websites': [
                { id: Date.now(), name: '나의 포토폴리오', description: '나의 작업물과 프로젝트를 선보이는 개인 포토폴리오입니다.' },
                { id: Date.now() + 1, name: '여행 블로그', description: '전 세계의 여행 이야기와 팁을 공유하는 블로그입니다.' },
                { id: Date.now() + 2, name: '이 코머스 스토어', description: '다양한 상품을 판매하는 온라인 스토어입니다.' },
              ],'게임': [
                { id: Date.now() + 3, name: '스페이스 어드벤처', description: '은하계를 탐험하는 공상 과학 게임.' },
                { id: Date.now() + 4, name: '퍼즐 퀘스트', description: '수수께끼와 퍼즐로 가득한 모험.' },
              ],'mbti': [
                { id: Date.now() + 5, name: 'INTJ 프로필', description: '전략적 사상가, 모든 일에 계획을 세웁니다.' },
                { id: Date.now() + 6, name: 'ENFP 강점', description: '열정적이고 창의적인 자유로운 영혼.' },
              ]
            };
            setAllData(initialData);
          }
        } catch (error) { console.error("Failed to load data from localStorage:", error); }
    }, []);
  
    useEffect(() => {
        if (Object.keys(allData).length > 0) {
          try { localStorage.setItem('myAppData', JSON.stringify(allData)); }
          catch (error) { console.error("Failed to save data to localStorage:", error); }
        }
    }, [allData]);
    
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => {
      setIsModalOpen(false);
      setNewItem({ name: '', description: '' });
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setNewItem(prev => ({ ...prev, [name]: value }));
    };
    const handleAddItem = (e: React.FormEvent) => {
      e.preventDefault();
      if (newItem.name.trim() === '') return;
      const item: Item = { id: Date.now(), ...newItem };
      setAllData(prev => ({ ...prev, [activeCategory]: [item, ...(prev[activeCategory] || [])] }));
      handleCloseModal();
    };
    const handleDeleteItem = useCallback((id: number) => {
      setAllData(prev => ({ ...prev, [activeCategory]: prev[activeCategory].filter(item => item.id !== id) }));
    }, [activeCategory]);
  
    const currentItems = allData[activeCategory] || [];
  
    return (
      <div className="main-container">
        <Navbar activeCategory={activeCategory} onSelectCategory={setActiveCategory} />
        <header>
          <h1>{activeCategory === 'Websites' ? 'My Websites' : activeCategory}</h1>
          <button className="create-btn" onClick={handleOpenModal} aria-label={`Create new ${activeCategory} item`}>
              <PlusIcon />
              <span>Create New</span>
          </button>
        </header>
        <main>
          {activeCategory === '게임' && <CategoryHeader visual={<GameControllerIcon />} />}
          {activeCategory === 'mbti' && <CategoryHeader visual={<UsersIcon />} />}
          {currentItems.length > 0 ? (
              <div className="item-grid">
              {currentItems.map(item => (
                  <ItemCard key={item.id} item={item} onDelete={handleDeleteItem} category={activeCategory} />
              ))}
              </div>
          ) : ( <EmptyState category={activeCategory} onCTAClick={handleOpenModal} /> )}
        </main>
        {isModalOpen && (
          <CreateItemModal
            category={activeCategory}
            onClose={handleCloseModal}
            onSubmit={handleAddItem}
            formData={newItem}
            onInputChange={handleInputChange}
          />
        )}
        <Footer />
      </div>
    );
};

// --- 4. 진짜 App 컴포넌트는 페이지들을 연결해주는 '교통정리' 역할을 합니다. ---
const App: React.FC = () => {
  return (
    <Routes>
      {/* 주소가 '/' (기본 페이지)일 때는 MainPage를 보여줍니다. */}
      <Route path="/" element={<MainPage />} />
      
      {/* 주소가 '/new-page'일 때는 우리가 만든 NewPage를 보여줍니다. */}
      <Route path="/new-page" element={<NewPage />} />
    </Routes>
  );
};

export default App;