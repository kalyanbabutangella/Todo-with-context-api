import React from "react";
import AddTodo from "../components/AddTodo";
import TodoImage from "../assets/TodoImage.jpeg";

function HomePage() {
  return (
    <div className="homepage">
      <img src={TodoImage} alt="pic" className="homepage__image" />
      <AddTodo />
    </div>
  );
}

export default HomePage;
