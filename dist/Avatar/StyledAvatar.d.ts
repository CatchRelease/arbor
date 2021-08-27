/// <reference types="react" />
import { Theme } from '@emotion/react';
import { Size } from '../theme/avatars';
declare type Props = {
    baseColor: string;
    border: string;
    size: Size;
    subtle: boolean;
    theme: Theme;
};
export declare const StyledAvatar: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLDivElement>>;
declare const _default: import("react").FC<Pick<Props & import("react").RefAttributes<HTMLDivElement>, "border" | "size" | "baseColor" | "subtle" | keyof import("react").RefAttributes<HTMLDivElement>> & {
    theme?: Theme | undefined;
}>;
export default _default;
