import { storiesOf } from '@storybook/react';
import { boolean, number, text } from '@storybook/addon-knobs';

import notes from './spinners.md';
import { Box, Heading, Spinner } from '../src';

const stories = storiesOf('Spinners', module);

stories.add(
  'Default',
  () => (
    <Box as="section" p="regular">
      <Heading.H1>Spinners</Heading.H1>

      <Spinner
        color={text('color', 'monochrome.black')}
        left={text('left', '50%')}
        opacity={number('opacity', 0.25)}
        position={text('position', 'absolute')}
        top={text('top', '50%')}
        diameter={['20px', '40px', '80px', '100px']}
        spin={boolean('spin', true)}
      >
        I Loaded!
      </Spinner>
    </Box>
  ),
  { notes: { markdown: notes } }
);
