import "./style.scss";
import React from "react";
import ReactDOM from "react-dom";
import Game from "./js/components/game";
import store from "./js/store";
import { Provider } from "react-redux";

var root = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  root
);
