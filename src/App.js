import React from 'react';
import { Provider } from 'react-redux';
import Container from 'react-bootstrap/Container';

import store from './store';

import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

export const App = () => (
  <Provider store={store}>
    <Container className="p-3">
      <Header />
      <List />
      <Footer />
    </Container>
  </Provider>
);

export default App;
