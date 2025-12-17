import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from './icons/icons';
// Icons 모듈이 named exports를 제공하지 않을 수 있으므로 namespace import를 사용하고
// 존재 여부를 런타임에 확인해서 안전하게 렌더링합니다.

interface Item {
  id: number;
  title: string;
  description: string;
  path?: string;
  imageUrl?: string;
}

interface ItemCardProps {
  item: Item;
  onDelete: (id: number) => void;
  category: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, onDelete, category }) => {
  const getCategoryIcon = () => {
    // named export 또는 default 내보내기 둘 다 커버
    const GameControllerIcon = (Icons as any).GameControllerIcon || (Icons as any).default?.GameControllerIcon;
    const UsersIcon = (Icons as any).UsersIcon || (Icons as any).default?.UsersIcon;
    const WebsiteIcon = (Icons as any).WebsiteIcon || (Icons as any).default?.WebsiteIcon;

    switch (category) {
      case 'Websites': return WebsiteIcon ? <WebsiteIcon /> : <span>W</span>;
      case '게임': return GameControllerIcon ? <GameControllerIcon /> : <span>🎮</span>;
      case 'mbti': return UsersIcon ? <UsersIcon /> : <span>👥</span>;
      default: return <span>{item.name.charAt(0)}</span>;
    }
  };
  
  // TrashIcon도 동일 방식으로 안전하게 가져오기
  const TrashIcon = (Icons as any).TrashIcon || (Icons as any).default?.TrashIcon;

  return (
    <Link to={item.path || '/'} className="item-card-link" aria-label={item.title}>
      <article className="item-card" aria-labelledby={`item-title-${item.id}`}>
        <div
          className="card-thumbnail"
          style={item.imageUrl ? { backgroundImage: `url(${item.imageUrl})` } : undefined}
        >
          {/* 이미지가 없으면 아이콘 또는 첫 글자 표시 */}
          {!item.imageUrl && getCategoryIcon()}
          <div className="thumbnail-overlay" aria-hidden="true" />
        </div>
        <div className="card-content">
          <h3 id={`item-title-${item.id}`}>{item.title}</h3>
          <p>{item.description || 'No description provided.'}</p>
        </div>
        <button className="delete-btn" onClick={(e) => { e.preventDefault(); onDelete(item.id); }} aria-label={`Delete ${item.title}`}>
          {TrashIcon ? <TrashIcon /> : <span>🗑️</span>}
        </button>
      </article>
    </Link>
  );
};

export default ItemCard;