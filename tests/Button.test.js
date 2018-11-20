import React from 'react';
import createWithTheme from '../utils/createWithTheme';

import { Button, Icon } from '../src';

describe('<Button />', () => {
  describe('Variants', () => {
    ['primary', 'secondary', 'minimal'].forEach(variant => {
      it(`properly renders a ${variant} button`, () => {
        const button = createWithTheme(
          <Button variant={variant}>Button Label</Button>
        );

        expect(button).toMatchSnapshot();
      });

      it(`properly renders a disabled ${variant} button`, () => {
        const button = createWithTheme(
          <Button disabled variant={variant}>
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
        const button = createWithTheme(
          <Button size={size}>Button Label</Button>
        );

        expect(button).toMatchSnapshot();
      });

      describe('iconStart', () => {
        it('properly renders a button with an iconStart', () => {
          const icon = <Icon name="cr-logo" />;
          const button = createWithTheme(
            <Button size={size} iconStart={icon}>
              Button with Icon
            </Button>
          );

          expect(button).toMatchSnapshot();
        });
      });

      describe('iconEnd', () => {
        it('properly renders a button with an iconEnd', () => {
          const icon = <Icon name="cr-logo" />;
          const button = createWithTheme(
            <Button size={size} iconEnd={icon}>
              Button with Icon
            </Button>
          );

          expect(button).toMatchSnapshot();
        });
      });

      describe('iconStart and iconEnd', () => {
        it('properly renders a button with an iconStart and an iconEdn', () => {
          const iconStart = <Icon name="cr-logo" />;
          const iconEnd = <Icon name="download" />;
          const button = createWithTheme(
            <Button size={size} iconStart={iconStart} iconEnd={iconEnd}>
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
      const button = createWithTheme(<Button fullWidth>Full Width</Button>);

      expect(button).toMatchSnapshot();
    });
  });
});
