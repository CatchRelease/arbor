"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@emotion/react");
const polished_1 = require("polished");
const baseModalCss = (0, react_1.css) `
  align-items: center;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  outline: none;
`;
const baseOverlayCss = (theme) => (0, react_1.css) `
  align-items: center;
  background: ${(0, polished_1.transparentize)(0.5, theme.colors.grey90)};
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;
const buildModalCss = ({ theme, overlayCss, modalCss }) => (0, react_1.css) `
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
exports.default = buildModalCss;
