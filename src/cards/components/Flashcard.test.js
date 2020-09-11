import React from 'react';
import { render } from '@testing-library/react';
import Flashcard from './Flashcard';

// enzyme config
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Flashcard Component', () => {
  let totalBasicTestsPerformed = 0;

  // unfulfilled tests
  test('It has a question', () => {})
  test('It has a button to flip card', () => {})
});
