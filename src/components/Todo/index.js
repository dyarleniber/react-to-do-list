import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Todo = ({ todo, onClick, removeTodo }) => {
  const { id, text, completed } = todo;
  return (
    <>
      <li
        onClick={onClick}
        role="presentation"
        className={completed ? 'completed' : ''}
      >
        {text}
      </li>
      <button type="button" onClick={() => removeTodo(id)}>X</button>
    </>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};


export default Todo;
