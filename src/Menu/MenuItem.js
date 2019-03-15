/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';
import { hideVisually } from 'polished';

import { ENTER_KEY, SPACEBAR } from '../constants';
import StyledMenuItem from './StyledMenuItem';
import Text from '../Text';
import Icon from '../Icon';
import Flex from '../Flex';

const MIN_WIDTH = '120px';
const PADDING = '8px';

class MenuItem extends React.PureComponent {
  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown, true);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown, true);
  }

  onKeyDown = e => {
    const { key } = e;
    const { focused } = this.props;

    if (!focused) {
      return;
    }

    if (key === ENTER_KEY || key === SPACEBAR) {
      e.preventDefault();
      this.onSelect();
    }
  };

  onSelect = () => {
    const { onSelect, value } = this.props;
    onSelect(value);
  };

  render() {
    const {
      selected,
      baseColor,
      iconName,
      id,
      label,
      secondaryLabel,
      name,
      value,
      focused
    } = this.props;

    return (
      <StyledMenuItem
        {...{
          baseColor,
          selected,
          focused,
          role: 'option',
          'aria-selected': selected,
          alignItems: 'center',
          height: '40px',
          onClick: this.onSelect,
          onKeyPress: this.onKeyDown
        }}
      >
        <input {...{ id, name, value, css: hideVisually(), type: 'hidden' }} />
        <Flex width="100%" justifyContent="space-between">
          <Flex
            flex="1 0 auto"
            maxWidth={
              secondaryLabel ? `calc(100% - ${MIN_WIDTH} - ${PADDING})` : '100%'
            }
          >
            {iconName && (
              <Icon
                name={iconName}
                mr="small"
                color={baseColor}
                fontSize="16px"
              />
            )}
            <Text
              as="span"
              color="inherit"
              minWidth={MIN_WIDTH}
              fontSize="size4"
              overflow="hidden"
            >
              {label}
            </Text>
          </Flex>
          {secondaryLabel && (
            <Flex pl={PADDING} overflow="hidden" flex="0 1 auto">
              <Text
                as="span"
                fontSize="size3"
                css={theme => ({
                  // Put primary and secondary labels on the same baseline
                  lineHeight: theme.fontSizes.size4
                })}
                color="text.muted"
                maxWidth="100%"
              >
                {secondaryLabel}
              </Text>
            </Flex>
          )}
        </Flex>
      </StyledMenuItem>
    );
  }
}

MenuItem.propTypes = {
  /**
   * Indicates whether or not the menu item is selected
   */
  selected: PropTypes.bool,

  /**
   * Callback to run when a selection is made. This is generally intended for
   * internal use with the Menu component.
   */
  onSelect: PropTypes.func,

  /**
   * Main label text for the menu item
   */
  label: PropTypes.string.isRequired,

  /**
   * Secondary label text for the menu item
   */
  secondaryLabel: PropTypes.string,

  /**
   * HTML input name property for the input field
   */
  name: PropTypes.string.isRequired,

  /**
   * HTML input value property for the input field
   */
  value: PropTypes.string.isRequired,

  /**
   * Base color to use for the menu item
   */
  baseColor: PropTypes.oneOf(['blue', 'grey', 'green', 'red', 'bronze']),

  /**
   * Name of icon to use for the menu item
   */
  iconName: PropTypes.string,

  /**
   * HTML ID for the menu item
   */
  id: PropTypes.string.isRequired,

  /**
   * Whether or not the current menu item is focused
   */
  focused: PropTypes.bool
};

MenuItem.defaultProps = {
  baseColor: 'text.default',
  iconName: null,
  secondaryLabel: null,
  selected: false,
  onSelect: () => null,
  focused: false
};

export default MenuItem;
