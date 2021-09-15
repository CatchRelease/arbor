import notes from './grid.md';
import { Box, Grid, Text, Link } from '../src';

export default {
  title: 'Grid'
};

export const Default = () => (
  <>
    <Text mb="small">
      Grids are used for organizing components on a page. It is essentially a
      Box with extra features.
    </Text>
    <Grid>
      <Box p="regular" backgroundColor="blue" />
      <Box p="regular" backgroundColor="red" />
      <Box p="regular" backgroundColor="blue" />
    </Grid>
  </>
);

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes } };

export const GridGap = () => {
  return (
    <>
      <Text>gridGap sets the gap size between Grid child components</Text>
      <Grid mt="small" gridGap="regular">
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
      <Text mt="large">gridGap can also be responsive</Text>
      <Grid mt="small" gridGap={['smaller', 'regular', 'larger']}>
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
    </>
  );
};

export const GridRow = () => {
  return (
    <>
      <Text>gridRow specifies which row each item should be located in</Text>
      <Text>
        It can be used to order items differently depending on screen size
      </Text>
      <Grid mt="small">
        <Grid gridRow={[1, 2, 3]} p="regular" backgroundColor="blue">
          a
        </Grid>
        <Grid gridRow={[2, 3, 1]} p="regular" backgroundColor="yellow">
          b
        </Grid>
        <Grid gridRow={[3, 1, 2]} p="regular" backgroundColor="red">
          c
        </Grid>
      </Grid>

      <Text mt="regular">You can also place all items on the same row</Text>
      <Grid mt="small">
        <Grid gridRow={1} p="regular" backgroundColor="blue">
          1
        </Grid>
        <Grid gridRow={1} p="regular" backgroundColor="red">
          2
        </Grid>
        <Grid gridRow={1} p="regular" backgroundColor="blue">
          3
        </Grid>
      </Grid>

      <Text mt="regular">
        Or have items shift from horizontal to vertical alignments responsively
      </Text>
      <Grid mt="small">
        <Grid gridRow={[1, 1, 1]} p="regular" backgroundColor="blue">
          1
        </Grid>
        <Grid gridRow={[1, 2, 1]} p="regular" backgroundColor="red">
          2
        </Grid>
        <Grid gridRow={[1, 3, 1]} p="regular" backgroundColor="blue">
          3
        </Grid>
      </Grid>

      <Text mt="regular">And arrange items to look like a grid layout</Text>
      <Grid mt="small">
        <Grid gridRow={1} p="regular" backgroundColor="blue">
          1
        </Grid>
        <Grid gridRow={1} p="regular" backgroundColor="red">
          2
        </Grid>
        <Grid gridRow={1} p="regular" backgroundColor="blue">
          3
        </Grid>
        <Grid gridRow={2} p="regular" backgroundColor="red">
          4
        </Grid>
        <Grid gridRow={2} p="regular" backgroundColor="blue">
          5
        </Grid>
        <Grid gridRow={2} p="regular" backgroundColor="red">
          6
        </Grid>
      </Grid>
    </>
  );
};

export const GridTemplates = () => {
  return (
    <Text>
      Grid templates are great for repeating patterns of columns or rows with
      differing sizes. The
      <Link href="https://www.digitalocean.com/community/tutorials/css-css-grid-layout-fr-unit">
        fr unit
      </Link>
      is commonly used in these templates, but you can also use percentages,
      pixels, etc.
    </Text>
  );
};

export const GridTemplateColumns = () => {
  return (
    <>
      <Text>
        This sets up a template of three columns where the middle column is
        always twice as wide as the outer columns
      </Text>
      <Grid mt="small" gridTemplateColumns="1fr 2fr 1fr">
        <Grid p="regular" backgroundColor="blue">
          1
        </Grid>
        <Grid p="regular" backgroundColor="red">
          2
        </Grid>
        <Grid p="regular" backgroundColor="blue">
          3
        </Grid>
        <Grid p="regular" backgroundColor="red">
          4
        </Grid>
        <Grid p="regular" backgroundColor="blue">
          5
        </Grid>
        <Grid p="regular" backgroundColor="red">
          6
        </Grid>
      </Grid>

      <Text mt="regular">
        If the number of children is not divisible the number of columns it will
        look something like this
      </Text>
      <Grid mt="small" gridTemplateColumns="1fr 2fr 1fr">
        <Grid p="regular" backgroundColor="blue">
          1
        </Grid>
        <Grid p="regular" backgroundColor="red">
          2
        </Grid>
        <Grid p="regular" backgroundColor="blue">
          3
        </Grid>
        <Grid p="regular" backgroundColor="red">
          4
        </Grid>
      </Grid>
    </>
  );
};

export const GridTemplateRows = () => {
  return (
    <>
      <Text>gridTemplateRows functions similarly to gridTemplateColumns.</Text>
      <Grid mt="small" gridTemplateRows="1fr 2fr 1fr">
        <Grid p="regular" backgroundColor="blue">
          a
        </Grid>
        <Grid p="regular" backgroundColor="red">
          b
        </Grid>
        <Grid p="regular" backgroundColor="blue">
          c
        </Grid>
      </Grid>

      <Text mt="regular">You can have multiple columns</Text>
      <Grid mt="small" gridTemplateRows="1fr 2fr 1fr">
        <Grid gridRow={1} p="regular" backgroundColor="blue">
          1
        </Grid>
        <Grid gridRow={2} p="regular" backgroundColor="red">
          2
        </Grid>
        <Grid gridRow={3} p="regular" backgroundColor="blue">
          3
        </Grid>
        <Grid gridRow={1} p="regular" backgroundColor="red">
          4
        </Grid>
        <Grid gridRow={2} p="regular" backgroundColor="blue">
          5
        </Grid>
        <Grid gridRow={3} p="regular" backgroundColor="red">
          6
        </Grid>
      </Grid>

      <Text mt="regular">
        If you add more rows than the template specifies it will look something
        like this. The pattern only specifies three rows, so rows 4 and 5 have
        the default height.
      </Text>
      <Grid mt="small" gridTemplateRows="1fr 2fr 1fr">
        <Grid p="regular" backgroundColor="blue">
          1
        </Grid>
        <Grid p="regular" backgroundColor="red">
          2
        </Grid>
        <Grid p="regular" backgroundColor="blue">
          3
        </Grid>
        <Grid p="regular" backgroundColor="red">
          4
        </Grid>
        <Grid p="regular" backgroundColor="blue">
          5
        </Grid>
      </Grid>
    </>
  );
};

export const GridTemplateArea = () => {
  return (
    <>
      <Text>gridTemplateArea</Text>
      <Grid mt="small">
        <Grid gridRow={[1, 2, 3]} p="regular" backgroundColor="blue">
          a
        </Grid>
        <Grid gridRow={[2, 3, 1]} p="regular" backgroundColor="yellow">
          b
        </Grid>
        <Grid gridRow={[3, 1, 2]} p="regular" backgroundColor="red">
          c
        </Grid>
      </Grid>
    </>
  );
};
