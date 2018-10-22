import React from 'react';
import { create } from 'react-test-renderer';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

import { Heading, theme } from '../src';

expect.extend(createMatchers(emotion));

describe('<Heading />', () => {
  ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(variant => {
    it(`renders a ${variant}`, () => {
      const Variant = Heading[variant];
      const tree = create(
        <Variant theme={theme}>Hello World</Variant>
      ).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  it('supports a margin bottom via override', () => {
    const tree = create(
      <Heading.h1 mb="largest" theme={theme}>
        Hello World
      </Heading.h1>
    ).toJSON();

    expect(tree).toHaveStyleRule('margin-bottom', theme.space.largest);
  });
});
