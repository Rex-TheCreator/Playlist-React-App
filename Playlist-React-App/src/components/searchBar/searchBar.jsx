import React from "react";
import SearchButton from "./searchButton/searchButton";

function SearchBar(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for a track..."
        value={props.value}
        onChange={(e) => props.onSearch(e.target.value)}
      />
      <SearchButton onClick={props.searchButtonFunction} />
    </div>
  );
}

export default SearchBar;
