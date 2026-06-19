import React from 'react';
import { Link } from 'react-router-dom';

function VideoCard({ video }) {
  return (
    <div className="video-card">
      <Link to={`/video/${video.id}`}>
        <img src={video.thumbnail} alt={video.title} />
      </Link>
      <h3>{video.title}</h3>
      <p>{video.views} views • {video.date}</p>
    </div>
  );
}

export default VideoCard;
