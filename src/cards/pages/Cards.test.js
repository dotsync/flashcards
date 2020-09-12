import React from 'react';
import { render } from '@testing-library/react';
import Cards from './Cards';

// enzyme config
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Cards Page', () => {
  let totalBasicTestsPerformed = 0;

  // unfulfilled tests
  test('It has a MyCardsList component', () => {})
  test('It has a MyCardsSearchBar component', () => {})
});
// store your own cards, shareing is more than an MVP goal
// i never get shout outs, why? I keep to myself i dont like people

