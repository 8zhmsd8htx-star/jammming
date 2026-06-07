import TrackList from '../TrackList/TrackList';

export default function Playlist({ tracks, removeTrack }) {
    return (
        <div className='playlist'>
            <h2>Playlist</h2>

            <button className='save-button'>
                Save to Spotify
            </button>

            <TrackList tracks={tracks} removeTrack={removeTrack} />
        </div>
    );
}