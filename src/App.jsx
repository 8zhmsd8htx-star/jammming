import { useState } from 'react';
import SearchBar from '../src/SearchBar/SearchBar';
import SearchResults from '../src/SearchResults/SearchResults';
import Playlist from '../src/Playlist/Playlist';

function App() {
  const [searchResults, setSearchResults] = useState([
    { id : 1, name: 'Track 1', artist: 'Artist 1', album: 'Album 1', uri: 'spotify:track:1' },
    { id : 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2', uri: 'spotify:track:2' },
    { id : 3, name: 'Track 3', artist: 'Artist 3', album: 'Album 3', uri: 'spotify:track:3' },
  ]);

  const [playlistTracks, setPlaylistTracks] = useState([]);

  const [playlistName, setPlaylistName] = useState('New Playlist');

  function handlePlaylistNameChange(newName) {
    setPlaylistName(newName);
  }

  function addTrack(track) {
    setPlaylistTracks(prev => {
      const exists = prev.some(t => t.id === track.id);

      if (exists) return prev;

      return [...prev, track];
    })
  }

  function removeTrack(track) {
    setPlaylistTracks(prev => {
      return prev.filter(t => t.id !== track.id);
    });
  }

  function savePlaylist() {
    const uris = playlistTracks.map(track => track.uri);

    console.log(uris);

    setPlaylistTracks([]);
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
        name={playlistName}
        onNameChange={handlePlaylistNameChange} 
        tracks={playlistTracks}
        removeTrack={removeTrack}
        onSave={savePlaylist}
      />
      
    </div>
  );
}

export default App;
