import React from 'react';
import { shallow } from 'enzyme';

import Tab from '../Tab';
import TabContent from '../TabContent';
import Tabs from '../Tabs';
import { ENTER_KEY, SPACEBAR } from '../../constants';

const render = (props = {}) =>
  shallow(
    <Tabs {...props}>
      <Tab
        content={<TabContent id="tab-content-1">Tab 1 Content</TabContent>}
        label="tab1"
      />
      <Tab
        content={<TabContent id="tab-content-2">Tab 2 Content</TabContent>}
        label="tab2"
      />
    </Tabs>
  );

describe('<Tabs />', () => {
  context('activeTabLabel is not passed', () => {
    it('renders the first tab as active', () => {
      const tabs = render();

      expect(tabs).toMatchSnapshot();
    });
  });

  context('activeTabLabel is passed', () => {
    it('renders the first tab as active', () => {
      const tabs = render({ activeTabLabel: 'tab2' });

      expect(tabs).toMatchSnapshot();
    });
  });

  describe('event handlers', () => {
    describe('clicking a tab', () => {
      it('activates the selected tab', () => {
        const tabs = render({ activeTabLabel: 'tab1' });

        tabs
          .find(Tab)
          .last()
          .simulate('click');

        expect(tabs).toHaveState({ activeTabLabel: 'tab2' });
      });
    });

    describe('pressing enter on a tab', () => {
      it('activates the selected tab', () => {
        const tabs = render({ activeTabLabel: 'tab1' });

        tabs
          .find(Tab)
          .last()
          .simulate('keyPress', { key: ENTER_KEY });

        expect(tabs).toHaveState({ activeTabLabel: 'tab2' });
      });
    });

    describe('pressing space on a tab', () => {
      it('activates the selected tab', () => {
        const tabs = render({ activeTabLabel: 'tab1' });

        tabs
          .find(Tab)
          .last()
          .simulate('keyPress', { key: SPACEBAR });

        expect(tabs).toHaveState({ activeTabLabel: 'tab2' });
      });
    });
  });
});
