import React from 'react';

import Badge from '../Badge';
import Icon from '../../Icon';
import createWithTheme from '../../../utils/createWithTheme';
import palette from '../../theme/colors/palette';

const colors = Object.keys(palette);
const icon = <Icon name="cr-logo" />;

describe('<Badge />', () => {
  describe('Variants', () => {
    ['default', 'pill'].forEach(variant => {
      it(`properly renders a ${variant} badge`, () => {
        const badge = createWithTheme(
          <Badge variant={variant}>Badge Text</Badge>
        );

        expect(badge).toMatchSnapshot();
      });
    });
  });

  describe('Colors', () => {
    colors.forEach(color => {
      it(`properly renders a ${color} badge`, () => {
        const badge = createWithTheme(<Badge color={color}>Badge Text</Badge>);

        expect(badge).toMatchSnapshot();
      });
    });

    it(`properly renders a neutral badge`, () => {
      const badge = createWithTheme(<Badge>Badge Text</Badge>);

      expect(badge).toMatchSnapshot();
    });
  });

  describe('Subtle', () => {
    colors.forEach(color => {
      it(`properly renders a subtle ${color} badge`, () => {
        const badge = createWithTheme(
          <Badge color={color} subtle>
            Badge Text
          </Badge>
        );

        expect(badge).toMatchSnapshot();
      });
    });

    it(`properly renders a subtle neutral badge`, () => {
      const badge = createWithTheme(<Badge subtle>Badge Text</Badge>);

      expect(badge).toMatchSnapshot();
    });
  });

  describe('iconEnd', () => {
    it('properly renders a badge with an ending icon', () => {
      const badge = createWithTheme(<Badge iconEnd={icon}>Badge Text</Badge>);

      expect(badge).toMatchSnapshot();
    });
  });

  describe('iconStart', () => {
    it('properly renders a badge with a starting icon', () => {
      const badge = createWithTheme(<Badge iconStart={icon}>Badge Text</Badge>);

      expect(badge).toMatchSnapshot();
    });
  });

  describe('iconStart and iconEnd', () => {
    it('properly renders a badge with both a starting and ending icon', () => {
      const badge = createWithTheme(
        <Badge iconEnd={icon} iconStart={icon}>
          Badge Text
        </Badge>
      );

      expect(badge).toMatchSnapshot();
    });
  });
});
