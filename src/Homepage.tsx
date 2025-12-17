// App.tsx 파일의 최종 정리된 전체 내용입니다.

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Website, WebsiteCategory} from '../types';
import contactsData from '../contacts'; // 외부 데이터 파일에서 불러오기
import './index.css';

// --- 우리가 창고로 옮긴 모든 컴포넌트들을 불러옵니다! ---
import CategoryHeader from './components/CategoryHeader';
import ItemCard from './components/ItemCard';
import EmptyState from './components/EmptyState';
import CreateItemModal from './components/CreateItemModal';
import { GameControllerIcon, UsersIcon } from './components/icons/icons';

// --- 인터페이스 정의 (로컬 사용용) ---
interface Item {
  id: number;
  name: string;
  description: string;
  category: string;
  path: string; // contacts.tsx의 path 필드를 전달합니다.
  imageUrl?: string;
}

// --- 메인 페이지 컴포넌트 ---
const MainPage: React.FC = () => {
  // contactsData는 Website[] 형식(id: string, title 등) 이므로
  // Item 형태로 매핑해서 컴포넌트에 전달합니다.
  const items: Item[] = useMemo(() => {
    return contactsData.map((w) => ({
      id: Number(w.id) || 0,
      name: w.title,
      description: w.description,
      category: w.category as string,
      path: w.path || '/', // contacts의 path를 그대로 전달
      imageUrl: w.imageUrl || '',
    }));
  }, []);

  const [websites, setWebsites] = useState<Website[]>(contactsData);
  // 기본 카테고리를 데이터에서 첫 항목의 category로 초기화
  const [activeCategory, setActiveCategory] = useState<WebsiteCategory | 'ALL'> ("ALL");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newItem, setNewItem] = useState({ name: '', description: '' });

  // items를 activeCategory로 필터링 — 이전의 자기참조 오류 수정
  const filteredWebsites = useMemo(() => {
    if (activeCategory === 'ALL') return items;
    return items.filter((w) => w.category === activeCategory);
  }, [items, activeCategory]);

  // 핸들러들 정의(간단 구현 — 필요시 로컬 state 또는 localStorage에 연결)
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    // 간단 동작: 모달 닫기. 실제로는 items/state에 추가하거나 localStorage에 저장 필요.
    setIsModalOpen(false);
    setNewItem({ name: '', description: '' });
  };

  const handleDelete = (id: number) => {
    // 현재는 자리 표시자 동작입니다. 필요하면 items를 상태로 올려 제거 로직 추가.
    console.log('delete item', id);
  };

  return (
    <div className="main-container">
      <main>
        <div className="item-grid">
          {filteredWebsites.length > 0 ? (
            filteredWebsites.map((item) => (
              <ItemCard key={item.id} item={item} category={activeCategory} onDelete={handleDelete} />
            ))
          ) : (
            <EmptyState category={activeCategory} onCTAClick={handleOpenModal} />
          )}
        </div>
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
    </div>
  );
};

export default MainPage;