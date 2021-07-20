/// <reference types="react" />
import { Theme } from '@emotion/react';
import { DisplayProps, MaxWidthProps } from 'styled-system';
import { InputStylesProps } from './inputStyles';
export declare type Props = DisplayProps & InputStylesProps & MaxWidthProps & {
    large?: boolean;
};
declare const StyledInput: import("@emotion/styled").StyledComponent<{
    theme?: Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & DisplayProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & InputStylesProps & MaxWidthProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.MaxWidth<import("styled-system").TLengthStyledSystem>> & {
    large?: boolean | undefined;
}, import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, {}>;
export default StyledInput;
