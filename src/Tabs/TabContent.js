import React from 'react';
import PropTypes from 'prop-types';

import Box from '../Box';

const TabContent = ({ Component, children, id, ...props }) => (
  <Component id={id} {...props}>
    {children}
  </Component>
);

TabContent.propTypes = {
  Component: PropTypes.elementType,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  id: PropTypes.string.isRequired
};

TabContent.defaultProps = {
  Component: Box,
  children: undefined
};

export default TabContent;
