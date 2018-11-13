import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Button, Grid, Icon, Link, Tooltip } from '../src';

const stories = storiesOf('Tooltips', module);

const buttonIcon = <Icon name="download" />;

stories.add('default', () => (
  <Grid
    m="largest"
    gridGap="large"
    gridTemplateColumns="repeat(3, 1fr)"
    justifyItems="center"
  >
    <Box>
      <Tooltip position="bottom" text="I'm a tooltip!">
        <div>
          <Button variant="primary">Button</Button>
        </div>
      </Tooltip>
    </Box>

    <Box>
      <Tooltip text="I'm a tooltip!">
        <Button variant="primary" size="small">
          Button
        </Button>
      </Tooltip>
    </Box>

    <Box>
      <Tooltip position="right" text="Icon!">
        <Button iconEnd={buttonIcon}>Icon Button</Button>
      </Tooltip>
    </Box>

    <Box>
      <Tooltip text="Eight action item have been accepted.">
        <Link href="#tooltip" variant="muted" onClick={e => e.preventDefault()}>
          8 Action Items
        </Link>
      </Tooltip>
    </Box>
  </Grid>
));
