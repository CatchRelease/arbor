import React from 'react';
import PropTypes from 'prop-types';

import Flex from '../Flex';
import Tab from './Tab';
import { ENTER_KEY, SPACEBAR } from '../constants';

class Tabs extends React.Component {
  constructor(props) {
    super(props);

    const { activeTabLabel, children } = this.props;

    this.state = {
      activeTabLabel: activeTabLabel || children[0].props.label
    };
  }

  get activeTabContent() {
    const { activeTabLabel } = this.state;
    const { children } = this.props;
    const activeTab = children.find(
      ({ props: { label } }) => label === activeTabLabel
    );

    return activeTab.props.content;
  }

  activateTab = tab => {
    const { label } = tab.props;

    this.setState({ activeTabLabel: label });
  };

  handleKeyPress = (key, tab) => {
    if (key === ENTER_KEY || key === SPACEBAR) {
      this.activateTab(tab);
    }
  };

  render() {
    const { activeTabLabel } = this.state;
    const { Component, children, ...props } = this.props;

    return (
      <>
        <Component {...props}>
          {children.map(tab => {
            const {
              label,
              children: tabChildren,
              content,
              ...tabProps
            } = tab.props;
            const active = activeTabLabel === label;

            return (
              <Tab
                active={active}
                aria-controls={content.props.id}
                aria-selected={active ? 'true' : 'false'}
                key={label}
                onClick={() => this.activateTab(tab)}
                onKeyPress={({ key }) => this.handleKeyPress(key, tab)}
                tabIndex="0"
                {...tabProps}
              >
                {tabChildren || label}
              </Tab>
            );
          })}
        </Component>
        {this.activeTabContent}
      </>
    );
  }
}

Tabs.propTypes = {
  Component: PropTypes.elementType,
  activeTabLabel: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

Tabs.defaultProps = {
  Component: Flex,
  activeTabLabel: undefined
};

export default Tabs;
