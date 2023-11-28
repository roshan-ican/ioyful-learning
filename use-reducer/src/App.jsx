import { useState } from "react";
import "./App.css";
import RefComponent from "./components/RefComponent";
import useReducerApp from "./components/Reducer";
import ReducerApp from "./components/Reducer";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <>
      <div>
        {/* <RefComponent /> */}
        <p>Something</p>
        <TodoForm />
        {/* <ReducerApp /> */}
      </div>
    </>
  );
}

export default App;
