import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
