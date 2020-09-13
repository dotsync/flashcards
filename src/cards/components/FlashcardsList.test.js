import React from 'react';
import { render } from '@testing-library/react';
import FlashcardsList from './FlashcardsList';

// enzyme config
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('FlashcardsList Component', () => {
  describe('It works if myFlashcards prop is undefined', () => {
    test('It renders loading message', () => {
      const component = shallow(<FlashcardsList />)
      const wrapper = component.find('.loading')
      expect(wrapper.text()).toBe('Loading flashcard Carousels');
    });
  })
});
