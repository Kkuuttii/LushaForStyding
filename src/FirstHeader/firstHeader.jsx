import React from "react";
import "./FirstHeader.css"
function FirstHeader (props) {
    return (
      <div className = "header">
        <div className = "to-do-list"> To Do List </div>
        <div className = "counter"> {props.listActive} more to do, {props.listDone} done </div>
      </div>
    );
  }

  export default FirstHeader;