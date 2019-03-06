/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';

import { createWithComponent } from '../src/utils';
import { Box, Card, Grid, Heading, Paragraph, Text } from '../src';

const stories = storiesOf('Cards', module);

const ExampleCard = createWithComponent(Card, 'div', {
  defaultProps: {
    height: '160px',
    alignContent: 'center',
    justifyContent: 'center'
  }
});

const Description = createWithComponent(Text, 'p', {
  defaultProps: {
    fontSize: 'size1',
    textAlign: 'center'
  }
});

stories.add('default', () => (
  <Grid
    m="regular"
    mt="largest"
    gridTemplateColumns="repeat(5, 200px)"
    gridColumnGap="40px"
    gridRowGap="20px"
    justifyContent="center"
  >
    <Box
      css={css`
        grid-column: 1/-1;
      `}
    >
      <Heading.h2>Cards</Heading.h2>
      <Paragraph variant="ui">
        Cards compose pane with a default border-radius provided.
      </Paragraph>
    </Box>

    <ExampleCard>
      <Heading.h6>Card / Elevation 0</Heading.h6>
      <Description>Flat Cards</Description>
    </ExampleCard>

    <ExampleCard boxShadow="elevation1">
      <Heading.h6>Card / Elevation 1</Heading.h6>
      <Description>Floating Cards</Description>
    </ExampleCard>

    <ExampleCard boxShadow="elevation2">
      <Heading.h6>Card / Elevation 2</Heading.h6>
      <Description>Top Bar</Description>
    </ExampleCard>

    <ExampleCard boxShadow="elevation3">
      <Heading.h6>Card / Elevation 3</Heading.h6>
      <Description>Side Sheet</Description>
    </ExampleCard>

    <ExampleCard boxShadow="elevation4">
      <Heading.h6>Card / Elevation 4</Heading.h6>
      <Description>Unused</Description>
    </ExampleCard>
  </Grid>
));

export default stories;
