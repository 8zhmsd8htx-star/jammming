import TrackList from '../TrackList/TrackList';

export default function Playlist({ name, tracks, removeTrack, onNameChange, onSave }) {
    return (
        <div className='playlist'>
            <input
                type='text'
                value={name}
                onChange={(e) => onNameChange(e.target.value)}
            />

            <button className='save-button' onClick={onSave}>
                Save to Spotify
            </button>

            <TrackList tracks={tracks} removeTrack={removeTrack} />
        </div>
    );
}