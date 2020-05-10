import React from 'react';
import PropTypes from 'prop-types';

import Todo from '../Todo';

const List = ({ todos, toggleTodo, removeTodo }) => (
  <ul>
    {todos.map((todo) => {
      const { id } = todo;
      return (
        <Todo
          key={id}
          id={id}
          todo={todo}
          onClick={() => toggleTodo(id)}
          removeTodo={removeTodo}
        />
      );
    })}
  </ul>
);

List.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  })).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default List;
