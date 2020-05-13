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
  const id2 = 2;
  const text2 = 'Todo 2 example';
  const id3 = 3;
  const text3 = 'Todo 3 example';

  expect((wrapper.state())).toEqual({ todos: [] });

  const spy2 = jest.spyOn(global.Math, 'random').mockReturnValue(id2);
  wrapper.instance().addTodo(text2);

  const spy3 = jest.spyOn(global.Math, 'random').mockReturnValue(id3);
  wrapper.instance().addTodo(text3);

  expect((wrapper.state())).toEqual({
    todos: [{
      id: id2,
      completed: false,
      text: text2,
    }, {
      id: id3,
      completed: false,
      text: text3,
    }],
  });

  wrapper.instance().toggleTodo(id2);

  expect((wrapper.state())).toEqual({
    todos: [{
      id: id2,
      completed: true,
      text: text2,
    }, {
      id: id3,
      completed: false,
      text: text3,
    }],
  });

  spy2.mockRestore();
  spy3.mockRestore();
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
