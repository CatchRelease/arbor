import PropTypes from 'prop-types';
import { withTheme } from '@emotion/react';

import Box from '../Box';

const StyledAutoCompleteMenuList = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  cx,
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
  cx: PropTypes.func.isRequired,
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
