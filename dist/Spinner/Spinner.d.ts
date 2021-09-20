import { FC } from 'react';
declare type Props = {
    color?: string;
    diameter?: string | string[];
    spin?: boolean;
};
declare const _default: FC<Pick<Props & {
    children?: import("react").ReactNode;
}, "children" | keyof Props> & {
    theme?: import("@emotion/react").Theme | undefined;
}>;
export default _default;
