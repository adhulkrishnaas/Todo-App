import React, { Component } from "react";
import TodoApp from "./component/TodoApp/TodoApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <TodoApp />
      </div>
    );
  }
}
