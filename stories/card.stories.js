import styled from '@emotion/styled';
import { css } from '@emotion/react';

import notes from './card.md';

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
  Paragraph,
  Text,
  Tooltip
} from '../src';

const ExampleCard = styled(Card)`
  height: 160px;
  align-content: center;
  justify-content: center;
`;

const Description = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.size1};
  text-align: center;
`;

export default {
  title: 'Cards'
};

export const Default = () => (
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
      <Heading.H2>Cards</Heading.H2>
      <Paragraph variant="ui">
        Cards compose pane with a default border-radius provided.
      </Paragraph>
    </Box>

    <ExampleCard>
      <Heading.H6 as="h3">Card / Elevation 0</Heading.H6>
      <Description>Flat Cards</Description>
    </ExampleCard>

    <ExampleCard boxShadow="elevation1">
      <Heading.H6 as="h3">Card / Elevation 1</Heading.H6>
      <Description>Floating Cards</Description>
    </ExampleCard>

    <ExampleCard boxShadow="elevation2">
      <Heading.H6 as="h3">Card / Elevation 2</Heading.H6>
      <Description>Top Bar</Description>
    </ExampleCard>

    <ExampleCard boxShadow="elevation3">
      <Heading.H6 as="h3">Card / Elevation 3</Heading.H6>
      <Description>Side Sheet</Description>
    </ExampleCard>

    <ExampleCard boxShadow="elevation4">
      <Heading.H6 as="h3">Card / Elevation 4</Heading.H6>
      <Description>Unused</Description>
    </ExampleCard>
  </Grid>
);

Default.story = {
  name: 'default',
  parameters: { notes: { markdown: notes } }
};

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

export const ShotCardExample = () => (
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
);

ShotCardExample.story = {
  parameters: { notes: { markdown: notes } }
};
