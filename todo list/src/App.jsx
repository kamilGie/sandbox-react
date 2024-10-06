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
    <>
      <main className="main">
        <Head />
        <ToDoList>{TDList}</ToDoList>
        <InputArea AddToDo={AddNewTD} />
      </main>
    </>
  );
}

export default App;
