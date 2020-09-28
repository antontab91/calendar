import React from "react";
import ReactDOM from "react-dom";
import Calendar from "./components/Calendar";
import "./index.scss";

const rootElement = document.querySelector("#root");

ReactDOM.render(<Calendar />, rootElement);
