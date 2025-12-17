// EmptyState.tsx 파일의 완벽하게 수정된 전체 내용입니다.

import React from 'react';
import { PlusIcon } from './icons/icons'; // 경로를 다시 ./ 로 수정했습니다. 현재 파일 구조에 이게 맞습니다.

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

export default EmptyState;
