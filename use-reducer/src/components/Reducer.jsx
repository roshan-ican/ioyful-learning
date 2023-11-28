import { useState, useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  // console.log("🚀 ~ file: Reducer.jsx:4 ~ reducer ~ state:", state)
  // return { count: state.count + 1 };
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function ReducerApp() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    dispatch({ type: ACTIONS.INCREMENT });
  };
  const decrement = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  };
  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}
export default ReducerApp;
