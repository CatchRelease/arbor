import React from 'react';
import PropTypes from 'prop-types';
import { hideVisually } from 'polished';

import { ENTER_KEY, SPACEBAR } from '../constants';
import StyledMenuItem from './StyledMenuItem';
import Text from '../Text';
import Icon from '../Icon';
import Flex from '../Flex';

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
          role: 'Menuitem',
          'aria-selected': selected,
          alignItems: 'center',
          height: '40px',
          onClick: this.onSelect,
          onKeyPress: this.onKeyDown
        }}
      >
        <input {...{ id, name, value, css: hideVisually(), type: 'hidden' }} />
        <Flex width="100%">
          <Flex
            flex="1 0 auto"
            minWidth="120px"
            maxWidth="100%"
            overflow="hidden"
          >
            <Icon
              name="symbol-circle"
              mr="small"
              color={baseColor}
              fontSize="16px"
            />
            <Text.p fontSize="size4">{label}</Text.p>
          </Flex>
          {secondaryLabel && (
            <Flex pl="8px" overflow="hidden">
              <Text.p fontSize="size3" color="text.muted">
                {secondaryLabel}
              </Text.p>
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
  baseColor: PropTypes.oneOf(['blue', 'grey', 'green', 'red', 'bronze'])
    .isRequired,

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
  secondaryLabel: null,
  selected: false,
  onSelect: () => null,
  focused: false
};

export default MenuItem;
