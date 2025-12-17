import React from 'react';

const CategoryHeader: React.FC<{visual: React.ReactNode}> = ({ visual }) => (
    <div className="category-header">
      {visual}
    </div>
);

export default CategoryHeader;