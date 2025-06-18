import React from "react";
import Track from "./track/track";

function TrackList({ tracks, trackAction, actionSignifier }) {
    return (
        <div className="track-list">
            {tracks.map((track, index) => (
                <Track
                    key={index}
                    trackTitle={track.title}
                    trackAuthor={track.author}
                    trackImage={track.image}
                    track={track}
                    action={trackAction}
                    actionSignifier={actionSignifier}
                />
            ))}
        </div>
    );
}

export default TrackList;
// This component receives a list of tracks as props and maps over them to render a Track component for each track.