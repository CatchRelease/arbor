import React from 'react';
import { create } from 'react-test-renderer';

import { Button, theme } from '../src';

describe('<Button />', () => {
  describe('Variants', () => {
    ['primary', 'secondary', 'minimal'].forEach(variant => {
      it(`properly renders a ${variant} button`, () => {
        const button = create(
          <Button theme={theme} variant={variant}>
            Button Label
          </Button>
        );

        expect(button).toMatchSnapshot();
      });

      it(`properly renders a disabled ${variant} button`, () => {
        const button = create(
          <Button theme={theme} disabled variant={variant}>
            Button Label
          </Button>
        );

        expect(button).toMatchSnapshot();
      });
    });
  });

  describe('Sizes', () => {
    ['small', 'medium', 'large', 'jumbo'].forEach(size => {
      it(`properly renders a ${size} sized button`, () => {
        const button = create(
          <Button theme={theme} size={size}>
            Button Label
          </Button>
        );

        expect(button).toMatchSnapshot();
      });
    });
  });
});
