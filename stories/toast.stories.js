/** @jsx jsx */
import { Global, css, jsx } from '@emotion/core';
import { ToastContainer, toast, cssTransition } from 'react-toastify';
import { storiesOf } from '@storybook/react';
import 'react-toastify/dist/ReactToastify.minimal.css';

import { Box, Button, Heading, Link, ToastAlert } from '../src';
import INTENTS from '../src/Alert/intents';

const stories = storiesOf('Toast', module);

stories.add('default', () => {
  const transition = cssTransition({
    enter: 'slideIn',
    exit: 'slideOut',
    duration: 500
  });

  const details = (
    <div>
      That&lsquo;s six wells.&nbsp;
      <Link href="https://www.dailymotion.com/video/x5xlg93" target="_blank">
        Look, a link!
      </Link>
    </div>
  );

  const message = 'Well, well, well, well, well...';

  const notify = intent => {
    const toastId = toast(
      <ToastAlert
        details={details}
        intent={intent}
        message={message}
        onClose={() => toast.dismiss(toastId)}
      />
    );
  };

  const arborToastCSS = css`
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

    @keyframes slideIn {
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

    .slideIn {
      animation-name: slideIn;
    }

    @keyframes slideOut {
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

    .slideOut {
      animation-name: slideOut;
    }
  `;

  return (
    <Box as="section" p="regular">
      <Heading.h1>Toast</Heading.h1>

      <Global styles={arborToastCSS} />

      {INTENTS.map(intent => (
        <Box mb="smaller" textAlign="right">
          <Button intent={intent} onClick={() => notify(intent)}>
            {`${intent} toast!`}
          </Button>
        </Box>
      ))}

      <ToastContainer
        className="arbor-toast-container"
        toastClassName="arbor-toast"
        closeButton={false}
        hideProgressBar
        position={toast.POSITION.TOP_CENTER}
        transition={transition}
      />
    </Box>
  );
});
