import { useState } from 'react';
import SearchBar from '../src/SearchBar/SearchBar';
import SearchResults from '../src/SearchResults/SearchResults';

function App() {
  const [searchResults, setSearchResults] = useState([
    { id : 1, name: 'Track 1', artist: 'Artist 1', album: 'Album 1' },
    { id : 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2' },
    { id : 3, name: 'Track 3', artist: 'Artist 3', album: 'Album 3' }
  ]);
  const [playlistTracks, setPlaylistTracks] = useState([]);

  return (
    <div className='App'>
      <h1>Jammming</h1>
      <SearchBar />
      <SearchResults results={searchResults} />
    </div>
  );
}

export default App;
