import React, { useState } from "react";
import "./AddNewCheck.css"
// import CheckLists from "./CheckLists.jsx"
function AddNewCheck (props) {
    // checkListItems
    // inputValue хранит значение которое мы ввели в  <input type = "text">
    let [inputValue, setInputValue] = useState("");

   

    return (
        <div className = "add-new-check">
            <div>
                {/* event.target.value это та строка которая записана в input в свойство value */}
                <input onChange={(event) => setInputValue(event.target.value)} type = "text" 
                onFocus = {(event) => event.target.value = ""} //чтобы поле чистилось когда мы ставим на него курсор
                placeholder = "Add new item" 
                className = "add-new-item"/>
            </div>
            <div>
                <input onClick={() => props.onAdd(inputValue)} type = "submit"  value = "Add Item" className = "add-item-button"/> 
                {/* функцию, которую мы навешиваем на "обработчик событий" мы не вызываем, мы просто говорим "Вот функция, вызови ее при клике" */}
            </div>
        </div>
    )
}

export default AddNewCheck;