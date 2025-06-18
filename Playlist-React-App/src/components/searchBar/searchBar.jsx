import React from "react";
import SearchButton from "./searchButton/searchButton";

function SearchBar(props) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      props.searchButtonFunction();
    }
  };

  return (
    <div id="search-bar">
      <label htmlFor="search-input">Search for tracks!</label>
      <input
        id="search-input"
        type="text"
        placeholder="The world is yours to listen to..."
        value={props.value}
        onChange={(e) => props.onSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <SearchButton onClick={props.searchButtonFunction} label="Search Button" />
    </div>
  );
}

export default SearchBar;
