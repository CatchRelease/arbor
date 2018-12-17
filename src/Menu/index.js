import React from 'react';
import PropTypes from 'prop-types';
import snakeCase from 'lodash/snakeCase';

import StyledMenu from './StyledMenu';
import MenuItem from './MenuItem';

export const ARROW_DOWN = 'ArrowDown';
export const ARROW_UP = 'ArrowUp';
export const HOME_KEY = 'Home';
export const END_KEY = 'End';

const NAVIGATION_KEYS = [ARROW_UP, ARROW_DOWN];

function domIdForMenuItem(menuItem) {
  if (menuItem === undefined) {
    return undefined;
  }

  const { name, label } = menuItem;
  return `menu-item_${name}_${snakeCase(label)}`;
}

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

  onMenuItemSelect = value => {
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

    return domIdForMenuItem(focusedMenuItem);
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
    const { currentlyFocused } = this.state;
    const { selected } = this.state;
    const isSelected = menuItem.value === selected;
    const id = domIdForMenuItem(menuItem);
    const focused = index === currentlyFocused;

    return (
      <MenuItem
        {...{
          ...menuItem,
          id,
          focused,
          selected: isSelected,
          key: menuItem.label,
          onSelect: this.onMenuItemSelect
        }}
      />
    );
  }

  render() {
    const { currentlyFocused } = this;

    return (
      <StyledMenu
        role="menu"
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
