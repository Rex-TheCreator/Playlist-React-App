import { useState, useEffect } from 'react'
import svg from './assets/react.svg'
import './App.css'

import SearchBar from './components/searchBar/searchBar';
import SearchResults from './components/searchResults/searchResults';
import Playlist from './components/playlist/playlist';

function App() {
  const [trackData, setTrackData] = useState([
    { title: "FEiN", author: "Travis Scott", image: svg , uri:"spotify:track:3KkXRkHbMCARz0aVfEt68P"},
    { title: "Sigma Boy", author: "Russian Lady", image: svg , uri:"spotify:track:3gHkLiHbMCARz0aVfEt68P"},
    { title: "Corazon", author: "Maluma", image: svg , uri:"spotify:track:3KkXRkoPmSdDD0aVfEt68P"}
  ]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [playlistName, setPlaylistName] = useState("Playlist Name");

  function search() {
    alert("Searching for " + searchTerm);
    //setPlaylistTracks(trackData.filter(track => track.title.includes(searchTerm)));
  }
  function save() {
    if (playlistTracks.length > 0) {
      alert(`Saving playlist: ${playlistName} \nTracks Saved: ` + playlistTracks.map(track => track.title).join(", "));
      alert(`Ready to send the following URIs to Spotify: \n` + playlistTracks.map(track => track.uri).join(", \n"));
      alert(`Playlist ${playlistName} has saved successfully! Playlist will be reset.`);
      setPlaylistTracks([]);
      setPlaylistName("Playlist Name");
    } else {
      alert("Playlist is empty. Add some tracks before saving.");
    }
  }
  function addTrack(track) {
    if (playlistTracks.find(addedTrack => addedTrack.title === track.title)) {
      alert("Track already in playlist");
      return;
    }
    setPlaylistTracks(prevTracks => [...prevTracks, track]);
  }
  function removeTrack(track) {
    setPlaylistTracks(prevTracks => prevTracks.filter(playlistTrack => playlistTrack.title !== track.title));
  }


  return (
    <>
      <SearchBar
        onSearch={setSearchTerm}
        value={searchTerm}
        searchButtonFunction={search} />
      <SearchResults
        tracks={trackData}
        trackAction={addTrack}
        actionSignifier="+" />  {/*use 'tracks={trackData.filter(track => track.title.includes(searchTerm))}' later*/}
      <Playlist
        tracks={playlistTracks}
        playlistName={playlistName}
        setPlaylistName={setPlaylistName}
        trackAction={removeTrack}
        actionSignifier="-"
        saveButtonFunction={save} />
    </>
  )
}

export default App
