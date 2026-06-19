import React from 'react';

function CategoryBar() {
  const categories = ["All", "Music", "Mixes", "Live", "Study", "Shorts", "Subscriptions"];

  return (
    <div className="category-bar">
      {categories.map(cat => (
        <button key={cat} className="category-btn">{cat}</button>
      ))}
    </div>
  );
}

export default CategoryBar;
