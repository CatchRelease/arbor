import type * as CSS from 'csstype';
import { RequiredTheme, ResponsiveValue, style, Theme } from 'styled-system';

export type TextDecorationProps<ThemeType extends Theme = RequiredTheme> = {
  textDecoration?:
    | ResponsiveValue<CSS.Property.TextDecoration, ThemeType>
    | undefined;
};

const textDecoration = style({
  prop: 'textDecoration'
});

export default textDecoration;
