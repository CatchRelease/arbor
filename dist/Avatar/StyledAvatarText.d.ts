import { FC } from 'react';
import { Theme } from '@emotion/react';
import { Size } from '../theme/avatars';
declare type Props = {
    baseColor: string;
    size: Size;
    subtle: boolean;
    theme: Theme;
};
export declare const StyledAvatarText: FC<Props>;
declare const _default: FC<Pick<Props & {
    children?: import("react").ReactNode;
}, "children" | "size" | "baseColor" | "subtle"> & {
    theme?: Theme | undefined;
}>;
export default _default;
