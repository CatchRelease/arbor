import React from 'react';
import { create } from 'react-test-renderer';

import { Text, theme } from '../src';

describe('<Text />', () => {
  it('properly renders a Text component', () => {
    const tree = create(
      <Text theme={theme}>The quick brown fox jumps over the lazy dog</Text>
    );

    expect(tree).toMatchSnapshot();
  });
});
