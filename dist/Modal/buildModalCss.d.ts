import { Theme } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';
export declare type Css = CSSInterpolation | ((theme: Theme) => CSSInterpolation);
declare const buildModalCss: ({ theme, overlayCss, modalCss }: {
    theme: Theme;
    overlayCss?: Css;
    modalCss?: Css;
}) => import("@emotion/react").SerializedStyles;
export default buildModalCss;
