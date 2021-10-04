import React, { useState } from "react";
import "./CheckLine.css"
function CheckLine(props) {
		let [ done, setDone ] = useState(false);

		function textClick() {
			// Если мы хотим изменить состояние, 
			//основываясь на текущем состоянии, то нужно использовать функцию, 
			//и в первый параеметр попадет текущее состояние нашего состояния
			setDone((prev) => !prev);
		};

    return (
            <div className = "check-line">
                <div onClick={textClick} className = { `what-we-need-todo ${done ? "done" : ""}` }>{props.label}</div>
                <div className = "buttons-block">
                    <div ><button type = "reset" className = "deal-button"> DEL </button></div>
                    <div> <button className = "deal-button"> ! </button></div>
                </div>
            </div>
    );
}
export default CheckLine;