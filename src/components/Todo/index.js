import React from 'react';

import './styles.css';

const Todo = ({id, text, completed, onClick, removeTodo}) => {
    return (
        <>
            <li
                onClick={onClick}
                className={completed ? 'completed' : ''}
            >
                {text}
            </li>
            <button onClick={() => removeTodo(id)}>X</button>
        </>
    );
};

export default Todo;
