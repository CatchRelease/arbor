import React from 'react';
import { storiesOf } from '@storybook/react';

import notes from './tooltip.md';
import {
  Avatar,
  Box,
  Button,
  Grid,
  Icon,
  Link,
  Heading,
  Tooltip
} from '../src';

const stories = storiesOf('Tooltips', module);

const buttonIcon = <Icon name="download-fas" />;

const FancyTooltipContent = () => (
  <Box fontSize="size9">
    <Icon color="intent.brand.light" name="cr-logo" />
    <Heading color="monochrome.white">
      A tooltip&apos;s content and title props can accept custom components
    </Heading>
  </Box>
);

stories.add(
  'default',
  () => (
    <Grid
      padding="large"
      gridGap="large"
      gridTemplateColumns="repeat(3,1fr)"
      alignContent="start"
      alignItems="center"
      justifyItems="center"
    >
      <Tooltip placement="bottom" content={<FancyTooltipContent />}>
        <Button variant="primary">tooltip with custom content</Button>
      </Tooltip>

      <Tooltip
        title="A tooltip title"
        content="Here's an example of a tooltip that has a title."
      >
        <Button variant="minimal" iconStart={<Icon name="thumbs-up-fas" />}>
          tooltip with title
        </Button>
      </Tooltip>

      <Tooltip
        title="Other props"
        content="The tooltip container accepts all Grid props. Title and content inherit fontSize, color, and textAlign."
        fontSize="size7"
        color="palette.purple.default"
        padding="large"
        justifyItems="center"
        gridGap="small"
        bg="monochrome.white"
        borderRadius="larger"
      >
        <Button variant="minimal" iconStart={<Icon name="info-circle" />}>
          other props
        </Button>
      </Tooltip>

      <Tooltip content="Download">
        <Button variant="minimal" iconStart={buttonIcon} />
      </Tooltip>

      <Tooltip content="Eight action items have been accepted.">
        <Link
          href="#tooltip"
          variant="muted"
          onClick={(e) => e.preventDefault()}
        >
          8 Action Items
        </Link>
      </Tooltip>

      <Tooltip content="John Doe">
        <Avatar name="John Doe" />
      </Tooltip>

      <Tooltip placement="right" content="Info Icon!">
        <Icon name="info-circle" />
      </Tooltip>
    </Grid>
  ),
  { notes: { markdown: notes } }
);
