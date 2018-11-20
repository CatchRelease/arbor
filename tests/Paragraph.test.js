import React from 'react';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';
import createWithTheme from '../utils/createWithTheme';

import { Paragraph } from '../src';

expect.extend(createMatchers(emotion));

describe('<Paragraph />', () => {
  describe('props', () => {
    describe('variant', () => {
      ['ui', 'longForm', 'tiny'].forEach(variant => {
        it(`renders a ${variant} variant`, () => {
          const tree = createWithTheme(
            <Paragraph variant={variant}>Hello World</Paragraph>
          );

          expect(tree).toMatchSnapshot();
        });
      });
    });
  });
});
