import React from 'react';
import { render } from '@testing-library/react';
import MyCardsList from './MyCardsList';

// enzyme config
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('MyCardsList Component', () => {
  let totalBasicTestsPerformed = 0;

  // unfulfilled tests
  test('It has 3 carosels', () => {});
  test('It has a title for the carosel', () => {});
  test('It has 5 flash cards per carosel', () => {});
  test('It has a filter component', () => {});
});
