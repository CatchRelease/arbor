import { stories } from './card.stories';

import notes from './shot-card.md';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardPreview,
  CardRow,
  Checkbox,
  Grid,
  Heading,
  Icon,
  Link,
  Tooltip
} from '../src';

const exampleCards = [
  {
    id: 145732,
    key: 145732,
    preview:
      'https://images.unsplash.com/photo-1541628951107-a9af5346a3e4?ixlib=rb-0.3.5&s=3d33b46544228d6420f683861bc8d7a6&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb'
  },
  {
    id: 274268,
    key: 274268,
    preview:
      'https://images.unsplash.com/photo-1540205082-e56e180508e6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7cc8260f6b8370c4e32ab6bfc1034254&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb'
  },
  {
    id: 374267,
    key: 374267,
    preview:
      'https://images.unsplash.com/photo-1541649478521-0afbfb996efd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=87d83f85c9d96e5990574792d72c1e98&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb'
  },
  {
    id: 494252,
    key: 494252,
    preview:
      'https://images.unsplash.com/photo-1541649478521-0afbfb996efd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=87d83f85c9d96e5990574792d72c1e98&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb'
  }
];

const comments = (
  <Icon color="icons.default" fontSize="24" name="chat-bubble-outline" />
);

const download = <Icon color="icons.default" fontSize="24" name="download" />;

const dislike = (
  <Icon color="icons.default" fontSize="24" name="thumb-down-outline" />
);

const like = (
  <Icon color="icons.default" fontSize="24" name="thumb-up-outline" />
);

stories.add(
  'Shot Card Example',
  () => (
    <Box m="regular">
      <Heading.H2>Cards</Heading.H2>

      <Grid
        gridGap="large"
        gridTemplateColumns="repeat(auto-fill, minmax(360px,1fr))"
      >
        {exampleCards.map((card) => (
          <Card key={card.key}>
            <CardRow>
              <Checkbox icon="cr-logo" my="0" label={card.id} />
              <Tooltip content="The Shot is 100% Licensed. All agreements and releases have been fully executed.">
                <Button variant="minimal" size="medium" color="green">
                  License Acquired
                </Button>
              </Tooltip>
            </CardRow>

            <CardPreview image={card.preview} />

            <CardRow>
              <Tooltip content="20 Action Items have been accepted.">
                <Link
                  variant="muted"
                  color="grey80"
                  fontSize="size2"
                  href="#test"
                  onClick={(e) => e.preventDefault()}
                >
                  20 Action Items
                </Link>
              </Tooltip>

              <CardActions>
                <Tooltip content="Comments">
                  <Button
                    iconStart={comments}
                    variant="minimal"
                    size="medium"
                    color="icons.default"
                  />
                </Tooltip>
                <Tooltip content="Download Asset">
                  <Button
                    iconStart={download}
                    variant="minimal"
                    size="medium"
                    color="icons.default"
                  />
                </Tooltip>
                <Tooltip content="Dislike Shot">
                  <Button
                    iconStart={dislike}
                    variant="minimal"
                    size="medium"
                    color="icons.default"
                  />
                </Tooltip>
                <Tooltip content="Like Shot">
                  <Button
                    iconStart={like}
                    variant="minimal"
                    size="medium"
                    color="icons.default"
                  />
                </Tooltip>
              </CardActions>
            </CardRow>
          </Card>
        ))}
      </Grid>
    </Box>
  ),
  { notes: { markdown: notes } }
);
