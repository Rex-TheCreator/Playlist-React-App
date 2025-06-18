import React from "react";

function SearchButton(props) {
  return (
    <button 
    className="search-button"
    aria-label="Search Tracks"
    onClick={props.onClick}
    >
      Search
    </button>
  );
}

export default SearchButton;
