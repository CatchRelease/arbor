import React from 'react';
import createWithTheme from '../utils/createWithTheme';

import CardPreview from '../src/CardPreview';

describe('<CardPreview />', () => {
  it('renders a CardPreview properly', () => {
    const tree = createWithTheme(<CardPreview image="example.gif" />);

    expect(tree).toMatchSnapshot();
  });
});
