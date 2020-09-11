import React from 'react';
import { render } from '@testing-library/react';
import MyCards from './MyCards';

// enzyme config
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('MyCards - Basic Tests', () => {
  // The next two lines keep track of the total amount of tests performed
  let totalBasicTestsPerformed = 0;
  totalBasicTestsPerformed ++;
  // Test 01
  test(`It renders words from [component:MyCards] [Basic-test-1-of-${totalBasicTestsPerformed}]`, () => {
    // Increase totalBasicTestsPerformed by one for the test that follows
    totalBasicTestsPerformed ++;
    const wrapper = shallow(<MyCards />);
    expect(wrapper.find('h2').text()).toContain('MyCards');
  });
});
