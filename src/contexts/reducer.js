import React, { createContext, useReducer } from "react";
import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./types";
import { actions } from "./actions";

export const DataContext = createContext();

const initialState = {};

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      // console.log("reducer", action.payload);
      const todo = action.payload;
      return {
        ...state,
        todo: todo,
      };
    
    case UPDATE_TODO:
      // console.log(action.payload);
      return actions(state, action);

    case DELETE_TODO:
      return actions(state, action);
    
    default:
      // console.log("defaultre", action.payload);
      return state;
  }
};

function DataContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DataContext.Provider value={[state, dispatch]}>
      {props.children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
