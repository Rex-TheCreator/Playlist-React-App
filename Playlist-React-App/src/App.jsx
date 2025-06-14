import { useState, useEffect } from 'react'
import svg from '../assets/react.svg'
import './App.css'

import SearchResults from './components/searchResults/searchResults';

function App() {
  const [trackData, setTrackData] = useState([
    { title: "FEiN", author: "Travis Scott", image: svg },
    { title: "Sigma Boy", author: "Russian Lady", image: svg },
    { title: "Corazon", author: "Maluma", image: svg }
  ]);

  return (
    <>
      <SearchResults tracks={trackData}/>
    </>
  )
}

export default App
