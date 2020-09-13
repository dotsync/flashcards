import React from 'react';
import { render } from '@testing-library/react';
import Study from './Study';

// enzyme config
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Study Page', () => {
  let totalBasicTestsPerformed = 0;

  // unfulfilled tests
  test('It has a MyCardsList component', () => {})
  test('It has a MyCardsSearchBar component', () => {})
});
