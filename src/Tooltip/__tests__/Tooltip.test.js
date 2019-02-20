import React from 'react';

import mountWithTheme from '../../../tests/utils/mountWithTheme';
import Tooltip from '../Tooltip';

describe('<Tooltip />', () => {
  it('properly renders a tooltip', () => {
    const tree = mountWithTheme(
      <Tooltip text="Hello World">
        <p>I have a tooltip</p>
      </Tooltip>
    );

    expect(tree).toMatchSnapshot();
  });
});
