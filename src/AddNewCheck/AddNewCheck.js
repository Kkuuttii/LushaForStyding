import React from "react";
import "./AddNewCheck.css"
function AddNewCheck () {
    return (
        <div className = "add-new-check">
            <div>
                <input type = "text" value = "add new item" className = "add-new-item"/>
            </div>
            <div>
                <input type = "submit" value = "Add Item" className = "add-item-button"/>
            </div>
        </div>
    )
}

export default AddNewCheck;