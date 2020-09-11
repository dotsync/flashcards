import React from 'react';
import { render } from '@testing-library/react';
import MyCardsList from './MyCardsList';

// enzyme config
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('MyCardsList Component', () => {
  describe('It works if myFlashcards props is undefined', () => {
    test('It renders loading message', () => {
      const component = shallow(<MyCardsList />)
      const wrapper = component.find('.loading')
      console.log(component.debug())
      expect(wrapper.text()).toBe('Loading flashcard Carousels');
    });
  })
  // unfulfilled tests
  describe('It renders carosels', () => {
    test('It has a title for the carosel', () => {
      const component = shallow(<MyCardsList />)
    });
    test('It has 5 flash cards per carosel', () => { });
    test('It has 3 carosels', () => { });
  })
});
