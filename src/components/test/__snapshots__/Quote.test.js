import React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import Quote from '../../Quote';
import '@testing-library/jest-dom';

describe('test of the home page', () => {
  it('test Quote rendering', () => {
    const quoteTest = renderer
      .create(
        <Router>
          <Quote />
        </Router>,
      )
      .toJSON();
    expect(quoteTest).toMatchSnapshot();
  });
});
