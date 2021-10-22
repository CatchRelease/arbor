import type * as CSS from 'csstype';
import { RequiredTheme, ResponsiveValue, Theme } from 'styled-system';
export declare type TextTransformProps<ThemeType extends Theme = RequiredTheme> = {
    textTransform?: ResponsiveValue<CSS.Property.TextTransform, ThemeType> | undefined;
};
declare const textTransform: import("styled-system").styleFn;
export default textTransform;
