import React from 'react';
import createWithTheme from '../../../utils/createWithTheme';

import Heading from '../Heading';

['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].forEach((variant) => {
  test(`renders a ${variant}`, () => {
    const Variant = Heading[variant];
    const tree = createWithTheme(<Variant>Hello World</Variant>);

    expect(tree).toMatchSnapshot();
  });
});
