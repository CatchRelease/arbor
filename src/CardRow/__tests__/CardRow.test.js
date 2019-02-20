import React from 'react';
import createWithTheme from '../../../tests/utils/createWithTheme';

import CardRow from '../CardRow';

describe('<CardRow />', () => {
  it('renders a CardRow properly', () => {
    const tree = createWithTheme(<CardRow />);

    expect(tree).toMatchSnapshot();
  });
});
