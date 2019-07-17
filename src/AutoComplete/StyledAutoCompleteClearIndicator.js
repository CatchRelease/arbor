import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

const StyledAutoCompleteClearIndicator = ({
  innerProps,
  innerRef,
  ...props
}) => (
  <Icon
    aria-label="clear selection"
    name="cross"
    ref={innerRef}
    {...{ ...innerProps, ...props }}
  />
);

StyledAutoCompleteClearIndicator.propTypes = {
  innerProps: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  innerRef: PropTypes.func.isRequired
};

export default StyledAutoCompleteClearIndicator;
