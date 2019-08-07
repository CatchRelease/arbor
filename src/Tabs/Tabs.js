import React from 'react';
import PropTypes from 'prop-types';

import Flex from '../Flex';
import Tab from './Tab';
import { ENTER_KEY, SPACEBAR } from '../constants';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    const { activeTabId, children } = this.props;

    this.state = {
      activeTabId: activeTabId || children[0].props.id
    };
  }

  get activeTabContent() {
    const { activeTabId } = this.state;
    const { children } = this.props;
    const activeTab = children.find(({ props: { id } }) => id === activeTabId);

    return activeTab.props.content;
  }

  activateTab = tab => {
    const { id } = tab.props;

    this.setState({ activeTabId: id });
  };

  handleKeyPress = (key, tab) => {
    if (key === ENTER_KEY || key === SPACEBAR) {
      this.activateTab(tab);
    }
  };

  render() {
    const { activeTabId } = this.state;
    const { Component, children, ...props } = this.props;

    return (
      <>
        <Component {...props}>
          {children.map(tab => {
            const { content, id } = tab.props;
            const active = activeTabId === id;
            const contentId = content.props.id || `${id}-tab-content`;

            return React.cloneElement(tab, {
              'aria-controls': contentId,
              'aria-selected': active ? 'true' : 'false',
              active,
              content: React.cloneElement(content, { id: contentId }),
              key: id,
              onClick: () => this.activateTab(tab),
              onKeyPress: ({ key }) => this.handleKeyPress(key, tab)
            });
          })}
        </Component>
        {this.activeTabContent}
      </>
    );
  }
}

Tabs.propTypes = {
  Component: PropTypes.elementType,
  activeTabId: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(Tab),
    PropTypes.objectOf(Tab)
  ]).isRequired
};

Tabs.defaultProps = {
  Component: Flex,
  activeTabId: undefined
};

export default Tabs;
