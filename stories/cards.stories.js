import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  Box,
  Card,
  CardPreview,
  CardRow,
  Grid,
  Heading,
  Paragraph
} from '../src';

const stories = storiesOf('Cards', module);

const exampleCards = [
  {
    id: 1,
    preview:
      'https://images.unsplash.com/photo-1541628951107-a9af5346a3e4?ixlib=rb-0.3.5&s=3d33b46544228d6420f683861bc8d7a6&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb'
  },
  {
    id: 2,
    preview:
      'https://images.unsplash.com/photo-1540205082-e56e180508e6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7cc8260f6b8370c4e32ab6bfc1034254&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb'
  },
  {
    id: 3,
    preview:
      'https://images.unsplash.com/photo-1541649478521-0afbfb996efd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=87d83f85c9d96e5990574792d72c1e98&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb'
  },
  {
    id: 4,
    preview:
      'https://images.unsplash.com/photo-1541649478521-0afbfb996efd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=87d83f85c9d96e5990574792d72c1e98&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb'
  }
];

stories.add('Card', () => (
  <Box m="regular">
    <Heading.h2>Cards</Heading.h2>

    <Grid
      gridGap="large"
      gridTemplateColumns={`repeat(${exampleCards.length}, 1fr)`}
    >
      {exampleCards.map(card => (
        <Card>
          <CardRow>
            <Paragraph variant="ui">
              Shot
              {card.id}
            </Paragraph>
          </CardRow>

          <CardPreview image={card.preview} />

          <CardRow>Footer</CardRow>
        </Card>
      ))}
    </Grid>
  </Box>
));
