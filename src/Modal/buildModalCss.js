import { css } from '@emotion/core';
import { transparentize } from 'polished';

const baseModalCss = css`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  outline: none;
`;

const baseOverlayCss = theme => css`
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

const buildModalCss = ({ theme, overlayCss, modalCss }) => css`
  .ArborModalOverlay {
    ${baseOverlayCss(theme)};
    ${typeof overlayCss === 'function' ? overlayCss(theme) : overlayCss};
  }

  .ArborModal {
    ${baseModalCss};
    ${typeof modalCss === 'function' ? modalCss(theme) : modalCss};
  }
`;

export default buildModalCss;
