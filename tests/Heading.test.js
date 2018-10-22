import React from 'react';
import { create } from 'react-test-renderer';

import { Heading, theme } from '../src';

['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(variant => {
  test(`renders a ${variant}`, () => {
    const Variant = Heading[variant];
    const tree = create(<Variant theme={theme}>Hello World</Variant>);

    expect(tree).toMatchSnapshot();
  });
});
