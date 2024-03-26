import React from "react";

const SearchBar = () => {
  return (
    <div>
      <input placeholder="Search by business"></input>
      <input placeholder="Where?"></input>
      <select>
        <option value="best_match">Best Match</option>
        <option value="rating">Highest Rated</option>
        <option value="review_count">Most Reviewed</option>
      </select>
      <button>Search</button>
    </div>
  );
};

export default SearchBar;