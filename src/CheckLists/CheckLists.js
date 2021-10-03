import React from "react";
import "./CheckLists.css"
function CheckLists() {
    return (
        <div className = "checkLists">
            <div className = "check-line"> 
                <div className = "what-we-need-todo"> Drink coffee </div>
                <div className = "buttons-block">
                    <div ><button type = "reset" className = "deal-button"> DEL </button></div>
                    <div><button className = "deal-button"> ! </button></div>
                </div>
            </div>
            <div className = "check-line"> 
                <div className = "what-we-need-todo"> Make awesome app </div>
                <div className = "buttons-block">
                    <div><button type = "reset" className = "deal-button"> DEL </button></div>
                    <div><button className = "deal-button"> ! </button></div>
                </div>
            </div>            
            <div className = "check-line"> 
                <div className = "what-we-need-todo"> Have a lunch </div>
                <div className = "buttons-block">
                    <div><button type = "reset" className = "deal-button"> DEL </button></div>
                    <div><button className = "deal-button"> ! </button></div>
                </div>
            </div>
        </div>
    )
}
export default CheckLists;