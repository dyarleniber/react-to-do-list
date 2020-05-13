import React from 'react';
import { shallow } from 'enzyme';

import List from '../../components/List';

it('renders without crashing', () => {
  let wrapper;
  let mockTodos;
  const mockToggleTodo = jest.fn();
  const mockRemoveTodo = jest.fn();

  mockTodos = [];
  wrapper = shallow(
    <List
      todos={mockTodos}
      toggleTodo={mockToggleTodo}
      removeTodo={mockRemoveTodo}
    />,
  );
  expect(wrapper).toMatchSnapshot();

  mockTodos = [
    {
      id: 1,
      text: 'Todo 1',
      completed: true,
    },
    {
      id: 2,
      text: 'Todo 2',
      completed: false,
    },
  ];
  wrapper = shallow(
    <List
      todos={mockTodos}
      toggleTodo={mockToggleTodo}
      removeTodo={mockRemoveTodo}
    />,
  );
  expect(wrapper).toMatchSnapshot();
});

it('toggles and removes todos', () => {
  const mockTodos = [
    {
      id: 1,
      text: 'Todo 1',
      completed: true,
    },
    {
      id: 2,
      text: 'Todo 2',
      completed: false,
    },
  ];
  const mockToggleTodo = jest.fn();
  const mockRemoveTodo = jest.fn();
  const wrapper = shallow(
    <List
      todos={mockTodos}
      toggleTodo={mockToggleTodo}
      removeTodo={mockRemoveTodo}
    />,
  );

  wrapper.find('[id="rowTodo1"] .labelTodo').simulate('click');
  expect(mockToggleTodo).toHaveBeenCalledTimes(1);
  expect(mockToggleTodo).toHaveBeenCalledWith(1);
  mockToggleTodo.mockReset();
  wrapper.find('[id="rowTodo2"] .labelTodo').simulate('click');
  expect(mockToggleTodo).toHaveBeenCalledTimes(1);
  expect(mockToggleTodo).toHaveBeenCalledWith(2);
  mockToggleTodo.mockReset();

  wrapper.find('[id="rowTodo1"] .removeTodoButton').simulate('click');
  expect(mockRemoveTodo).toHaveBeenCalledTimes(1);
  expect(mockRemoveTodo).toHaveBeenCalledWith(1);
  mockRemoveTodo.mockReset();
  wrapper.find('[id="rowTodo2"] .removeTodoButton').simulate('click');
  expect(mockRemoveTodo).toHaveBeenCalledTimes(1);
  expect(mockRemoveTodo).toHaveBeenCalledWith(2);
  mockRemoveTodo.mockReset();
});
