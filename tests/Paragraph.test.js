import React from 'react';
import { create } from 'react-test-renderer';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

import { Paragraph, colors } from '../src';

expect.extend(createMatchers(emotion));

describe('<Paragraph />', () => {
  describe('props', () => {
    describe('variant', () => {
      ['ui', 'longForm', 'tiny'].forEach(variant => {
        it(`renders a ${variant} variant`, () => {
          const tree = create(
            <Paragraph variant={variant}>Hello World</Paragraph>
          );

          expect(tree).toMatchSnapshot();
        });
      });
    });

    describe('color', () => {
      Object.keys(colors).forEach(color => {
        it(`allows the user to pass in ${color} as color override`, () => {
          const tree = create(
            <Paragraph variant="ui" color={color}>
              Hello World
            </Paragraph>
          ).toJSON();

          expect(tree).toHaveStyleRule('color', colors[color]);
        });
      });
    });

    describe('withoutMargin', () => {
      it('renders a paragraph with no margin', () => {
        const tree = create(
          <Paragraph variant="ui" withoutMargin>
            Hello World
          </Paragraph>
        ).toJSON();

        expect(tree).toHaveStyleRule('margin-bottom', '0');
      });
    });
  });
});
