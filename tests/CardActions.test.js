import React from 'react';
import { create } from 'react-test-renderer';

import CardActions from '../src/CardActions';
import { Icon } from '../src/Icon';
import theme from '../src/theme';

describe('<CardActions', () => {
  it('renders the CardActions component properly', () => {
    const tree = create(
      <CardActions theme={theme}>
        <Icon theme={theme} name="download" />
        <Icon theme={theme} name="chat-bubble-outline" />
      </CardActions>
    );

    expect(tree).toMatchSnapshot();
  });
});
