import type * as CSS from 'csstype';
import { RequiredTheme, ResponsiveValue, Theme } from 'styled-system';
export declare type TextOverflowProps<ThemeType extends Theme = RequiredTheme> = {
    textOverflow?: ResponsiveValue<CSS.Property.TextOverflow, ThemeType> | undefined;
};
declare const textOverflow: import("styled-system").styleFn;
export default textOverflow;
