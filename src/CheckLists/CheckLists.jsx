import React from "react";
import CheckLine from "../CheckLine/CheckLine";
import "./CheckLists.css"
function CheckLists(props) {


	
	
	let checkLine = props.checkListItems.map((item) => {
		return <CheckLine
			id={item.id}
			label={item.label}
			important={item.important}
			done={item.done}
			onMakeDone={props.onMakeDone}
			// onDone={props.onDone}
			onDelete={props.onDelete}
			hidden={item.hidden}
			key={item.id}
		/> //вызвали функцию(компонент) CheckLine с аргументами props.label и props.important и т.д.
	})

	/** мы можем использовать в jsx кавычки "" для передачи строк, а так же {} для передачи js кода в important передастся результат выполнения кода */
	return (
		<div
			className="checkLists">
			{checkLine}
		</div>
	)
}
export default CheckLists;