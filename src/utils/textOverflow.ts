import type * as CSS from 'csstype';
import { RequiredTheme, ResponsiveValue, style, Theme } from 'styled-system';

export type TextOverflowProps<ThemeType extends Theme = RequiredTheme> = {
  textOverflow?:
    | ResponsiveValue<CSS.Property.TextOverflow, ThemeType>
    | undefined;
};

const textOverflow = style({
  prop: 'textOverflow'
});

export default textOverflow;
