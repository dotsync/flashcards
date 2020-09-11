import React from 'react';
// import { render } from '@testing-library/react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Flashcard from './Flashcard';

const util = require('util')

// enzyme config
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Flashcard Component', () => {
  let totalBasicTestsPerformed = 0;
  let container = null;
  // setup a DOM element as a render target
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  // cleanup on exiting
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    // get ready to recieve next mount
    container = null;
  });
  test('It renders without a category', () => {
    act(() => {render(<Flashcard />, container)})
    expect(container.textContent).toBe('no flashcard passed')
    console.log(`
    ----------------start----------------
    CONSOLE.LOGS from FLASHCARD component
     -> log 01: ${'insert var to log here'}
     -> log 02: ${util.inspect(Flashcard, false, null, true /* enable colors */)}`)
  });

  // unfulfilled tests
  // test('It has a subject', () => { })
  // test('It has a question', () => { })
  // test('It has a button to flip card', () => { })
  // test('It has a button to like card', () => { })
  // test('It has a button to display hints', () => { })
});
