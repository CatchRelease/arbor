import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, withKnobs } from '@storybook/addon-knobs';

import { Box, Card, Grid, Heading, Paragraph } from '../src';

const stories = storiesOf('Cards', module);
stories.addDecorator(withKnobs);

const renderCard = () => (
  <Card>
    <Box height="320px">
      <Paragraph variant="ui">Hello world</Paragraph>
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
        textAlign="center"
      >
        {cards}
      </Grid>
    </Box>
  );
});
