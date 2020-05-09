import React from 'react';

import Todo from '../Todo'

const List = ({todos, toggleTodo, removeTodo}) => {
    return (
        <ul>
            {todos.map(todo =>
                <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} removeTodo={removeTodo} />
            )}
        </ul>
    );
};

export default List;
