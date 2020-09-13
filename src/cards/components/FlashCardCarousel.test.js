import React from 'react';
import { render } from '@testing-library/react';
import FlashcardsList from './FlashcardsList';

// enzyme config
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('MyCarousel Component', () => {
  describe('It renders carosels', () => {
    test('It has a title for the carosel', () => {});
    test('It has 5 flash cards per carosel', () => { });
    test('It has 3 carosels', () => { });
  })
})
