import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Menu from '../Menu';
import Popover from '../Popover';
import { ARROW_DOWN } from '../constants';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.popover = React.createRef();
    this.button = React.createRef();
    this.menu = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown, true);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown, true);
  }

  onOpen = () => {
    this.menu.current.focusMenuItem(0);
  };

  onKeyDown = e => {
    const { key } = e;

    if (document.activeElement !== this.button.current) {
      return;
    }

    if (key !== ARROW_DOWN) {
      return;
    }

    e.preventDefault();
    this.popover.current.open(this.onOpen);
  };

  onChange = value => {
    const { onChange } = this.props;

    this.popover.current.close();
    onChange(value);
  };

  render() {
    const {
      children,
      menuItems,
      name,
      selected,
      popoverProps,
      ...props
    } = this.props;
    const isOpen = this.popover.current && this.popover.current.state.isOpen;

    const menu = (
      <Menu
        {...{ menuItems, name, selected }}
        ref={this.menu}
        onChange={this.onChange}
      />
    );

    return (
      <Popover ref={this.popover} content={menu} {...popoverProps}>
        <Button
          {...props}
          ref={this.button}
          aria-haspopup
          aria-expanded={isOpen}
        >
          {children}
        </Button>
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
  selected: PropTypes.string
};

Dropdown.defaultProps = {
  onChange: () => null,
  popoverProps: {},
  selected: undefined
};

export default Dropdown;
