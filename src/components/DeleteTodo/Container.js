import React, { Component } from "react";
import Presentation from "./Presentation";
import { DataContext } from "../../contexts/reducer";
import { DELETE_TODO } from "../../contexts/types";

class Container extends Component {
  static contextType = DataContext;
  handleDelete = () => {
    const [state, dispatch] = this.context;
    let index = this.props.index;
    dispatch({
      type: DELETE_TODO,
      payload: {
        index: index,
      },
      dispatch: dispatch,
    });
  };
  render() {
    return (
      <>
        <Presentation handleDelete={this.handleDelete} />
      </>
    );
  }
}

export default Container;
