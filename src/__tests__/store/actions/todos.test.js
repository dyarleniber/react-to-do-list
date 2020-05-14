import * as actions from '../../../store/actions/todos';
import * as types from '../../../store/constants/ActionTypes';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'todo';
    const expectedAction = {
      type: types.ADD_TODO,
      payload: { text },
    };
    expect(actions.addTodo(text)).toEqual(expectedAction);
  });

  it('should create an action to toggle a todo', () => {
    const id = 1;
    const expectedAction = {
      type: types.TOGGLE_TODO,
      payload: { id },
    };
    expect(actions.toggleTodo(id)).toEqual(expectedAction);
  });

  it('should create an action to remove a todo', () => {
    const id = 1;
    const expectedAction = {
      type: types.REMOVE_TODO,
      payload: { id },
    };
    expect(actions.removeTodo(id)).toEqual(expectedAction);
  });
});
