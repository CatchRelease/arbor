import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

const StyledClearIndicator = ({ innerProps }) => (
  <Icon mr="smaller" name="cross" {...innerProps} />
);

StyledClearIndicator.propTypes = {
  innerProps: PropTypes.object // eslint-disable-line react/forbid-prop-types
};

StyledClearIndicator.defaultProps = {
  innerProps: {}
};

export default StyledClearIndicator;
