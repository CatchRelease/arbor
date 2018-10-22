import React from 'react';
import { create } from 'react-test-renderer';

import { Button, theme } from '../src';

test('renders a CTA button', () => {
  const tree = create(<Button.CTA theme={theme}>CTA</Button.CTA>);

  expect(tree).toMatchSnapshot();
});
