import React from 'react';
import { matchers } from 'jest-emotion';

import createWithTheme from '../../../utils/createWithTheme';
import Paragraph from '../Paragraph';

expect.extend(matchers);

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

  describe('fontSize', () => {
    it('properly renders a paragraph with custom font preset size', () => {
      const paragraph = createWithTheme(
        <Paragraph fontSize="size6">This is a paragraph</Paragraph>
      );

      expect(paragraph).toMatchSnapshot();
    });

    it('properly renders a paragraph with custom pixel font size', () => {
      const paragraph = createWithTheme(
        <Paragraph fontSize="100">Size Button</Paragraph>
      );

      expect(paragraph).toMatchSnapshot();
    });
  });
});
