import React from "react";

function SearchBar(props) {
  return (
    <input
      type="text"
      placeholder="Search for a track..."
      onChange={(e) => props.onSearch(e.target.value)}
    />
  );
}

export default SearchBar;
