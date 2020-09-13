import React from 'react';
import { render, unmountComponent } from 'react-dom';
import CreateFlashcard from './CreateFlashcard';

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('CreateFlashcard component', () => {
  const testCard = {
    flashcardId: "99",
    createdAt: "Sun Sep 99 2020 08:51:54 GMT-0600 (Mountain Daylight Time)",
    category: "TESTDUMMY",
    subject: "Commonly asked JavaScript Interview Questions",
    question: "What is JavaScript(JS)?",
    answer: "JavaScript is a lightweight, interpreted programming language with object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages.",
    amountOfFlips: "0"
  };
  const setUp = ((props = {}) => {
    const component = shallow(<CreateFlashcard myFlashcards={testCard}/>)
    return component
  });
  let component
  beforeEach(() => {
    component = setUp();
  });
  describe('Form', () => {
    test('should render a form', () => {
      console.log('FORM', component.debug())
      const wrapper = component.find('.makeStyles-form-2');
      expect(wrapper.text()).toBe('Form');
    });
    test('should have a catagory field', () => {
      const wrapper = component.find('#catagory');
      expect(wrapper.length).toBe(1);
    });
    test('should have a subject field', () => {
      const wrapper = component.find('#subject');
      expect(wrapper.length).toBe(1);
    });
    test('should have a question field', () => {
      const wrapper = component.find('#question');
      expect(wrapper.length).toBe(1);
    });
    test('should have a answer field', () => {
      const wrapper = component.find('#answer');
      expect(wrapper.length).toBe(1);
    });
  });
  describe('Button', () => {
    test('should render a button', () => {
      const wrapper = component.find('.makeStyles-button-7');
      expect(wrapper.length).toBe(1);
    });
    test('should say \'add flashcard!\'', () => {
      const wrapper = component.find('makeStyles-button-7');
      expect(wrapper.text()).toBe('Add flashcard!');
    });
  });
});
