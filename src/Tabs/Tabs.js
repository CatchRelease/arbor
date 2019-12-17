import React from 'react';
import PropTypes from 'prop-types';

import StyledTabs from './StyledTabs';
import Tab from './Tab';
import { ENTER_KEY, SPACEBAR } from '../constants';

const getTabContentId = ({ props: { children, id } }) =>
  children.props.id || `${id}-tab-content`;

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    const { activeTabId, children } = this.props;

    this.state = {
      activeTabId: activeTabId || children[0].props.id
    };
  }

  get activeTab() {
    const { activeTabId } = this.state;
    const { children } = this.props;
    return children.find(({ props: { id } }) => id === activeTabId);
  }

  get activeTabContent() {
    const { activeTab } = this;

    return React.cloneElement(activeTab.props.children, {
      id: getTabContentId(activeTab)
    });
  }

  activateTab = tab => {
    const { id } = tab.props;

    this.setState({ activeTabId: id });
  };

  handleKeyPress = (key, tab, onClick) => {
    if (key === ENTER_KEY || key === SPACEBAR) {
      onClick();
    }
  };

  render() {
    const { activeTabId } = this.state;
    const { children, ...props } = this.props;

    return (
      <>
        <StyledTabs {...props}>
          {children.map(tab => {
            const { id, title, onClick: originalOnClick } = tab.props;
            const active = activeTabId === id;
            const tabContentId = getTabContentId(tab);
            const tabActivator = () => this.activateTab(tab);
            const onClick = originalOnClick
              ? () => originalOnClick(tabActivator)
              : tabActivator;

            return React.cloneElement(
              tab,
              {
                'aria-controls': tabContentId,
                'aria-selected': active ? 'true' : 'false',
                active,
                key: id,
                onClick,
                onKeyPress: ({ key }) => this.handleKeyPress(key, tab, onClick)
              },
              title
            );
          })}
        </StyledTabs>
        {this.activeTabContent}
      </>
    );
  }
}

Tabs.propTypes = {
  activeTabId: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(Tab),
    PropTypes.objectOf(Tab)
  ]).isRequired
};

Tabs.defaultProps = {
  activeTabId: undefined
};

export default Tabs;
