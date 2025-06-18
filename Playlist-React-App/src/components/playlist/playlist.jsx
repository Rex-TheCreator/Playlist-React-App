import React from "react";
import TrackList from "../tracklist/tracklist";
import SaveToSpotifyBtn from "../saveToSpotifyBtn/saveToSpotify";

function Playlist(props) {
    const tracks = props.tracks;

    return (
        <div className="playlist">
            <input id="playlist-title" type="text" value={props.playlistName} onChange={(e) => props.setPlaylistName(e.target.value)} />
            {tracks.length > 0 ? (
                <TrackList tracks={tracks} trackAction={props.trackAction} actionSignifier={props.actionSignifier} />
            ) : (
                <p>Looks empty here... Add some songs!</p>
            )}
            <SaveToSpotifyBtn onSave={props.saveButtonFunction} />
        </div>
    );
};

export default Playlist;
// This component represents a playlist. It includes an input field for the playlist title, 
// a TrackList component to display the tracks, and a SaveToSpotifyBtn component to save the playlist to Spotify