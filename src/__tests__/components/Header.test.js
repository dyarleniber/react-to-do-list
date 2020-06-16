import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import Header from '../../components/Header';
import { addTodo } from '../../store/actions/todos';

const middlewares = [];
const mockStore = configureStore(middlewares);
const initialState = { };
const store = mockStore(initialState);
const wrapper = mount(
  <Provider store={store}>
    <Header />
  </Provider>,
);

describe('Header component', () => {
  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should change the state', () => {
    const input = 'Input example';
    wrapper.find('[id="textInput"]').first().simulate('change', { target: { value: input } });
    expect(wrapper.find('[id="textInput"]').first().prop('value')).toEqual(input);
  });

  it('should add a new todo', () => {
    const input = 'Input example';
    wrapper.find('[id="textInput"]').first().simulate('change', { target: { value: input } });
    wrapper.find('[id="addForm"]').first().simulate('submit', {
      preventDefault: jest.fn(),
      target: { value: input },
    });
    const actions = store.getActions();
    const text = input.trim();
    const expectedPayload = addTodo(text);
    expect(actions).toEqual([expectedPayload]);
    store.clearActions();
    expect(wrapper.find('[id="textInput"]').first().prop('value')).toEqual('');
  });

  it('should remove white spaces when adding a new todo', () => {
    const rawInput = '   Input example   ';
    const trimmedInput = rawInput.trim();
    wrapper.find('[id="textInput"]').first().simulate('change', { target: { value: rawInput } });
    expect(wrapper.find('[id="textInput"]').first().prop('value')).toEqual(rawInput);
    wrapper.find('[id="addForm"]').first().simulate('submit', {
      preventDefault: jest.fn(),
      target: { value: rawInput },
    });
    const actions = store.getActions();
    const expectedPayload = addTodo(trimmedInput);
    expect(actions).toEqual([expectedPayload]);
    store.clearActions();
    expect(wrapper.find('[id="textInput"]').first().prop('value')).toEqual('');
  });

  it('should do not add white spaces as todos', () => {
    const input = '   ';
    wrapper.find('[id="textInput"]').first().simulate('change', { target: { value: input } });
    expect(wrapper.find('[id="textInput"]').first().prop('value')).toEqual(input);
    wrapper.find('[id="addForm"]').first().simulate('submit', {
      preventDefault: jest.fn(),
      target: { value: input },
    });
    const actions = store.getActions();
    expect(actions).toEqual([]);
    store.clearActions();
    expect(wrapper.find('[id="textInput"]').first().prop('value')).toEqual('');
  });
});
