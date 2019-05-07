import React from 'react';
import PropTypes from 'prop-types';

import StyledHeader from './StyledHeader';

const getColumns = (children = []) => {
  const forHeading = 'minmax(auto, 100%)';

  if (!children.length) return forHeading;

  return `${forHeading} repeat(${children.length}, auto)`;
};

const Header = ({ children, ...props }) => {
  const [headingText, ...remainingChildren] = React.Children.toArray(children);

  return (
    <StyledHeader
      alignItems="end"
      gridGap="small"
      gridTemplateColumns={getColumns(remainingChildren)}
      {...props}
    >
      {headingText}
      {remainingChildren}
    </StyledHeader>
  );
};

Header.propTypes = {
  /**
   * Content to be displayed within the StyledHeader. gridTemplateColumns will
   * be determined by the number of children passed in to properly distribute
   * content.
   */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

export default Header;
