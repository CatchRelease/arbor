import { css, Theme } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';
import { transparentize } from 'polished';

const baseModalCss = css`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  outline: none;
`;

const baseOverlayCss = (theme: Theme) => css`
  align-items: center;
  background: ${transparentize(0.5, theme.colors.grey90)};
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

export type Css = CSSInterpolation | ((theme: Theme) => CSSInterpolation);

const buildModalCss = ({
  theme,
  overlayCss,
  modalCss
}: {
  theme: Theme;
  overlayCss?: Css;
  modalCss?: Css;
}) => css`
  .ArborModalOverlay {
    ${baseOverlayCss(theme)};
    ${typeof overlayCss === 'function' ? overlayCss(theme) : overlayCss};
  }

  .ArborModal {
    ${baseModalCss};
    ${typeof modalCss === 'function' ? modalCss(theme) : modalCss};
  }

  /* Prevent body scrolling when modal is open */
  .ReactModal__Body--open {
    overflow: hidden;
  }
`;

export default buildModalCss;
