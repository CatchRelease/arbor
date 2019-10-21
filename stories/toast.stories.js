import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import 'react-toastify/dist/ReactToastify.css';

import { Box, Button, Heading } from '../src';

const stories = storiesOf('Toast', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
  const notify = () =>
    toast('Well, well, well, well, well. That was six wells');

  return (
    <Box as="section" p="regular">
      <Heading.h1>Toast</Heading.h1>

      <Button onClick={notify}>toasty!</Button>

      <ToastContainer />
    </Box>
  );
});
