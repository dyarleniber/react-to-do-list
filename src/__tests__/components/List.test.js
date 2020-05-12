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
