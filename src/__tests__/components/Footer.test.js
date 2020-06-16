import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import Footer from '../../components/Footer';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('Footer component', () => {
  it('should render without crashing', () => {
    let wrapper;
    let initialState;
    let store;

    initialState = { todos: [] };
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <Footer />
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
        <Footer />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render total', () => {
    let wrapper;
    let length;
    let total;
    let initialState;
    let store;

    length = 2;
    total = <small>{`TOTAL: ${length}`}</small>;
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
        <Footer />
      </Provider>,
    );
    expect(wrapper.contains(total)).toEqual(true);

    length = 0;
    total = <small>{`TOTAL: ${length}`}</small>;
    initialState = { todos: [] };
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <Footer />
      </Provider>,
    );
    expect(wrapper.contains(total)).toEqual(false);
  });
});
