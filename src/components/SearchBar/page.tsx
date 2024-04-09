import React from "react";

const SearchBar = () => {
  return (
    <div className="h-64 flex bg-[url('/searchbar-bg-mobile.jpg')] items-center" >
      <div className="flex flex-col justify-around mx-5 w-full h-48">
      <input placeholder="Search by business" className="border-2 rounded w-full h-8"></input>
      <input placeholder="Where?" className="border-2 rounded w-full h-8"></input>
      <select className="border-2 rounded w-full h-8">
        <option value="best_match">Best Match</option>
        <option value="rating">Highest Rated</option>
        <option value="review_count">Most Reviewed</option>
      </select>
      <button className="rounded w-full h-12 bg-amber-800 text-white">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;