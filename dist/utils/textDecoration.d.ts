import * as CSS from 'csstype';
import { RequiredTheme, ResponsiveValue, Theme } from 'styled-system';
export declare type TextDecorationProps<ThemeType extends Theme = RequiredTheme> = {
    textDecoration?: ResponsiveValue<CSS.Property.TextDecoration, ThemeType> | undefined;
};
declare const textDecoration: import("styled-system").styleFn;
export default textDecoration;
