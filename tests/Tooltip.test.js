import React from 'react';
import { shallow } from 'enzyme';

import Tooltip from '../src/Tooltip';

describe('<Tooltip />', () => {
  it('properly renders a tooltip', () => {
    const tree = shallow(
      <Tooltip text="Hello World">
        <p>I have a tooltip</p>
      </Tooltip>
    );

    expect(tree).toMatchSnapshot();
  });
});
