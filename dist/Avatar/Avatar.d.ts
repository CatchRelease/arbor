/// <reference types="react" />
import { Size } from '../theme/avatars';
declare type Props = {
    baseColor?: string;
    name: string;
    size?: Size;
    subtle?: boolean;
};
declare const Avatar: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLDivElement>>;
export default Avatar;
