import React from 'react';
import { create } from 'react-test-renderer';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

import { Paragraph, theme } from '../src';

expect.extend(createMatchers(emotion));

describe('<Paragraph />', () => {
  describe('props', () => {
    describe('variant', () => {
      ['ui', 'longForm', 'tiny'].forEach(variant => {
        it(`renders a ${variant} variant`, () => {
          const tree = create(
            <Paragraph theme={theme} variant={variant}>
              Hello World
            </Paragraph>
          );

          expect(tree).toMatchSnapshot();
        });
      });
    });
  });
});
