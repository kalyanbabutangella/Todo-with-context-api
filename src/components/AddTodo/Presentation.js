import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import DeleteTodo from "../DeleteTodo";
import UpdateTodo from "../UpdateTodo";
import { DataContext } from "../../contexts/reducer";

function Presentation(props) {
  // console.log(props);
  const [state] = useContext(DataContext);
  const { inputTodo, addTodo, data } = props;
  // let todoArray = data.todoarray;
  let todoArrays = [];
  if (state.hasOwnProperty("todo")) {
    todoArrays = state.todo.todoarray;
    // console.log(todoArrays[0].inputtodo);
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "1.5vh",
        }}
      >
        <TextField
          id="Entertodo"
          label="Enter Todo"
          variant="outlined"
          value={data.inputtodo}
          onChange={inputTodo}
          size="small"
          style={{ width: "290px" }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={addTodo}
          size="small"
        >
          Addtodo
        </Button>
      </div>

      {todoArrays.map((todo, index) => (
        <div className="todo" key={index}>
          <span key={index}>{todo.inputtodo}</span>
          <div>
            <UpdateTodo id={todo.id} />
            <DeleteTodo index={index} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Presentation;
