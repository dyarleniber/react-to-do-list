import reducer from '../../../store/reducers/todos';
import * as types from '../../../store/constants/ActionTypes';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle add todo', () => {
    const spy = jest.spyOn(global.Math, 'random').mockReturnValue(2);
    expect(
      reducer(
        [
          {
            id: 1,
            text: 'todo',
            complete: false,
          },
        ],
        {
          type: types.ADD_TODO,
          payload: { text: 'todo2' },
        },
      ),
    ).toEqual([
      {
        id: 1,
        text: 'todo',
        complete: false,
      },
      {
        id: 2,
        text: 'todo2',
        complete: false,
      },
    ]);
    spy.mockRestore();
  });

  it('should handle toggle todo', () => {
    expect(
      reducer(
        [
          {
            id: 1,
            text: 'todo',
            complete: false,
          },
          {
            id: 2,
            text: 'todo2',
            complete: false,
          },
        ],
        {
          type: types.TOGGLE_TODO,
          payload: { id: 2 },
        },
      ),
    ).toEqual([
      {
        id: 1,
        text: 'todo',
        complete: false,
      },
      {
        id: 2,
        text: 'todo2',
        complete: true,
      },
    ]);
  });

  it('should handle remove todo', () => {
    expect(
      reducer(
        [
          {
            id: 1,
            text: 'todo',
            complete: false,
          },
          {
            id: 2,
            text: 'todo2',
            complete: true,
          },
        ],
        {
          type: types.REMOVE_TODO,
          payload: { id: 1 },
        },
      ),
    ).toEqual([
      {
        id: 2,
        text: 'todo2',
        complete: true,
      },
    ]);
  });
});
