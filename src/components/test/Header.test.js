import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from '../Header';
import '@testing-library/jest-dom';

describe('Test of the header page', () => {
  it('test the page rendering', () => {
    const headerTest = renderer
      .create(
        <Router>
          <Header />
        </Router>,
      )
      .toJSON();
    expect(headerTest).toMatchSnapshot();
  });
});
