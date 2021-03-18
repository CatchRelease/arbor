import { storiesOf } from '@storybook/react';

import notes from './grid.md';
import { Box, Grid } from '../src';

const stories = storiesOf('Grid', module);

stories.add(
  'grid gap',
  () => {
    return (
      <Grid gridGap={['smaller', 'regular', 'larger']}>
        <Box p="regular" backgroundColor="blue">
          1
        </Box>
        <Box p="regular" backgroundColor="red">
          2
        </Box>
        <Box p="regular" backgroundColor="blue">
          3
        </Box>
      </Grid>
    );
  },
  { notes: { markdown: notes } }
);

stories.add(
  'grid row',
  () => {
    return (
      <Grid>
        <Grid gridRow={[1, 2, 3]} p="regular" backgroundColor="blue">
          1
        </Grid>
        <Grid gridRow={[2, 3, 1]} p="regular" backgroundColor="red">
          2
        </Grid>
        <Grid gridRow={[3, 1, 2]} p="regular" backgroundColor="blue">
          3
        </Grid>
      </Grid>
    );
  },
  { notes: { markdown: notes } }
);
