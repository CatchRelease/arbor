import React from 'react';
import PropTypes from 'prop-types';

import Flex from '../Flex';

const StyledAutoCompletePlaceholder = ({ children, ...props }) => (
  <Flex
    alignSelf="center"
    color="text.placeholder"
    position="absolute"
    {...props}
  >
    {children}
  </Flex>
);

StyledAutoCompletePlaceholder.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

export default StyledAutoCompletePlaceholder;
