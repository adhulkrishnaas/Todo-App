import React, { Component } from "react";
import "./TodoApp.css";
export default class TodoApp extends Component {
  state = {
    input: "",
    items: [],
  };

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  storeItems = (event) => {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.input],
      input: "",
    });
  };

  deleteItem = (index) => {
    const allItems = [...this.state.items];
    allItems.splice(index, 1);
    this.setState({
      items: allItems,
    });
  };

  render() {
    return (
      <div>
        <div className="todo-container">
          <form className="input-section" onSubmit={this.storeItems}>
            <h1>Todo App</h1>

            <input
              type="text"
              placeholder="Enter items..."
              value={this.state.input}
              onChange={this.handleChange}
            />
          </form>
          <ul>
            {this.state.items.map((data, index) => (
              <li key={index}>
                {data}{" "}
                <i
                  className="fa-solid fa-trash-can"
                  onClick={() => this.deleteItem(index)}
                ></i>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
