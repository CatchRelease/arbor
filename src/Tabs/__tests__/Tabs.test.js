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
  describe('controlled mode', () => {
    it('renders the active tab as active', () => {
      expect(render({ activeTabId: 'tab-1' }).text()).toContain(
        'Tab 1 Content'
      );

      expect(render({ activeTabId: 'tab-2' }).text()).toContain(
        'Tab 2 Content'
      );
    });

    describe('event handlers', () => {
      const itBehavesLikeSelectingATab = (event, ...args) => {
        context('with an onClick prop', () => {
          let onClick;
          let tabs;

          beforeEach(() => {
            onClick = jest.fn();
            tabs = render({ activeTabId: 'tab-2' }, { onClick });
          });

          it('does not select the tab', () => {
            tabs.find('#tab-1').simulate(event, ...args);

            expect(tabs.text()).toContain('Tab 2 Content');
          });

          it('calls the onClick callback', () => {
            tabs.find('#tab-1').simulate(event, ...args);

            expect(onClick).toHaveBeenCalledTimes(1);
          });
        });

        context('without an onClick prop', () => {
          it('does not select the tab', () => {
            const tabs = render({ activeTabId: 'tab-2' });

            tabs.find('#tab-1').simulate(event, ...args);

            expect(tabs.text()).toContain('Tab 2 Content');
          });
        });
      };

      describe('clicking a tab', () => {
        itBehavesLikeSelectingATab('click');
      });

      describe('pressing enter on a tab', () => {
        itBehavesLikeSelectingATab('keyPress', { key: ENTER_KEY });
      });

      describe('pressing space on a tab', () => {
        itBehavesLikeSelectingATab('keyPress', { key: SPACEBAR });
      });
    });
  });

  describe('uncontrolled mode', () => {
    context('defaultTabId is not passed', () => {
      it('renders the first tab as active', () => {
        const tabs = render();

        expect(tabs.text()).toContain('Tab 1 Content');
      });
    });

    context('defaultTabId is passed', () => {
      it('renders the default tab as active', () => {
        const tabs = render({ defaultTabId: 'tab-2' });

        expect(tabs.text()).toContain('Tab 2 Content');
      });
    });

    describe('event handlers', () => {
      const itBehavesLikeSelectingATab = (event, ...args) => {
        context('tab has no onClick set', () => {
          it('activates the selected tab', () => {
            const tabs = render({ defaultTabId: 'tab-1' });

            tabs.find('#tab-2').simulate(event, ...args);

            expect(tabs.text()).toContain('Tab 2 Content');
          });
        });

        context('tab has an onClick set', () => {
          it('calls the passed onClick', () => {
            const onClick = jest.fn();
            const tabs = render({ defaultTabId: 'tab-2' }, { onClick });
            tabs.find('#tab-1').simulate(event, ...args);
            expect(onClick).toHaveBeenCalledTimes(1);
          });

          it('passes a callback to activate the tab to the onClick', () => {
            const onClick = jest.fn(callback => {
              callback();
            });

            const tabs = render({ defaultTabId: 'tab-2' }, { onClick });
            tabs.find('#tab-1').simulate(event, ...args);

            expect(tabs.text()).toContain('Tab 1 Content');
          });
        });
      };

      describe('clicking a tab', () => {
        itBehavesLikeSelectingATab('click');
      });

      describe('pressing enter on a tab', () => {
        itBehavesLikeSelectingATab('keyPress', { key: ENTER_KEY });
      });

      describe('pressing space on a tab', () => {
        itBehavesLikeSelectingATab('keyPress', { key: SPACEBAR });
      });
    });
  });
});
