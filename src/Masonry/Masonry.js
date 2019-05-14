import React from 'react';
import PropTypes from 'prop-types';

import MasonryContainer from './MasonryContainer';
import MasonryItem from './MasonryItem';

const Masonry = ({ children, columnGap, ...props }) => (
  <MasonryContainer
    {...{
      columnGap,
      ...props
    }}
  >
    {[].concat(children).map(child => (
      <MasonryItem key={child.key} mb={columnGap}>
        {child}
      </MasonryItem>
    ))}
  </MasonryContainer>
);

Masonry.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

export default Masonry;
