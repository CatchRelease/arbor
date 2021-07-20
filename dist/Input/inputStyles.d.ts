import { Theme } from '@emotion/react';
export declare type InputStylesProps = {
    hideArrows?: boolean;
    isDisabled?: boolean;
    isFocused?: boolean;
    isInvalid?: boolean;
};
declare const inputStyles: ({ hideArrows, isDisabled, isFocused, isInvalid, theme }: InputStylesProps & {
    theme: Theme;
}) => import("@emotion/react").SerializedStyles;
export default inputStyles;
