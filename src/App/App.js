import React from "react";
import Header from "../FirstHeader/firstHeader.js";
import SearchAndFilters from "../SearchAndFilters/SearchAndFilters";
import CheckLists from "../CheckLists/CheckLists"
import AddNewCheck from "../AddNewCheck/AddNewCheck.js";
import "./App.css"
function App () {
  return (
    <div className = "app">
      <div className = "main-border"> 
        <Header/> 
        <SearchAndFilters/>
        <CheckLists/> 
        <AddNewCheck/>
      </div>
    </div>
  );
}

  export default App;