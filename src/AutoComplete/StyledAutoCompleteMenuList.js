import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'emotion-theming';

import Box from '../Box';

const StyledAutoCompleteMenuList = ({
  innerRef,
  innerProps,
  children,
  ...props
}) => (
  <Box as="ul" overflow="auto" ref={innerRef} {...{ ...innerProps, ...props }}>
    {children}
  </Box>
);

StyledAutoCompleteMenuList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  innerProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  innerRef: PropTypes.func.isRequired
};

StyledAutoCompleteMenuList.defaultProps = {
  innerProps: {}
};

export default withTheme(StyledAutoCompleteMenuList);
