import React from 'react';
import PropTypes from 'prop-types';
import snakeCase from 'lodash/snakeCase';

import { ARROW_DOWN, ARROW_UP, HOME_KEY, END_KEY } from '../constants';
import ControlledMenuItem from './ControlledMenuItem';
import MenuItem from '../MenuItem';
import StyledMenu from './StyledMenu';

const NAVIGATION_KEYS = [ARROW_UP, ARROW_DOWN];

class Menu extends React.Component {
  constructor(props) {
    super(props);

    const { selected } = this.props;

    this.state = {
      currentlyFocused: null,
      selected
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown, true);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown, true);
  }

  onMenuItemSelect = (value) => {
    const { onChange } = this.props;
    this.setState({ selected: value }, () => onChange(value));
  };

  onKeyDown = ({ key }) => {
    const { currentlyFocused } = this.state;
    const { menuItems } = this.props;

    if (NAVIGATION_KEYS.includes(key) && currentlyFocused === null) {
      this.focusMenuItem(0);
    } else if (key === HOME_KEY) {
      this.focusMenuItem(0);
    } else if (key === END_KEY) {
      this.focusMenuItem(menuItems.length - 1);
    } else if (key === ARROW_DOWN) {
      this.focusNextMenuItem();
    } else if (key === ARROW_UP) {
      this.focusPreviousMenuItem();
    }
  };

  get currentlyFocused() {
    const { currentlyFocused } = this.state;
    const { menuItems } = this.props;
    const focusedMenuItem = menuItems[currentlyFocused];

    return this.domIdForMenuItem(focusedMenuItem);
  }

  domIdForMenuItem(menuItem) {
    if (menuItem === undefined) return undefined;

    const { name } = this.props;
    const { label } = menuItem;

    return `menu-item_${name}_${snakeCase(label)}`;
  }

  focusNextMenuItem() {
    const { menuItems } = this.props;
    const { currentlyFocused } = this.state;
    const nextFocus = currentlyFocused + 1;

    if (nextFocus < menuItems.length) {
      this.focusMenuItem(nextFocus);
    }
  }

  focusPreviousMenuItem() {
    const { currentlyFocused } = this.state;

    if (currentlyFocused > 0) {
      const previousFocus = currentlyFocused - 1;
      this.focusMenuItem(previousFocus);
    }
  }

  focusMenuItem(menuItem) {
    this.setState({ currentlyFocused: menuItem });
  }

  renderMenuItems() {
    const { menuItems } = this.props;

    return menuItems.map((menuItem, index) =>
      this.renderMenuItem(menuItem, index)
    );
  }

  renderMenuItem(menuItem, index) {
    const { currentlyFocused, selected } = this.state;
    const { name, MenuItemComponent } = this.props;
    const isSelected = menuItem.value === selected;
    const id = this.domIdForMenuItem(menuItem);
    const isFocused = index === currentlyFocused;

    return (
      <ControlledMenuItem
        {...{
          id,
          isFocused,
          isSelected,
          key: id,
          MenuItemComponent,
          name,
          onSelect: this.onMenuItemSelect,
          ...menuItem
        }}
      />
    );
  }

  render() {
    const { currentlyFocused } = this;

    return (
      <StyledMenu
        role="listbox"
        aria-activedescendant={currentlyFocused}
        flexDirection="column"
      >
        {this.renderMenuItems()}
      </StyledMenu>
    );
  }
}

Menu.propTypes = {
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
  ).isRequired,

  /**
   * Component used to render each menu item
   */
  MenuItemComponent: PropTypes.elementType,

  /**
   * Name of the menu for grouping the menu item DOM IDs
   */
  name: PropTypes.string.isRequired,

  /**
   * Callback to run when a menu item is selected
   */
  onChange: PropTypes.func,

  /**
   * Initial selected menu item value
   */
  selected: PropTypes.string
};

Menu.defaultProps = {
  MenuItemComponent: MenuItem,
  onChange: () => null,
  selected: undefined
};

export default Menu;
