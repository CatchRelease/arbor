import React from 'react';
import { shallow } from 'enzyme';

import Box from '../../Box';
import Tab from '../Tab';
import Tabs from '../Tabs';
import { ENTER_KEY, SPACEBAR } from '../../constants';

const render = (props = {}) =>
  shallow(
    <Tabs {...props}>
      <Tab id="tab-1" title="Tab 1">
        <Box>Tab 1 Content</Box>
      </Tab>
      <Tab id="tab-2" title="Tab 2">
        <Box>Tab 2 Content</Box>
      </Tab>
    </Tabs>
  );

describe('<Tabs />', () => {
  context('activeTabId is not passed', () => {
    it('renders the first tab as active', () => {
      const tabs = render();

      expect(tabs).toMatchSnapshot();
    });
  });

  context('activeTabId is passed', () => {
    it('renders the first tab as active', () => {
      const tabs = render({ activeTabId: 'tab-2' });

      expect(tabs).toMatchSnapshot();
    });
  });

  describe('event handlers', () => {
    describe('clicking a tab', () => {
      it('activates the selected tab', () => {
        const tabs = render({ activeTabId: 'tab-1' });

        tabs.find('#tab-2').simulate('click');

        expect(tabs).toHaveState({ activeTabId: 'tab-2' });
      });
    });

    describe('pressing enter on a tab', () => {
      it('activates the selected tab', () => {
        const tabs = render({ activeTabId: 'tab-1' });

        tabs.find('#tab-2').simulate('keyPress', { key: ENTER_KEY });

        expect(tabs).toHaveState({ activeTabId: 'tab-2' });
      });
    });

    describe('pressing space on a tab', () => {
      it('activates the selected tab', () => {
        const tabs = render({ activeTabId: 'tab-1' });

        tabs.find('#tab-2').simulate('keyPress', { key: SPACEBAR });

        expect(tabs).toHaveState({ activeTabId: 'tab-2' });
      });
    });
  });
});
