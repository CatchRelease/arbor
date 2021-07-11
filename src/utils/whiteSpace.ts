import * as CSS from 'csstype';
import { RequiredTheme, ResponsiveValue, style, Theme } from 'styled-system';

export type WhitespaceProps<ThemeType extends Theme = RequiredTheme> = {
  whiteSpace?: ResponsiveValue<CSS.Property.WhiteSpace, ThemeType> | undefined;
};

const whiteSpace = style({
  prop: 'whiteSpace',
  cssProperty: 'whiteSpace'
});

export default whiteSpace;
