import React from "react";
import ReactDOM from "react-dom";
import DataContextProvider from "./contexts/reducer";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </React.StrictMode>,
  rootElement
);
