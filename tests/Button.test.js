import React from 'react';
import { create } from 'react-test-renderer';

import { Button } from '../src';

test('renders a CTA button', () => {
  const tree = create(<Button.CTA>CTA</Button.CTA>);

  expect(tree).toMatchSnapshot();
});
