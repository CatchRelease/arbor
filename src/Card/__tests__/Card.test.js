import React from 'react';
import createWithTheme from '../../../utils/createWithTheme';

import Card from '../Card';

describe('<Card />', () => {
  it('renders a Card properly', () => {
    const tree = createWithTheme(<Card />);

    expect(tree).toMatchSnapshot();
  });
});
