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

  function search(){
    alert("Searching for " + searchTerm);
    //setPlaylistTracks(trackData.filter(track => track.title.includes(searchTerm)));
  }

  return (
    <>
      <SearchBar onSearch={setSearchTerm} value={searchTerm} searchButtonFunction={search} />
      <SearchResults tracks={trackData} />  {/*use 'tracks={trackData.filter(track => track.title.includes(searchTerm))}' later*/}
      <Playlist tracks={playlistTracks} />
    </>
  )
}

export default App
