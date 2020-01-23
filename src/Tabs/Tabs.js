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

    const { activeTabId, defaultTabId, children } = this.props;

    this.state = activeTabId
      ? {}
      : { activeTabId: defaultTabId || children[0].props.id };
  }

  get activeTab() {
    const { activeTabId } = this;
    const { children } = this.props;

    return children.find(({ props: { id } }) => id === activeTabId);
  }

  get activeTabId() {
    const { activeTabId: activeTabIdProp } = this.props;
    const { activeTabId: activeTabIdFromState } = this.state;

    return activeTabIdProp || activeTabIdFromState;
  }

  get activeTabContent() {
    const { activeTab } = this;

    return React.cloneElement(activeTab.props.children, {
      id: getTabContentId(activeTab)
    });
  }

  get isControlled() {
    const { activeTabId } = this.props;

    return !!activeTabId;
  }

  activateTab = tab => {
    this.setState({ activeTabId: tab.props.id });
  };

  handleKeyPress = (key, onClick) => {
    if (key === ENTER_KEY || key === SPACEBAR) {
      onClick();
    }
  };

  handleTabClick = (tab, originalOnClick) => {
    const callback = this.isControlled ? () => {} : () => this.activateTab(tab);

    if (originalOnClick) {
      originalOnClick(callback);
    } else {
      callback();
    }
  };

  render() {
    const { activeTabId } = this;
    const { children, ...props } = this.props;

    return (
      <>
        <StyledTabs {...props}>
          {children.map(tab => {
            const { id, title, onClick: originalOnClick } = tab.props;
            const active = activeTabId === id;
            const tabContentId = getTabContentId(tab);
            const onClick = () => this.handleTabClick(tab, originalOnClick);

            return React.cloneElement(
              tab,
              {
                'aria-controls': tabContentId,
                'aria-selected': active ? 'true' : 'false',
                active,
                key: id,
                onClick,
                onKeyPress: ({ key }) => this.handleKeyPress(key, onClick)
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
  defaultTabId: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(Tab),
    PropTypes.objectOf(Tab)
  ]).isRequired
};

Tabs.defaultProps = {
  activeTabId: undefined,
  defaultTabId: undefined
};

export default Tabs;
