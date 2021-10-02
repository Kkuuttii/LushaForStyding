import React from "react";
import "./SearchAndFilters.css"
function SearchAndFilters () {
    return (
      <div className = "search-and-filters">
        <div>
            <input type = "search" value = "type to search" className = "type-to-search"/>
        </div>
        <div className = "buttons-searching-block"> 
            <button className = "button-for-filtering"> All </button>
            <button className = "button-for-filtering"> Active </button>
            <button className = "button-for-filtering button-done"> Done </button>
        </div>
      </div>
    );
  }

  export default SearchAndFilters;