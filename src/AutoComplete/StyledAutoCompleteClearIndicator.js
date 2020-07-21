import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

const StyledAutoCompleteClearIndicator = ({ innerProps, cx, ...props }) => (
  <Icon
    aria-label="clear selection"
    fontSize="size4"
    name="cross"
    {...{ ...innerProps, ...props }}
  />
);

StyledAutoCompleteClearIndicator.propTypes = {
  cx: PropTypes.func.isRequired,
  innerProps: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default StyledAutoCompleteClearIndicator;
