import { UPDATE_TODO, ADD_TODO, DELETE_TODO } from "./types";

export const actions = (state, action) => {
  switch (action.type) {
    case UPDATE_TODO: {
      // console.log(state.todo.todoarray[0].id);
      console.log(action.payload);
      let todoarray = state.todo.todoarray;
      let needtoupdate = action.payload.updatetodo[0];
      for (let i = 0; i < todoarray.length; i++) {
        let needid = state.todo.todoarray[i].id;
        if (needid === action.payload.updatetodo[0].id) {
          let needtochangeindex = i;
          todoarray.splice(needtochangeindex, 1, needtoupdate);
          console.log(todoarray);
          action.dispatch({
            type: ADD_TODO,
            payload: {
              todoarray: todoarray,
            },
          });
        }
      }

      return state;
    }

    case DELETE_TODO: {
      console.log(action.payload.index);
      let index = action.payload.index;
      let todoarray = state.todo.todoarray;
      todoarray.splice(index, 1);
      console.log(todoarray);
      action.dispatch({
        type: ADD_TODO,
        payload: {
          todoarray: todoarray,
        },
      });
    }

    default:
      return state;
  }
};
