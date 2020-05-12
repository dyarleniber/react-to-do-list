import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

it('renders without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});

it('adds todos', () => {
  const id = 1;
  const text = 'Todo example';

  const spy = jest.spyOn(global.Math, 'random').mockReturnValue(id);

  expect((wrapper.state())).toEqual({ todos: [] });

  wrapper.instance().addTodo(text);

  expect((wrapper.state())).toEqual({
    todos: [{
      id,
      completed: false,
      text,
    }],
  });

  spy.mockRestore();
});

it('toggles todos', () => {
  const id = 2;
  const text = 'Todo 2 example';

  const spy = jest.spyOn(global.Math, 'random').mockReturnValue(id);

  expect((wrapper.state())).toEqual({ todos: [] });

  wrapper.instance().addTodo(text);

  expect((wrapper.state())).toEqual({
    todos: [{
      id,
      completed: false,
      text,
    }],
  });

  wrapper.instance().toggleTodo(id);

  expect((wrapper.state())).toEqual({
    todos: [{
      id,
      completed: true,
      text,
    }],
  });

  spy.mockRestore();
});

it('removes todos', () => {
  const id = 3;
  const text = 'Todo 3 example';

  const spy = jest.spyOn(global.Math, 'random').mockReturnValue(id);

  expect((wrapper.state())).toEqual({ todos: [] });

  wrapper.instance().addTodo(text);

  expect((wrapper.state())).toEqual({
    todos: [{
      id,
      completed: false,
      text,
    }],
  });

  wrapper.instance().removeTodo(id);

  expect((wrapper.state())).toEqual({ todos: [] });

  spy.mockRestore();
});
