import React, { useState } from 'react';
import './MusicSearch.css';

function MusicSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [artistInfo, setArtistInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();
    setErrorMessage('');
    try {
      const response = await fetch(`https://spotify-api-wrapper.appspot.com/artist/${searchQuery}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if (data.artists.items.length === 0) {
        setErrorMessage('Artist not found. Try another name.');
        setArtistInfo(null);
        return;
      }
      setArtistInfo(data.artists.items[0]);
    } catch (error) {
      console.error('Error fetching artist details:', error);
      setErrorMessage('Failed to fetch data. Please try again.');
    }
  };

  return (
    <div className="music-search-container">
      <h1>🎵 Find Your Favorite Artist</h1>
      <form onSubmit={handleSearch} className="search-form">
        <input 
          type="text" 
          placeholder="Enter artist name..." 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
          required 
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      
      {artistInfo && (
        <div className="artist-card">
          <img 
            className="artist-image" 
            src={artistInfo.images[0]?.url || 'https://via.placeholder.com/150'} 
            alt={artistInfo.name} 
          />
          <h2>{artistInfo.name}</h2>
          <p>Followers: {artistInfo.followers.total.toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}

export default MusicSearch;