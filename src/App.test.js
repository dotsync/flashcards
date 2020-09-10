import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Suite ~~ App component', () => {
  test('renders the title of App', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText('hello');
    expect(linkElement).toBeInTheDocument();
  });
});
