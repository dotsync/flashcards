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
    flashcardId: "99",
    createdAt: "Sun Sep 99 2020 08:51:54 GMT-0600 (Mountain Daylight Time)",
    category: "TESTDUMMY",
    subject: "Commonly asked JavaScript Interview Questions",
    question: "What is JavaScript(JS)?",
    answer: "JavaScript is a lightweight, interpreted programming language with object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages.",
    amountOfFlips: "0"
  }

  // start tests
  describe('It renders without a flashcard prop', () => {
    // test('It renders loading message', () => {
    //   const component = shallow(<Flashcard />)
    //   console.log(component.debug())
    //   const wrapper = component.find('div')
    //   expect(wrapper.text()).toBe('no flashcard passed');
    // });
  });
  // setup
  const setUp = (props = {}) => {
    // passes a dummy to myFlashcards prop
    const component = shallow(<Flashcard myFlashcards={testCard}/>)
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
      expect(wrapper.text()).toBe(`Catagory: ${testCard.category}`)
    });
    test('myFlashcard renders a subject', () => {
      const wrapper = component.find('.makeStyles-subject-3')
      expect(wrapper.text()).toBe(`Subject: ${testCard.subject}`)
    });
    test('myFlashcard renders a question', () => {
      const wrapper = component.find('.makeStyles-question-5')
      expect(wrapper.text()).toBe(`${testCard.question}`)
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
      expect(wrapper.text()).toBe(testCard.question)
    })
    test('Flashcard turn count starts at 0', () => {
      const wrapper = component.find('.makeStyles-counter-6')
      expect(wrapper.text()).toBe('You flipped the card this many times: 0');
    })
    test('Flashcard count increases by 1 when flipped from question side', () => {
      component.find('.makeStyles-answerButton-4').simulate('click')
      expect(component.find('.makeStyles-counter-6').text()).toBe('You flipped the card this many times: 1')
    })
    test('Flashcard should flip to answer side when flipped from question side', () => {
      component.find('.makeStyles-answerButton-4').simulate('click')
      // should flip to answer side when clicked
      expect(component.find('.makeStyles-answerButton-4').text()).toBe(testCard.answer)
    });
    test('should have a button to delete the flashcard', () => {
      const wrapper = component.find('.makeStyles-delete-flashcard-7')
      expect(wrapper.text()).toBe('delete flashcard')
    });
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
