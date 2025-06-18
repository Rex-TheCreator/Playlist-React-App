import { useState, useEffect } from 'react'
import svg from './assets/react.svg'
import './App.css'

import SearchBar from './components/searchBar/searchBar';
import SearchResults from './components/searchResults/searchResults';
import Playlist from './components/playlist/playlist';

function App() {
  const [trackData, setTrackData] = useState([
    { title: "FEiN", author: "Travis Scott", image: svg },
    { title: "Sigma Boy", author: "Russian Lady", image: svg },
    { title: "Corazon", author: "Maluma", image: svg }
  ]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [playlistName, setPlaylistName] = useState("My Playlist");

  function search() {
    alert("Searching for " + searchTerm);
    //setPlaylistTracks(trackData.filter(track => track.title.includes(searchTerm)));
  }
  function save() {
    alert("Saving playlist: " + playlistName);
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
