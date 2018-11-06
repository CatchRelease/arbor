import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, withKnobs } from '@storybook/addon-knobs';

import { Box, Card, CardRow, Grid, Heading, Paragraph } from '../src';

const stories = storiesOf('Cards', module);
stories.addDecorator(withKnobs);

const renderCard = () => (
  <Card>
    <Box height="320px">
      <CardRow>
        <Paragraph variant="ui">Card Row</Paragraph>
      </CardRow>
    </Box>
  </Card>
);

stories.add('Card', () => {
  const numberOfCards = number('Number of Cards', 3);
  const cards = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < numberOfCards; i++) {
    cards.push(renderCard());
  }

  return (
    <Box m="regular">
      <Heading.h2>Cards</Heading.h2>

      <Grid
        gridGap="large"
        gridTemplateColumns={`repeat(${numberOfCards}, 1fr)`}
      >
        {cards}
      </Grid>
    </Box>
  );
});
