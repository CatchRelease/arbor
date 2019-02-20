import React from 'react';
import createWithTheme from '../../../tests/utils/createWithTheme';

import CardPreview from '../CardPreview';

describe('<CardPreview />', () => {
  it('renders a CardPreview properly', () => {
    const tree = createWithTheme(<CardPreview image="example.gif" />);

    expect(tree).toMatchSnapshot();
  });
});
