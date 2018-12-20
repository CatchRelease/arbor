import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Popover, Button } from '.';
import { ARROW_DOWN } from './constants';

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
    this.popover.current.open();
  };

  onChange = value => {
    const { onChange } = this.props;

    this.popover.current.close();
    onChange(value);
  };

  render() {
    const { children, menuItems, ...props } = this.props;
    const isOpen = this.popover.current && this.popover.current.state.isOpen;

    const menu = (
      <Menu ref={this.menu} menuItems={menuItems} onChange={this.onChange} />
    );

    return (
      <Popover ref={this.popover} content={menu} onOpen={this.onOpen}>
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
   * The trigger which will open the dropdown when it is clicked. By default,
   * the child will be cloned and an onClick handler will be attached to open
   * the dropdown when it is clicked.
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
      name: PropTypes.string,
      value: PropTypes.string
    })
  ).isRequired
};

Dropdown.defaultProps = {
  onChange: () => null
};

export default Dropdown;
