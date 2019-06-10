import React from 'react';
import PropTypes from 'prop-types';

import Badge from '../Badge';
import Icon from '../Icon';

const StyledMultiValue = ({ data, data: { label }, removeProps }) => {
  const iconEnd = (
    <Icon
      aria-label="remove"
      css={{ cursor: 'pointer' }}
      fontSize="size3"
      name="cross"
      {...removeProps}
    />
  );

  return (
    <Badge
      {...{
        iconEnd,
        mb: 'smallest',
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
