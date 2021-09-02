import { FC } from 'react';
import ReactModal from 'react-modal';
import { Theme } from '@emotion/react';
import { Css } from './buildModalCss';
export declare type Props = ReactModal.Props & {
    modalCss?: Css;
    overlayCss?: Css;
    theme: Theme;
};
export declare const Modal: FC<Props>;
declare const _default: FC<Pick<ReactModal.Props & {
    modalCss?: Css;
    overlayCss?: Css;
    theme: Theme;
} & {
    children?: import("react").ReactNode;
}, "children" | "overlayCss" | "modalCss" | keyof ReactModal.Props> & {
    theme?: Theme | undefined;
}>;
export default _default;
