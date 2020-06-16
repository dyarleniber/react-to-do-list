import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import List from '../../components/List';
import { toggleTodo, removeTodo } from '../../store/actions/todos';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('List component', () => {
  it('should render without crashing', () => {
    let wrapper;
    let initialState;
    let store;

    initialState = { todos: [] };
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <List />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();

    initialState = {
      todos: [
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
      ],
    };
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <List />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should toggle and remove todos', () => {
    const initialState = {
      todos: [
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
      ],
    };
    const store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <List />
      </Provider>,
    );

    let actions;
    let expectedPayload;

    wrapper.find('[id="rowTodo1"] .labelTodo').first().simulate('click');
    actions = store.getActions();
    expectedPayload = toggleTodo(1);
    expect(actions).toEqual([expectedPayload]);
    store.clearActions();

    wrapper.find('[id="rowTodo2"] .labelTodo').first().simulate('click');
    actions = store.getActions();
    expectedPayload = toggleTodo(2);
    expect(actions).toEqual([expectedPayload]);
    store.clearActions();

    wrapper.find('[id="rowTodo1"] .removeTodoButton').first().simulate('click');
    actions = store.getActions();
    expectedPayload = removeTodo(1);
    expect(actions).toEqual([expectedPayload]);
    store.clearActions();

    wrapper.find('[id="rowTodo2"] .removeTodoButton').first().simulate('click');
    actions = store.getActions();
    expectedPayload = removeTodo(2);
    expect(actions).toEqual([expectedPayload]);
    store.clearActions();
  });
});
