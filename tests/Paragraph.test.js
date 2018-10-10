import React from 'react';
import { create } from 'react-test-renderer';

import { Paragraph } from '../src';

['UI', 'LongForm', 'Tiny'].forEach(variant => {
  test(`renders a ${variant}`, () => {
    const Variant = Paragraph[variant];
    const tree = create(<Variant>Hello World</Variant>);

    expect(tree).toMatchSnapshot();
  });
});
