import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs';

import notes from './tabs.md';
import { Box, Heading, Icon, Tab, Tabs } from '../src';

const stories = storiesOf('Tabs', module);
stories.addDecorator(withKnobs);

const titleAsComponent = (
  <>
    WHOA!
    <Icon ml="smaller" name="cr-logo" />
  </>
);

const aside = <Box>Hello nice friends!</Box>;

const alertTabOnclick = (activateTab) => {
  alert('tab clicked!'); // eslint-disable-line no-alert, no-undef
  activateTab();
};

stories.add(
  'Default',
  () => (
    <Box as="section" p="regular">
      <Heading.h1>Tabs</Heading.h1>

      <Tabs defaultTabId="tab-2" tabBarAside={boolean('aside', false) && aside}>
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
        <Tab id="tab-4" title="Image tab">
          <Box>
            <img
              alt="example of issue "
              src="http://fakeimage.herokuapp.com/400x400.png?color=yellow"
            />
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

stories.add(
  'Controlled',
  () => {
    const [activeTabId, setActiveTabId] = useState('tab-1');

    return (
      <Box as="section" p="regular">
        <Heading.h1>Controlled Tabs</Heading.h1>

        <Tabs activeTabId={activeTabId}>
          <Tab id="tab-1" title="Tab 1" onClick={() => setActiveTabId('tab-1')}>
            <Box bg="palette.blue.lighter" p="largest">
              Tab 1 Content
            </Box>
          </Tab>
          <Tab
            id="tab-2"
            title={titleAsComponent}
            onClick={() => setActiveTabId('tab-2')}
          >
            <Box bg="palette.green.lighter" p="largest">
              Tab 2 Content
            </Box>
          </Tab>
          <Tab id="tab-3" title="Tab 3" onClick={() => setActiveTabId('tab-3')}>
            <Box bg="palette.red.lighter" id="foo-3" p="largest">
              Tab 3 Content
            </Box>
          </Tab>
          <Tab
            id="tab-4"
            title="Image tab"
            onClick={() => setActiveTabId('tab-4')}
          >
            <Box>
              <img
                alt="example of issue "
                src="http://fakeimage.herokuapp.com/400x400.png?color=yellow"
              />
            </Box>
          </Tab>
          <Tab
            id="alert"
            title="alert!"
            onClick={() => alertTabOnclick(() => setActiveTabId('alert'))}
          >
            <Box bg="palette.red.lighter" id="foo-4" p="largest">
              This will be rendered with an alert also
            </Box>
          </Tab>
        </Tabs>
      </Box>
    );
  },
  { notes: { markdown: notes } }
);
