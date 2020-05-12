import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../components/Header';

let mockAddTodo;
let wrapper;

beforeEach(() => {
  mockAddTodo = jest.fn();
  wrapper = shallow(<Header addTodo={mockAddTodo} />);
});

it('renders without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});

it('changes the state', () => {
  const input = 'Input example';
  wrapper.find('[id="textInput"]').simulate('change', { target: { value: input } });
  expect((wrapper.state())).toEqual({ input });
});

it('adds a new todo', () => {
  const input = 'Input example';
  wrapper.find('[id="textInput"]').simulate('change', { target: { value: input } });
  expect((wrapper.state())).toEqual({ input });
  wrapper.find('[id="addForm"]').simulate('submit', {
    preventDefault: jest.fn(),
    target: { value: input },
  });
  expect(mockAddTodo).toHaveBeenCalledTimes(1);
  expect(mockAddTodo).toHaveBeenCalledWith(input);
  expect((wrapper.state())).toEqual({ input: '' });
});

it('removes white spaces when adding a new todo', () => {
  const rawInput = '   Input example   ';
  const trimmedInput = rawInput.trim();
  wrapper.find('[id="textInput"]').simulate('change', { target: { value: rawInput } });
  expect((wrapper.state())).toEqual({ input: rawInput });
  wrapper.find('[id="addForm"]').simulate('submit', {
    preventDefault: jest.fn(),
    target: { value: rawInput },
  });
  expect(mockAddTodo).toHaveBeenCalledTimes(1);
  expect(mockAddTodo).toHaveBeenCalledWith(trimmedInput);
  expect((wrapper.state())).toEqual({ input: '' });
});
