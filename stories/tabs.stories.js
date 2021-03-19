import { useState } from 'react';
import { boolean } from '@storybook/addon-knobs';

import notes from './tabs.md';
import { Box, Heading, Icon, Tab, Tabs } from '../src';

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

export default {
  title: 'Tabs'
};

export const Default = () => (
  <Box as="section" p="regular">
    <Heading.H1>Tabs</Heading.H1>

    <Tabs defaultTabId="tab-2" tabBarAside={boolean('aside', false) && aside}>
      {null /* see if we can handle null */}
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
);

Default.story = {
  parameters: { notes: { markdown: notes } }
};

export const Controlled = () => {
  const [activeTabId, setActiveTabId] = useState('tab-1');

  return (
    <Box as="section" p="regular">
      <Heading.H1>Controlled Tabs</Heading.H1>

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
};

Controlled.story = {
  parameters: { notes: { markdown: notes } }
};
