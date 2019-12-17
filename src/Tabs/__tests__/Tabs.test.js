import React from 'react';
import { shallow } from 'enzyme';

import Box from '../../Box';
import Tab from '../Tab';
import Tabs from '../Tabs';
import { ENTER_KEY, SPACEBAR } from '../../constants';

const render = (props = {}, tabProps = {}) =>
  shallow(
    <Tabs {...props}>
      <Tab id="tab-1" title="Tab 1" {...tabProps}>
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
    it('renders the passed tab as active', () => {
      const tabs = render({ activeTabId: 'tab-2' });

      expect(tabs).toMatchSnapshot();
    });
  });

  describe('event handlers', () => {
    describe('clicking a tab', () => {
      context('tab has no onClick set', () => {
        it('activates the selected tab', () => {
          const tabs = render({ activeTabId: 'tab-1' });

          tabs.find('#tab-2').simulate('click');

          expect(tabs).toHaveState({ activeTabId: 'tab-2' });
        });
      });

      context('tab has an onClick set', () => {
        it('calls the passed onClick', () => {
          const onClick = jest.fn();
          const tabs = render({ activeTabId: 'tab-2' }, { onClick });
          tabs.find('#tab-1').simulate('click');
          expect(onClick).toHaveBeenCalledTimes(1);
        });

        it('passes a callback to activate the tab to the onClick', () => {
          const onClick = jest.fn(callback => {
            callback();
          });

          const tabs = render({ activeTabId: 'tab-2' }, { onClick });
          tabs.find('#tab-1').simulate('click');

          expect(tabs).toHaveState({ activeTabId: 'tab-1' });
        });
      });
    });

    const itHandlesKeypressesOnTabs = key => {
      context('no onClick is set on the tab', () => {
        it('activates the selected tab', () => {
          const tabs = render({ activeTabId: 'tab-1' });

          tabs.find('#tab-2').simulate('keyPress', { key });

          expect(tabs).toHaveState({ activeTabId: 'tab-2' });
        });
      });

      context('tab has an onClick set', () => {
        it('calls the onClick prop', () => {
          const onClick = jest.fn();
          const tabs = render({ activeTabId: 'tab-2' }, { onClick });
          tabs.find('#tab-1').simulate('keyPress', { key });
          expect(onClick).toHaveBeenCalledTimes(1);
        });

        it('passes a callback to activate the tab to the onClick', () => {
          const onClick = jest.fn(callback => {
            callback();
          });

          const tabs = render({ activeTabId: 'tab-2' }, { onClick });
          tabs.find('#tab-1').simulate('keyPress', { key });

          expect(tabs).toHaveState({ activeTabId: 'tab-1' });
        });
      });
    };

    describe('pressing enter on a tab', () => {
      itHandlesKeypressesOnTabs(ENTER_KEY);
    });

    describe('pressing space on a tab', () => {
      itHandlesKeypressesOnTabs(SPACEBAR);
    });
  });
});
