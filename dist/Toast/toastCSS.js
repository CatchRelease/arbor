"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@emotion/react");
const toastCSS = (0, react_1.css) `
  .Toastify {
    .arbor-toast-container {
      display: grid;
      height: 0;
      justify-content: center;
      left: 0;
      position: fixed;
      top: 0;
      width: 100%;
    }

    .arbor-toast {
      margin-top: 16px;
      max-width: 90vw;
    }
  }

  @keyframes toastSlideIn {
    from {
      opacity: 0;
      transform: translate(0, -100px);
    }

    50% {
      opacity: 0;
    }

    to {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  .toastSlideIn {
    animation-duration: 500ms;
    animation-fill-mode: forwards;
    animation-name: toastSlideIn;
  }

  @keyframes toastSlideOut {
    from {
      opacity: 1;
      transform: translate(0, 0);
    }

    50% {
      opacity: 0;
    }

    to {
      opacity: 0;
      transform: translate(0, -100px);
    }
  }

  .toastSlideOut {
    animation-duration: 500ms;
    animation-fill-mode: forwards;
    animation-name: toastSlideOut;
  }
`;
exports.default = toastCSS;
