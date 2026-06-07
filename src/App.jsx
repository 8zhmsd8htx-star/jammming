import { useState } from 'react';
import SearchBar from '../src/SearchBar/SearchBar';
import SearchResults from '../src/SearchResults/SearchResults';
import Playlist from '../src/Playlist/Playlist';

function App() {
  const [searchResults, setSearchResults] = useState([
    { id : 1, name: 'Track 1', artist: 'Artist 1', album: 'Album 1' },
    { id : 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2' },
    { id : 3, name: 'Track 3', artist: 'Artist 3', album: 'Album 3' }
  ]);

  const [playlistTracks, setPlaylistTracks] = useState([]);

  function addTrack(track) {
    setPlaylistTracks(prev => {
      return [...prev, track];
    })
  }

  function removeTrack(track) {
    setPlaylistTracks(prev => {
      return prev.filter(t => t.id !== track.id);
    });
  }

  return (
    <div className='App'>
      <h1>Jammming</h1>
      <SearchBar />

      <SearchResults
        results={searchResults}
        addTrack={addTrack} 
      />

      <Playlist 
        tracks={playlistTracks}
        removeTrack={removeTrack}
      />
      
    </div>
  );
}

export default App;
