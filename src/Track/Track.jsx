export default function Track({ track, addTrack, removeTrack }) {
    return (
        <div className="track">
            <p>{track.name}</p>
            <p>{track.artist}</p>
            <p>{track.album}</p>
            
            {addTrack && (
                <button onClick={() => addTrack(track)}>+</button>
            )}
            {removeTrack && (
                <button onClick={() => removeTrack(track)}>−</button>
            )}
        </div>
    );
}