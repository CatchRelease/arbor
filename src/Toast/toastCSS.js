import { css } from '@emotion/core';

const toastCSS = css`
  .Toastify {
    .arbor-toast-container {
      display: grid;
      height: 0px;
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
    animation-name: toastSlideOut;
  }
`;

export default toastCSS;
