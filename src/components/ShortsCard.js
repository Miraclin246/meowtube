import React from 'react';

function ShortsCard({ short }) {
  return (
    <div className="shorts-card">
      <img src={short.thumbnail} alt={short.title} />
      <p>{short.title}</p>
    </div>
  );
}

export default ShortsCard;
