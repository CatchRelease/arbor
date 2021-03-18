import PropTypes from 'prop-types';

import StyledMenuItem from './StyledMenuItem';

const MenuItem = ({ innerRef, children, ...props }) => (
  <StyledMenuItem ref={innerRef} {...props}>
    {children}
  </StyledMenuItem>
);

MenuItem.propTypes = {
  /**
   * Content to render inside the menu item
   * */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,

  innerRef: PropTypes.func
};

MenuItem.defaultProps = {
  innerRef: undefined
};

export default MenuItem;
