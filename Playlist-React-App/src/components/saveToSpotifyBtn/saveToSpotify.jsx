import React from "react";

function SaveToSpotifyBtn({ onSave }) {
    return (
        <button onClick={onSave}>
            Save to Spotify
        </button>
    );
}

export default SaveToSpotifyBtn;
// This component renders a button that, when clicked, triggers the onSave function passed as a prop.