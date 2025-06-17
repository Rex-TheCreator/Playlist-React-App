import React from "react";
import Track from "./track/track";

function TrackList({ tracks }) {
    return (
        <div className="track-list">
            {tracks.map((track, index) => (
                <Track
                    trackIndex={index}
                    trackTitle={track.title}
                    trackAuthor={track.author}
                    trackImage={track.image}
                />
            ))}
        </div>
    );
}

export default TrackList;
// This component receives a list of tracks as props and maps over them to render a Track component for each track.