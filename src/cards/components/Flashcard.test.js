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
  // minProps
  const testCard = {
    id: 1,
    createdAt: "2018-8-3 11:12:40",
    category: 'math',
    subject: 'addition',
    question: 'what is 1 plus 2 ?',
    answer: '3',
    multipleChoice: ['2', '3', '4', '5']
  }

  describe('It renders without a flashcard prop', () => {
    test('It renders loading message', () => {
      act(() => { render(<Flashcard />, container) });
      expect(container.textContent).toBe('no flashcard passed');
    });
  });
  // passes a dummy to myFlashcards prop
  describe('It renders with a mock flashcard', () => {
    test('myFlashcard has a category', () => {
      const component = shallow(<Flashcard myFlashcards={testCard}/>)
      const wrapper = component.find('.makeStyles-category-8')
      // exact match
      expect(wrapper.text()).toBe('math')
    });
    test('myFlashcard has a subject', () => {
      const component = shallow(<Flashcard myFlashcards={testCard}/>)
      const wrapper = component.find('.makeStyles-subject-9')
      expect(wrapper.text()).toBe('addition')
    });
    test('myFlashcard has a question', () => {
      const component = shallow(<Flashcard myFlashcards={testCard}/>)
      const wrapper = component.find('.makeStyles-question-10')
      expect(wrapper.text()).toBe('what is 1 plus 2 ?')
    });
  });





  describe('It renders a flashcard from an API', () => {
    test('It GETS flashcards from an API', () => {})
  });
  // unfulfilled tests TODO
  // test('It has a button to flip card', () => { })
  // test('It has a button to like card', () => { })
  // test('It has a button to display hints', () => { })
});
