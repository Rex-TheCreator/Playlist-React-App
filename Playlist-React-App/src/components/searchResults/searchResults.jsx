import React from "react";
import Track from "../tracklist/track/track";
import TrackList from "../tracklist/tracklist";

function SearchResults(props) {
    const tracks = props.tracks;

    return (
        <div className="search-results">
            {tracks.length > 0 ? (
                <TrackList tracks={tracks} />
            ) : (
                <p>No results found</p>
            )}
        </div>
    );
}

export default SearchResults;
// This component receives a list of tracks as props and makes a track list using the TrackList component.
// If there are no tracks, it displays a message indicating that no results were found.