import React from 'react';
import { create } from 'react-test-renderer';

import { Icon } from '../src/Icon';
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

      describe('iconStart', () => {
        it('properly renders a button with an iconStart', () => {
          const icon = <Icon theme={theme} name="cr-logo" />;
          const button = create(
            <Button theme={theme} iconStart={icon}>
              Button with Icon
            </Button>
          );

          expect(button).toMatchSnapshot();
        });
      });
    });
  });

  describe('fullWidth', () => {
    it('properly renders a fullWidth button', () => {
      const button = create(
        <Button theme={theme} fullWidth>
          Full Width
        </Button>
      );

      expect(button).toMatchSnapshot();
    });
  });
});
