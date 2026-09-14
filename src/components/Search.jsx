import React from "react";
import { SearchIcon } from "lucide-react";
import "./search.css";

function Search() {
  return (
    <div className="search">
      <input type="text" placeholder="search..." />
      <SearchIcon className="searchIcon" size={26} color="#fff" />
    </div>
  );
}

export default Search;
