import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../../components/Footer';

it('renders without crashing', () => {
  let wrapper;

  wrapper = shallow(<Footer length={0} />);
  expect(wrapper).toMatchSnapshot();

  wrapper = shallow(<Footer length={5} />);
  expect(wrapper).toMatchSnapshot();
});

it('renders total', () => {
  let length;
  let total;
  let wrapper;

  length = 5;
  total = <small>{`TOTAL: ${length}`}</small>;
  wrapper = shallow(<Footer length={length} />);
  expect(wrapper.contains(total)).toEqual(true);

  length = 0;
  total = <small>{`TOTAL: ${length}`}</small>;
  wrapper = shallow(<Footer length={length} />);
  expect(wrapper.contains(total)).toEqual(false);
});
