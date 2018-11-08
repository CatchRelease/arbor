import React from 'react';
import { create } from 'react-test-renderer';

import CardPreview from '../src/CardPreview';
import theme from '../src/theme';

describe('<CardPreview />', () => {
  it('renders a CardPreview properly', () => {
    const tree = create(<CardPreview theme={theme} image="example.gif" />);

    expect(tree).toMatchSnapshot();
  });
});
