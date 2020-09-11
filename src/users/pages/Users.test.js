import React from 'react';
import { render } from '@testing-library/react';
import Users from './Users';

// enzyme config
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Users - Basic Tests', () => {
  // The next two lines keep track of the total amount of tests performed
  let totalBasicTestsPerformed = 0;
  totalBasicTestsPerformed ++;
  // Test 01
  test(`It renders words from [component:Users] [Basic-test-1-of-${totalBasicTestsPerformed}]`, () => {
    // Increase totalBasicTestsPerformed by one for the test that follows
    totalBasicTestsPerformed ++;
    const wrapper = shallow(<Users />);
    expect(wrapper.find('h1').text()).toContain('Users');
  });
});
