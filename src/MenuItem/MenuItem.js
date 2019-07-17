import React from 'react';
import PropTypes from 'prop-types';

import StyledMenuItem from './StyledMenuItem';

const MenuItem = ({ children, ...props }) => (
  <StyledMenuItem {...props}>{children}</StyledMenuItem>
);

MenuItem.propTypes = {
  /**
   * Content to render inside the menu item
   * */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

export default MenuItem;
