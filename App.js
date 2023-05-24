import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () =>{
  const [inputList, setInputList] = useState("");
  const [items, setitmes] = useState([]);
  
  const itemEvents = (event) => {
    setInputList(event.target.value);
  };

  const listOfitem = () => {
    setitmes((olditems) => {
      return [...olditems, inputList];
    });
    setInputList('');
  };

  const deleteitems = (id)=> {
    console.log("deleted");

    setitmes((olditems) => {
      return olditems.filter((arrEle, index) => {
         return index !== id;
      });
    });
  };

return (
<>
<div className="main_div">
  <div className="cneter_div">
    <br />
    <h1>ToDo List</h1>
    <br />
    <input type='text' placeholder="Add a items"
      value={inputList}
     onChange={itemEvents}/>
    <button onClick={listOfitem}> Add </button>


    <ol>
     {/*<li> {inputList} </li>*/}

     {items.map( (itemvalue, index) => {
      return <todolist
      key={index}
      id={index} 
      text = {itemvalue}
      onSelect = {deleteitems}
      />;
     })}
    </ol>
  </div>
</div>
</>
);
}

export default App;