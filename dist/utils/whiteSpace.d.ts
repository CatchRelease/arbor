import type * as CSS from 'csstype';
import { RequiredTheme, ResponsiveValue, Theme } from 'styled-system';
export declare type WhitespaceProps<ThemeType extends Theme = RequiredTheme> = {
    whiteSpace?: ResponsiveValue<CSS.Property.WhiteSpace, ThemeType> | undefined;
};
declare const whiteSpace: import("styled-system").styleFn;
export default whiteSpace;
