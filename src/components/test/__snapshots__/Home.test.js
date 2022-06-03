import React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import Home from '../../Home';
import '@testing-library/jest-dom';

describe('Test of the home page', () => {
  it('test the page rendering', () => {
    const homeTest = renderer
      .create(
        <Router>
          <Home />
        </Router>,
      )
      .toJSON();
    expect(homeTest).toMatchSnapshot();
  });
});
