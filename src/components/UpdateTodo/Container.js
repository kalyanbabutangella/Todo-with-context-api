import React, { Component } from "react";
import Presentation from "./Presentation";
import { UPDATE_TODO } from "../../contexts/types";
import { DataContext } from "../../contexts/reducer";

class Container extends Component {
  static contextType = DataContext;
  constructor() {
    super();
    this.state = {
      inputtodo: "",
    };
  }

  updateTodo = () => {
    const [state, dispatch] = this.context;
    const { inputtodo } = this.state;
    let id = this.props.id;
    dispatch({
      type: UPDATE_TODO,
      payload: {
        updatetodo: [{ inputtodo, id }],
      },
      dispatch: dispatch,
    });
    this.setState({
      inputtodo: "",
    });
  };
  handleUpdate = (e) => {
    // console.log(e.target.value);
    this.setState({
      inputtodo: e.target.value,
    });
  };

  render() {
    // console.log(this);
    return (
      <>
        <Presentation
          handleUpdate={this.handleUpdate}
          updateTodo={this.updateTodo}
          data={this.state}
        />
      </>
    );
  }
}

export default Container;
