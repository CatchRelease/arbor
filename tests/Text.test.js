import React from 'react';
import { create } from 'react-test-renderer';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';

import { Text, colors } from '../src';

expect.extend(createMatchers(emotion));

describe('<Text />', () => {
  describe('props', () => {
    describe('variant', () => {
      ['ui', 'longForm', 'tiny'].forEach(variant => {
        it(`renders a ${variant} variant`, () => {
          const tree = create(<Text variant={variant}>Hello World</Text>);

          expect(tree).toMatchSnapshot();
        });
      });
    });

    describe('color', () => {
      Object.keys(colors).forEach(color => {
        it(`allows the user to pass in ${color} as color override`, () => {
          const tree = create(
            <Text variant="ui" color={color}>
              Hello World
            </Text>
          ).toJSON();

          expect(tree).toHaveStyleRule('color', colors[color]);
        });
      });
    });
  });
});
