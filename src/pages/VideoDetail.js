import React from 'react';
import { useParams } from 'react-router-dom';
import { videos } from '../data';

function VideoDetail() {
  const { id } = useParams();
  const video = videos.find(v => v.id === id);

  return (
    <div className="video-detail">
      <video controls src={video.src} />
      <h2>{video.title}</h2>
      <p>{video.description}</p>
    </div>
  );
}

export default VideoDetail;
