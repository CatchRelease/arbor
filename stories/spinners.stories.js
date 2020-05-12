import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';

import notes from './spinners.md';
import { Box, Heading, Spinner } from '../src';

const stories = storiesOf('Spinners', module);
stories.addDecorator(withKnobs);

stories.add(
  'Default',
  () => (
    <Box as="section" p="regular">
      <Heading.h1>Spinners</Heading.h1>

      <Spinner
        color={text('color', 'monochrome.black')}
        corners={number('corners', 1)}
        direction={number('direction', 1)}
        fps={number('fps', 20)}
        hwaccel={boolean('hwaccel', false)}
        left={text('left', '50%')}
        length={number('length', 20)}
        lines={number('lines', 13)}
        opacity={number('opacity', 0.25)}
        position={text('position', 'absolute')}
        radius={number('radius', 30)}
        rotate={number('rotate', 0)}
        scale={number('scale', 1.0)}
        shadow={boolean('shadow', false)}
        speed={number('speed', 1)}
        spin={boolean('spin', true)}
        top={text('top', '50%')}
        trail={number('trail', 60)}
        width={number('width', 10)}
        zIndex={number('zIndex', 2e9)}
      >
        I Loaded!
      </Spinner>
    </Box>
  ),
  { notes: { markdown: notes } }
);
