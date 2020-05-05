import React from 'react';
import { shallow } from 'enzyme';

import createWithTheme from '../../../utils/createWithTheme';

import Button from '../Button';
import Icon from '../../Icon';

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

      it(`applies a class for the ${variant} button`, () => {
        const button = shallow(<Button variant={variant}>Button Label</Button>);

        expect(button).toHaveClassName(`button--${variant}`);
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

  describe('fontSize', () => {
    it('properly renders a button with custom font preset size', () => {
      const button = createWithTheme(
        <Button fontSize="size6">Size Button</Button>
      );

      expect(button).toMatchSnapshot();
    });

    it('properly renders a button with custom pixel font size', () => {
      const button = createWithTheme(
        <Button fontSize="100">Size Button</Button>
      );

      expect(button).toMatchSnapshot();
    });
  });
});
