import React from 'react';
import PropTypes from 'prop-types';

import StyledMenu from './StyledMenu';
import MenuItem from './MenuItem';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    const { selected } = this.props;

    this.state = {
      selected
    };
  }

  onMenuItemSelect = value => {
    const { onChange } = this.props;
    this.setState({ selected: value }, () => onChange(value));
  };

  renderMenuItems() {
    const { menuItems } = this.props;

    return menuItems.map(menuItem => this.renderMenuItem(menuItem));
  }

  renderMenuItem(menuItem) {
    const { selected } = this.state;
    const isSelected = menuItem.value === selected;

    return (
      <MenuItem
        {...{
          ...menuItem,
          selected: isSelected,
          key: menuItem.label,
          onSelect: this.onMenuItemSelect
        }}
      />
    );
  }

  render() {
    return (
      <StyledMenu flexDirection="column">{this.renderMenuItems()}</StyledMenu>
    );
  }
}

Menu.propTypes = {
  /**
   * Callback to run when a menu item is selected
   */
  onChange: PropTypes.func,

  /**
   * Array of menu item objects to render as MenuItems in the Menu
   */
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      baseColor: PropTypes.string,
      label: PropTypes.string,
      name: PropTypes.string,
      value: PropTypes.string
    })
  ).isRequired
};

Menu.defaultProps = {
  onChange: () => null
};

export default Menu;
