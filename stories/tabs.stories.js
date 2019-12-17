import React from 'react';
import { storiesOf } from '@storybook/react';

import notes from './tabs.md';
import { Box, Heading, Icon, Tab, Tabs } from '../src';

const stories = storiesOf('Tabs', module);

const titleAsComponent = (
  <>
    WHOA!
    <Icon ml="smaller" name="cr-logo" />
  </>
);

const alertTabOnclick = activateTab => {
  alert('tab clicked!');
  activateTab();
};

stories.add(
  'Default',
  () => (
    <Box as="section" p="regular">
      <Heading.h1>Tabs</Heading.h1>

      <Tabs activeTabId="tab-2">
        <Tab id="tab-1" title="Tab 1">
          <Box bg="palette.blue.lighter" p="largest">
            Tab 1 Content
          </Box>
        </Tab>
        <Tab id="tab-2" title={titleAsComponent}>
          <Box bg="palette.green.lighter" p="largest">
            Tab 2 Content
          </Box>
        </Tab>
        <Tab id="tab-3" title="Tab 3">
          <Box bg="palette.red.lighter" id="foo-3" p="largest">
            Tab 3 Content
          </Box>
        </Tab>
        <Tab id="alert" title="alert!" onClick={alertTabOnclick}>
          <Box bg="palette.red.lighter" id="foo-4" p="largest">
            This will be rendered with an alert also
          </Box>
        </Tab>
      </Tabs>
    </Box>
  ),
  { notes: { markdown: notes } }
);
