import type * as CSS from 'csstype';
import { RequiredTheme, ResponsiveValue, style, Theme } from 'styled-system';

export type TextTransformProps<ThemeType extends Theme = RequiredTheme> = {
  textTransform?:
    | ResponsiveValue<CSS.Property.TextTransform, ThemeType>
    | undefined;
};

const textTransform = style({
  prop: 'textTransform'
});

export default textTransform;
