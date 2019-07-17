import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';

const StyledAutoCompleteNoOption = ({
  innerRef,
  innerProps,
  children,
  ...props
}) => (
  <Text
    p="small"
    textAlign="center"
    ref={innerRef}
    {...{ ...innerProps, ...props }}
  >
    {children}
  </Text>
);

StyledAutoCompleteNoOption.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  innerProps: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  innerRef: PropTypes.func.isRequired
};

export default StyledAutoCompleteNoOption;
