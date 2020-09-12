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
  // dummy
  const testCard = {
    id: 1,
    createdAt: "2018-8-3 11:12:40",
    category: 'math',
    subject: 'addition',
    question: 'what is 1 plus 2 ?',
    answer: '3',
    multipleChoice: ['2', '3', '4', '5']
  }

  // start tests
  describe('It renders without a flashcard prop', () => {
    test('It renders loading message', () => {
      const component = shallow(<Flashcard />)
      const wrapper = component.find('div')
      console.log(component.debug())
      expect(wrapper.text()).toBe('no flashcard passed');
    });
  });
  // setup
  const setUp = (props = {}) => {
    // passes a dummy to myFlashcards prop
    const component = shallow(<Flashcard myFlashcards={testCard} />)
    return component
  }
  // pre drill
  let component
  beforeEach(() => {
    component = setUp()
  })
  // start tests
  describe('It renders a complete Flashcard using dummy myFlashcard', () => {
    test('myFlashcard renders a category', () => {
      const wrapper = component.find('.makeStyles-category-2')
      // exact match
      expect(wrapper.text()).toBe('Catagory: math')
    });
    test('myFlashcard renders a subject', () => {
      const wrapper = component.find('.makeStyles-subject-3')
      expect(wrapper.text()).toBe('Subject: addition')
    });
    test('myFlashcard renders a question', () => {
      const wrapper = component.find('.makeStyles-question-5')
      expect(wrapper.text()).toBe('what is 1 plus 2 ?')
    });
  });
  // Checks myFlashcard has buttons
  describe('It has buttons', () => {
    test('Flashcard renders reveal answer button', () => {
      const wrapper = component.find('.makeStyles-answerButton-4')
      expect(wrapper.length).toBe(1)
    });
    test('the button is the question', () => {
      const wrapper = component.find('.makeStyles-answerButton-4')
      expect(wrapper.text()).toBe("what is 1 plus 2 ?")
    })
    test('Flashcard turn count starts at 0', () => {
      const wrapper = component.find('.makeStyles-counter-6')
      expect(wrapper.text()).toBe("0")
    })
    test('Flash card count increments when flipped from question side', () => {
      const wrapper = component.find('.makeStyles-counter-6')
      wrapper.simulate('click')
      expect(wrapper.text()).toBe("1")
    })

    // // simulate click
    // test('Flashcard turn count increases when flipped from question side', () => {
    //   const wrapper = component.find('.makeStyles-counter-6').simulate('click')
    //   expect(wrapper.text()).toBe("Times visited: 1")
    // })
    // test('Flashcard turn count does NOT increase when flipped from answer side', () => {
    //   const wrapper = component.find('.makeStyles-counter-6')
    //   expect(wrapper.text()).toBe("0")
    // })
    // test('It has a button to like card', () => { })
    // test('It has a button to display hints', () => { })
  });
  // API
  // setup(mount?)
  // describe('It renders a flashcard using an API', () => {
  //   // let cardFromAPI
  //   test('myFlashcard renders a category', () => {
  //     const component = shallow(<Flashcard myFlashcards={cardFromAPI} />)
  //     const wrapper = component.find('.makeStyles-category-8')
  //     // exact match
  //     expect(wrapper.text()).toBe('match the api')
  //   });
  //   test('myFlashcard renders a subject', () => {
  //     const component = shallow(<Flashcard myFlashcards={cardFromAPI} />)
  //     const wrapper = component.find('.makeStyles-subject-9')
  //     expect(wrapper.text()).toBe('match the api')
  //   });
  //   test('myFlashcard renders a question', () => {
  //     const component = shallow(<Flashcard myFlashcards={cardFromAPI} />)
  //     const wrapper = component.find('.makeStyles-question-10')
  //     expect(wrapper.text()).toBe('match the api')
  //   });
  // });
});
