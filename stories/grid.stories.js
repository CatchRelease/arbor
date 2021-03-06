import notes from './grid.md';
import { Box, Grid } from '../src';

export default {
  title: 'Grid'
};

export const GridGap = () => {
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
};

GridGap.storyName = 'grid gap';
GridGap.parameters = { notes: { markdown: notes } };

export const GridRow = () => {
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
};

GridRow.storyName = 'grid row';
GridRow.parameters = { notes: { markdown: notes } };
