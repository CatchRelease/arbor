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
      trigger,
      ...props
    } = this.props;
    const isOpen = this.popover.current && this.popover.current.state.isOpen;
    let popoverTrigger;

    const menu = (
      <Menu
        {...{ menuItems, name, selected }}
        ref={this.menu}
        onChange={this.onChange}
      />
    );

    if (trigger) {
      popoverTrigger = React.cloneElement(trigger, {
        'aria-haspopup': true,
        'aria-expanded': isOpen
      });
    } else {
      console.log('button props', props);
      popoverTrigger = (
        <Button
          {...props}
          ref={this.button}
          aria-haspopup
          aria-expanded={isOpen}
        >
          {children}
        </Button>
      );
    }

    return (
      <Popover ref={this.popover} content={menu} {...popoverProps}>
        {popoverTrigger}
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
   * Callback to run when a dropdown menu item is selected
   */
  onChange: PropTypes.func,
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
   * Initial selected menu item value
   */
  selected: PropTypes.string,

  /**
   * replacement trigger, to be used instead of a Button. User is expected to configure it entirely.
   */
  trigger: PropTypes.element
};

Dropdown.defaultProps = {
  onChange: () => null,
  selected: undefined,
  trigger: null
};

export default Dropdown;
