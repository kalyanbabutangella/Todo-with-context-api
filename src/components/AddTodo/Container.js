import React, { Component } from "react";
import Presentation from "./Presentation";
import { ADD_TODO } from "../../contexts/types";
import { DataContext } from "../../contexts/reducer";
import { v4 as uuidv4 } from "uuid";

class Container extends Component {
  static contextType = DataContext;
  constructor() {
    super();
    const initialList = [];
    this.state = {
      todoarray: initialList,
      inputtodo: "",
    };
  }

  inputTodo = (e) => {
    // console.log(e.target.value);
    this.setState({
      inputtodo: e.target.value,
    });
  };

  addTodo = () => {
    const [state, dispatch] = this.context;
    const { inputtodo } = this.state;
    if (inputtodo === "") {
      alert("Please Input a todo");
    } else {
      let id = uuidv4();
      let prevtodoarray = this.state.todoarray;
      let newtodoarray = [...prevtodoarray, { inputtodo, id }];
      this.setState({
        todoarray: newtodoarray,
        inputtodo: "",
      });
      dispatch({
        type: ADD_TODO,
        payload: {
          todoarray: newtodoarray,
        },
      });
    }
  };
  render() {
    // console.log(this.state);
    return (
      <div>
        <Presentation
          inputTodo={this.inputTodo}
          addTodo={this.addTodo}
          data={this.state}
        />
      </div>
    );
  }
}

export default Container;
