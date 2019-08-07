import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Heading, Icon, Text, Tab, Tabs } from '../src';

const stories = storiesOf('Tabs', module);

const Box1 = (
  <Box bg="palette.blue.lighter" p="largest">
    Tab 1 Content
  </Box>
);
const Box2 = (
  <Box bg="palette.green.lighter" p="largest">
    Tab 2 Content
  </Box>
);
const Box3 = (
  <Box bg="palette.red.lighter" id="foo-3" p="largest">
    Tab 3 Content
  </Box>
);

stories.add('Default', () => (
  <Box as="section" p="regular">
    <Heading.h1>Tabs</Heading.h1>

    <Tabs activeTabId="tab-2">
      <Tab content={Box1} id="tab-1">
        Tab 1
      </Tab>
      <Tab content={Box2} id="tab-2">
        <Text>
          WHOA!
          <Icon ml="smaller" name="cr-logo" />
        </Text>
      </Tab>
      <Tab content={Box3} id="tab-3">
        Tab 3
      </Tab>
    </Tabs>
  </Box>
));
