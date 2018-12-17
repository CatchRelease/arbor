/** @jsx jsx */
import { jsx } from '@emotion/core';
import { hideVisually } from 'polished';
import PropTypes from 'prop-types';

import StyledMenuItem from './StyledMenuItem';
import Text from '../Text';
import Icon from '../Icon';

const MenuItem = ({
  selected,
  baseColor,
  id,
  label,
  name,
  onSelect,
  value,
  focused
}) => (
  <StyledMenuItem
    {...{
      baseColor,
      selected,
      focused,
      role: 'Menuitem',
      'aria-selected': selected,
      alignItems: 'center',
      height: '40px',
      onClick: () => onSelect(value)
    }}
  >
    <input {...{ id, name, value, css: hideVisually(), type: 'hidden' }} />
    <Icon name="status" mr="small" color={baseColor} fontSize="16px" />
    <Text.span fontSize="size2">{label}</Text.span>
  </StyledMenuItem>
);

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
   * Label text for the menu item
   */
  label: PropTypes.string.isRequired,

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
  selected: false,
  onSelect: () => null,
  focused: false
};

export default MenuItem;
