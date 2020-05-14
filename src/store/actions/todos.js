import * as types from '../constants/ActionTypes';

export const addTodo = (text) => ({
  type: types.ADD_TODO,
  payload: { text },
});

export const toggleTodo = (id) => ({
  type: types.TOGGLE_TODO,
  payload: { id },
});

export const removeTodo = (id) => ({
  type: types.REMOVE_TODO,
  payload: { id },
});
