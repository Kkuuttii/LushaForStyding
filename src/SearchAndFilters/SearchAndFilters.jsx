import React, { useState } from "react";
import "./SearchAndFilters.css"
function SearchAndFilters (props) {
    // let [active, setActive] = useState(false);
    // let [done, setDone] = useState(false);
    // let [all, setAll] = useState(true);
    let [backlight, setBacklight] = useState('all');

    function activeOnClick() {
      props.onActive();
      setBacklight('active');
    }
    
    function allOnClick() {
      props.onAll();
      setBacklight('all');
    }

    function doneOnClick() {
      props.onDone();
      setBacklight('done');
    }

    // function onActive(){
    //   props.onActive(); 
    //   // setActive ((prev) => !prev);
    //   }

    // function onActive(){
    //   function hi () {
    //     props.onActive();
    //     return props.onActive(),
    //   }
    //   function hi2() {
    //     (prev) => !prev
    //   }
         
    //     setActive (onActive);
    // }

    // function onDone(){
    //   props.onDone(); 
    //   setActive ((prev) => !prev);
    // }
    // function onActive(){
    //   props.onActive(); 
    //   setActive ((prev) => !prev);
    // }
// ВНИМАНИЕ setActive ((prev) => !prev); работает немного не так, а именно: загорается при нажатии, а перестает гареть только при нажатии на ту же кнопку ACTIVE, как сделать так чтобы она переставала гореть при нажатии на другие кнопки. 
// Думаю, решение этого вопроса поможет мне решить вопрос с кнопкой ALL которая должна гореть всегда, пока мы не нажмем другую кнопку
// Наверное надо создать какой то массив или типо того с состоянием кнопок и там может быть только 1 кнопка TRUE. Остальные будут FALSE. При нажатии на какую-то кнопку это все меняется, в зависимости от того, какая кнопка нажата. 
// Изначально ALL true ACTIVE false DONE false
    return (
      <div className = "search-and-filters">

        <div>
            <input type = "search" 
            onChange={(event) => props.onChange (event.target.value)}
            // onChange={(event) => setInputValue(event.target.value)} из AddNewCheck
            className = "type-to-search"
            placeholder = "type to search"/>
        </div>

        <div className = "buttons-searching-block"> 
            <button className={`${(backlight === 'all') ? "button-for-filtering-active":"button-for-filtering-not-active"}`} onClick={allOnClick}> All </button>
            <button className={`${(backlight === 'active') ? "button-for-filtering-active":"button-for-filtering-not-active"}`} onClick={activeOnClick}> 
              Active 
            </button>
            {/* ФУНКЦИЮ при клике НЕ ВЫЗЫВАЕМ (т.е. пишем ее без () )*/}
            <button className={`${(backlight === 'done') ? "button-for-filtering-active":"button-for-filtering-not-active"}`} onClick={doneOnClick}> Done </button>
        </div>
      </div>
    );
  }

  // props.checkListItems.

  // className={`${important ? "important-text" : ""}`
  // className={`${item.hidden=item.done ? "button-for-filtering-active" : "button-for-filtering-not-active"}`}

  export default SearchAndFilters;

  

 

  // function activeHandler() {
  //   setCheckListItems((prev) => prev.map(item => {
  //     item.hidden=item.done;
  //     return item;
  //     }));
  // }


  
  // let [important, setImportant] = useState(props.important);

  // function isDealImportant() {
  //   setImportant((prev) => !prev);
  // }
  
  // <div> <button onClick={isDealImportant} className={`${important ? "important-button" : "deal-button "}`}> ! </button></div>






