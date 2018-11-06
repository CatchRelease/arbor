import React from 'react';
import { create } from 'react-test-renderer';

import CardRow from '../src/CardRow';
import theme from '../src/theme';

describe('<CardRow />', () => {
  it('renders a CardRow properly', () => {
    const tree = create(<CardRow theme={theme} />);

    expect(tree).toMatchSnapshot();
  });
});
