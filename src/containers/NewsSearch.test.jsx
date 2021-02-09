import React from 'react';
import { render, cleanup } from '@testing-library/react';
import NewsSearch from './NewsSearch';

describe('NewsSearch container', () => {
  afterEach(() => cleanup());
  it('renders NewsSearch', () => {
    const { asFragment } = render(<NewsSearch />);
    expect(asFragment()).toMatchSnapshot();
  });
});
