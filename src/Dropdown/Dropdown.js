import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Menu from '../Menu';
import MenuItem from '../MenuItem';
import Popover from '../Popover';
import { ARROW_DOWN } from '../constants';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.popover = React.createRef();
    this.button = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown, true);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown, true);
  }

  onOpen = () => {
    this.setState({ isOpen: true });
  };

  onClose = () => {
    this.setState({ isOpen: false });
  };

  onKeyDown = (e) => {
    const { key } = e;

    if (document.activeElement !== this.button.current) {
      return;
    }

    if (key !== ARROW_DOWN) {
      return;
    }

    e.preventDefault();

    this.popover.current.open();
  };

  onChange = (value) => {
    const { onChange } = this.props;

    this.popover.current.close();
    onChange(value);
  };

  render() {
    const {
      MenuItemComponent,
      TriggerComponent,
      children,
      menuItems,
      popoverProps,
      selected,
      ...props
    } = this.props;
    const { isOpen } = this.state;

    const menu = (
      <Menu
        MenuItemComponent={MenuItemComponent}
        onChange={this.onChange}
        ref={(menuRef) => menuRef && menuRef.focusMenuItem(0)}
        {...{ menuItems, name: props.name, selected }}
      />
    );

    return (
      <Popover
        ref={this.popover}
        onOpen={this.onOpen}
        onClose={this.onClose}
        content={menu}
        {...popoverProps}
      >
        <TriggerComponent
          ref={this.button}
          aria-haspopup
          aria-expanded={isOpen}
          {...props}
        >
          {children}
        </TriggerComponent>
      </Popover>
    );
  }
}

Dropdown.propTypes = {
  /**
   * The content inside the menu button trigger
   */
  children: PropTypes.node.isRequired,

  /**
   * Component used to render each menu item
   */
  MenuItemComponent: PropTypes.elementType,

  /**
   * Array of menu item objects to render as MenuItems in the Menu
   */
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      baseColor: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.string
    })
  ).isRequired,

  /**
   * Name of the dropdown's menu for grouping the menu item DOM IDs
   */
  name: PropTypes.string.isRequired,

  /**
   * Callback to run when a dropdown menu item is selected
   */
  onChange: PropTypes.func,

  /**
   * Props to be passed to the popover component/
   */
  popoverProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types

  /**
   * Initial selected menu item value
   */
  selected: PropTypes.string,

  /**
   * Component used to render dropdown trigger
   */
  TriggerComponent: PropTypes.elementType
};

Dropdown.defaultProps = {
  MenuItemComponent: MenuItem,
  TriggerComponent: Button,
  onChange: () => null,
  popoverProps: {},
  selected: undefined
};

export default Dropdown;
