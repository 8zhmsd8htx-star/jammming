import TrackList from '../TrackList/TrackList';
    
export default function SearchResults({ results, addTrack }) {
    return (
        <div className='search-results'>
            <h2>Results</h2>
            <TrackList tracks={results} addTrack={addTrack} />
        </div>
    );
}