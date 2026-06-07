import Track from '../Track/Track';

export default function TrackList({ tracks, addTrack, removeTrack }) {
    return (
        <div className='track-list'>
            {tracks.map(track => (
                <Track
                    key={track.id}
                    track={track}
                    addTrack={addTrack}
                    removeTrack={removeTrack}
                />
            ))}
        </div>
    );
}