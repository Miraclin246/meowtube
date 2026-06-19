import React from 'react';
import VideoList from '../components/VideoList';
import ShortsCard from '../components/ShortsCard';
import { videos, shorts } from '../data';

function Home({ searchQuery }) {
  const filteredVideos = videos.filter(v =>
    v.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home">
      <VideoList videos={filteredVideos.slice(0,3)} />
      <h2>Shorts</h2>
      <div className="shorts-row">
        {shorts.map(short => (
          <ShortsCard key={short.id} short={short} />
        ))}
      </div>
      <VideoList videos={filteredVideos.slice(3,6)} />
    </div>
  );
}

export default Home;
