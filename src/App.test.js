import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// enzyme config
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
// App test suites
describe('App - Basic Tests', () => {
  // The next two lines keep track of the total amount of tests performed
  let totalBasicTestsPerformed = 0;
  totalBasicTestsPerformed ++;
  test(`renders the title of App [component:App] [Test-1-of-${totalBasicTestsPerformed}]`,
   () => {
    // Increase totalBasicTestsPerformed by one for the test that follows
    totalBasicTestsPerformed ++;
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).toContain('hello');
  });
});
