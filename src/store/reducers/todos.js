import * as types from '../constants/ActionTypes';

const INITIAL_STATE = [];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.ADD_TODO:
      return [...state, {
        id: Math.random(),
        text: action.payload.text,
        completed: false,
      }];
    case types.TOGGLE_TODO:
      return state.map((todo) => (
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      ));
    case types.REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
}
