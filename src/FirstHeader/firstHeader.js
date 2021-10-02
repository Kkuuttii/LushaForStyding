import React from "react";
import "./firstHeader.css"
function Header () {
    return (
      <div className = "header">
        <div className = "to-do-list"> To Do List </div>
        <div className = "counter"> 3 more to do, 0 done </div>
      </div>
    );
  }

  export default Header;