import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

export default class ComponentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  addTodo = (text) => {
    this.setState((prevState) => ({
      todos: [
        ...prevState.todos,
        {
          id: Math.random(),
          completed: false,
          text,
        },
      ],
    }));
  }

  toggleTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => ((todo.id === id)
        ? { ...todo, completed: !todo.completed }
        : todo)),
    }));
  }

  removeTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <Header addTodo={this.addTodo} />
        <List todos={todos} toggleTodo={this.toggleTodo} removeTodo={this.removeTodo} />
        <Footer length={todos.length} />
      </div>
    );
  }
}
