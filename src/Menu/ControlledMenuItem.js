import React from 'react';
import PropTypes from 'prop-types';
import { hideVisually } from 'polished';

import { ENTER_KEY, SPACEBAR } from '../constants';
import Flex from '../Flex';
import Icon from '../Icon';
import MenuItem from '../MenuItem';
import Text from '../Text';

const MIN_WIDTH = '120px';
const PADDING = '8px';

class ControlledMenuItem extends React.PureComponent {
  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown, true);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown, true);
  }

  onKeyDown = (e) => {
    const { key } = e;
    const { isFocused } = this.props;

    if (!isFocused) {
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
      MenuItemComponent,
      baseColor,
      iconName,
      id,
      isFocused,
      isSelected,
      label,
      name,
      secondaryLabel,
      value
    } = this.props;

    return (
      <MenuItemComponent
        {...{
          'aria-selected': isSelected,
          alignItems: 'center',
          isFocused,
          isSelected,
          onClick: this.onSelect,
          onKeyPress: this.onKeyDown,
          role: 'option',
          ...this.props
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
                css={(theme) => ({
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
      </MenuItemComponent>
    );
  }
}

ControlledMenuItem.propTypes = {
  /**
   * Base color to use for the menu item
   */
  baseColor: PropTypes.string,

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
  isFocused: PropTypes.bool,

  /**
   * Indicates whether or not the menu item is selected
   */
  isSelected: PropTypes.bool,

  /**
   * Main label text for the menu item
   */
  label: PropTypes.string.isRequired,

  /**
   * Component used to render each menu item
   */
  MenuItemComponent: PropTypes.elementType,

  /**
   * HTML input name property for the input field
   */
  name: PropTypes.string.isRequired,

  /**
   * Callback to run when a selection is made. This is generally intended for
   * internal use with the Menu component.
   */
  onSelect: PropTypes.func,

  /**
   * Secondary label text for the menu item
   */
  secondaryLabel: PropTypes.string,

  /**
   * HTML input value property for the input field
   */
  value: PropTypes.string.isRequired
};

ControlledMenuItem.defaultProps = {
  MenuItemComponent: MenuItem,
  baseColor: 'text.default',
  iconName: null,
  isFocused: false,
  isSelected: false,
  onSelect: () => null,
  secondaryLabel: null
};

export default ControlledMenuItem;
