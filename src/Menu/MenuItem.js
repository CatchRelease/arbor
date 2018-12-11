/** @jsx jsx */
import { jsx } from '@emotion/core';
import { hideVisually } from 'polished';
import PropTypes from 'prop-types';
import snakeCase from 'lodash/snakeCase';

import MenuItemLabel from './MenuItemLabel';
import Text from '../Text';
import Icon from '../Icon';

const MenuItem = ({ selected, baseColor, label, name, onSelect, value }) => {
  const id = `menu-item_${name}_${snakeCase(label)}`;

  return (
    <MenuItemLabel
      baseColor={baseColor}
      selected={selected}
      htmlFor={id}
      alignItems="center"
      height="40px"
    >
      <input
        onChange={() => onSelect(value)}
        css={hideVisually()}
        id={id}
        checked={selected}
        type="radio"
        name={name}
        value={value}
      />
      <Icon name="status" mr="small" color={baseColor} fontSize="16px" />
      <Text.span fontSize="size2">{label}</Text.span>
    </MenuItemLabel>
  );
};

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
    .isRequired
};

MenuItem.defaultProps = {
  selected: false,
  onSelect: () => null
};

export default MenuItem;
