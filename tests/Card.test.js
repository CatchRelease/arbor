import React from 'react';
import { create } from 'react-test-renderer';

import Card from '../src/Card';
import theme from '../src/theme';

describe('<Card />', () => {
  it('renders a Card properly', () => {
    const tree = create(<Card theme={theme} />);

    expect(tree).toMatchSnapshot();
  });
});
