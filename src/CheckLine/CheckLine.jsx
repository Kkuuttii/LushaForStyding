import React, { useState } from "react";
import "./CheckLine.css"
function CheckLine(props) { // при вызове этой функции(компонента) в качестве аргумента передаем пропсы (в данном случае в CheckLists.jsx label и important И ДРУГИЕ)
	//  let [done, setDone] = useState(props.done); //раньше было false или true описано как значение по умолчанию, но мы используем пропсы
	let [important, setImportant] = useState(props.important);

	// useEffect(() => {
	// 	console.log(`Элемент ${props.label} 2!`);
	// 	return () => console.log(`Компонент ${props.label} 1!`);
	// }, [props.done]);

	// function textClick() {
	// 	// Если мы хотим изменить состояние, 
	// 	//основываясь на текущем состоянии, то нужно использовать функцию, 
	// 	//и в первый параеметр попадет текущее состояние нашего состояния
	// 	setDone((prev) => !prev); //если состояние useState(props.done) true - сделай false. Если false - сделай true
	// };

	function isDealImportant() {
		setImportant((prev) => !prev);
	}

	return (
		<div className={`check-line ${props.hidden ? "hidden" : "" }`}>
			<div onClick={() => props.onMakeDone(props.id)} className={`what-we-need-todo ${props.done ? "done" : ""} ${important ? "important-text" : ""}`}>
				{props.label}
			</div>
			<div className="buttons-block">
				<div ><button type="reset" className="deal-button" onClick={() => props.onDelete(props.id)}> DEL </button></div>
				<div> <button onClick={isDealImportant} className={`${important ? "important-button" : "deal-button "}`}> ! </button></div>
			</div>
		</div>
	);
}
export default CheckLine;
