import React from "react";
import Track from "../track/track";

function SearchResults(props) {
    const tracks = props.tracks;

    return (
        <div className="search-results">
            {tracks.length > 0 ? (
                tracks.map((track, index) => (
                    <Track
                        key={index}
                        trackTittle={track.title}
                        trackAuthor={track.author}
                        trackImage={track.image}
                    />
                ))
            ) : (
                <p>No results found</p>
            )}
        </div>
    );
}

export default SearchResults;
// This component receives a list of tracks as props and maps over them to render a Track component for each track.
// If there are no tracks, it displays a message indicating that no results were found.
// The Track component is expected to display the track's title, author, and image.
// The `key` prop is used to uniquely identify each Track component in the list, which helps React optimize rendering.