import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// enzyme config
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
// App test suites
describe('App - Basic Tests', () => {
  test(`It renders the nav bar`,
   () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('nav').text()).toContain('navbar goes here');
  });
});
