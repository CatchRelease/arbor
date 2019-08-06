import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, Heading, Icon, Text, Tab, TabContent, Tabs } from '../src';

const stories = storiesOf('Tabs', module);

const TabContent1 = (
  <TabContent bg="palette.blue.lighter" id="tab-content-1" p="largest">
    Tab 1 Content
  </TabContent>
);
const TabContent2 = (
  <TabContent bg="palette.green.lighter" id="tab-content-2" p="largest">
    Tab 2 Content
  </TabContent>
);
const TabContent3 = (
  <TabContent bg="palette.red.lighter" id="tab-content-3" p="largest">
    Tab 3 Content
  </TabContent>
);

stories.add('Default', () => (
  <Box as="section" p="regular">
    <Heading.h1>Tabs</Heading.h1>

    <Tabs activeTabLabel="Tab 2">
      <Tab content={TabContent1} label="Tab 1" />
      <Tab content={TabContent2} label="Tab 2">
        <Text>
          WHOA!
          <Icon ml="smaller" name="cr-logo" />
        </Text>
      </Tab>
      <Tab content={TabContent3} label="Tab 3" />
    </Tabs>
  </Box>
));
