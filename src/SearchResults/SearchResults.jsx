export default function SearchResults({ results }) {
    return (
        <div className='search-results'>
            <h2>Results</h2>

            {results.map(track => (
                <div key={track.id}>
                    <p>{track.name}</p>
                    <p>{track.artist}</p>
                </div>
            ))}
        </div>
    );
}