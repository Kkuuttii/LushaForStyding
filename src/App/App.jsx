import React, { useState } from "react";
import FirstHeader from "../FirstHeader/FirstHeader.jsx";
import SearchAndFilters from "../SearchAndFilters/SearchAndFilters";
import CheckLists from "../CheckLists/CheckLists"
import AddNewCheck from "../AddNewCheck/AddNewCheck.jsx";
import "./App.css"
function App() {
  let [checkListItems, setCheckListItems] = useState(
    [
      {
        id: 1,
        label: "Drink coffee",
        important: true,
        done: false,
        hidden: false,
      },
      {
        id: 2,
        label: "Make awesome app",
        important: false,
        done: false,
        hidden: false,
      },
      {
        id: 3,
        label: "Pet the Cat",
        important: true,
        done: true,
        hidden: false,
      },
      {
        id: 4,
        label: "love myself",
        important: false,
        done: true,
        hidden: false,
      }
    ]
  );

  let listDone = checkListItems.filter(item => item.done).length;
  let listActive = checkListItems.filter(item => !item.done).length;

  function deleteLineHandler(id) {
    setCheckListItems((prev) => prev.filter((item) => id !== item.id));
  }

  function addHandler(inputValue) {
    let id = Math.random();
    setCheckListItems([...checkListItems, { id: id, label: inputValue, important: false, done: false, hidden: false}]);
  }

  function activeHandler() {
    setCheckListItems((prev) => prev.map(item => {
      item.hidden=item.done;
      return item;
      }));
  }

  function allHandler() {
    setCheckListItems((prev) => prev.map(item => {
      item.hidden=false;
      return item;
      }));
  }

  function doneHandler() {
    setCheckListItems((prev) => prev.map(item => {
        item.hidden = !item.done;
      return item;
      }));
  }

  function filterHandler(filterValue) {
    setCheckListItems((prev) => prev.map(item => {
      if(!item.label.trim().toLowerCase().includes(filterValue.trim().toLowerCase())) {
        item.hidden=true;
      } else {
        item.hidden=false;
      }
      return item;
    }))
  }

  function makeDone(id) {
    setCheckListItems((prev) => prev.map(item => {
      if(id === item.id){
        item.done = !item.done;
      }
    return item;
    }));
  }
  
  return (
    <div className="app">
      <div className="main-border">
        <FirstHeader listDone={listDone} listActive={listActive}/>
        <SearchAndFilters checkListItems={checkListItems} onActive={activeHandler} onAll={allHandler} onDone={doneHandler} onChange={filterHandler}/>
        <CheckLists checkListItems={checkListItems} onDelete={deleteLineHandler} onMakeDone={makeDone}/>
        <AddNewCheck onAdd={addHandler} />
      </div>
    </div>
  );
}

export default App;