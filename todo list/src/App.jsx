import { useState } from "react";
import "./App.css";
import Head from "./components/head";
import InputArea from "./components/inputArea";
import ToDoList from "./components/todolist";

function App() {
  const [TDList, SetTDList] = useState([]);

  const AddNewTD = (newToDo) => {
    SetTDList((prevTDList) => [...prevTDList, newToDo]);
  };

  return (
    <div className="container">
      <main>
        <Head />
        <ToDoList>{TDList}</ToDoList>
        <InputArea AddToDo={AddNewTD} />
      </main>
      <h1 className="Title">TO DO LIST</h1>
    </div>
  );
}

export default App;
