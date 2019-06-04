import React from 'react';
import PropTypes from 'prop-types';

import Badge from '../Badge';
import Icon from '../Icon';

const StyledMultiValue = ({ data, data: { label }, removeProps }) => {
  const iconEnd = <Icon name="cross" {...removeProps} />;

  return (
    <Badge
      {...{
        iconEnd,
        mr: 'smallest',
        subtle: true,
        ...data
      }}
    >
      {label}
    </Badge>
  );
};

StyledMultiValue.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired
  }).isRequired,
  removeProps: PropTypes.shape({
    onClick: PropTypes.func.isRequired,
    onMouseDown: PropTypes.func.isRequired,
    onTouchEnd: PropTypes.func.isRequired
  }).isRequired
};

export default StyledMultiValue;
