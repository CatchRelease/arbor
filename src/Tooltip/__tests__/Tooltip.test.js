import React from 'react';

import mountWithTheme from '../../../utils/mountWithTheme';
import Tooltip from '../Tooltip';

describe('<Tooltip />', () => {
  it('properly renders a tooltip', () => {
    const tree = mountWithTheme(
      <Tooltip content="Hello World">
        <p>I have a tooltip</p>
      </Tooltip>
    );

    expect(tree).toMatchSnapshot();
  });
});
