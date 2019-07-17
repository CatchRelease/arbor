import React from 'react';
import PropTypes from 'prop-types';

import { colorForString } from '../utils';
import { palette } from '../theme/colors';

import Badge from '../Badge';
import Icon from '../Icon';

const StyledAutoCompleteMultiValue = ({
  data,
  data: { label },
  removeProps
}) => {
  const paletteColor = colorForString(label, Object.keys(palette));

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
        paletteColor,
        subtle: true,
        variant: 'pill',
        ...data
      }}
    >
      {label}
    </Badge>
  );
};

StyledAutoCompleteMultiValue.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired
  }).isRequired,
  removeProps: PropTypes.shape({
    onClick: PropTypes.func.isRequired,
    onMouseDown: PropTypes.func.isRequired,
    onTouchEnd: PropTypes.func.isRequired
  }).isRequired
};

export default StyledAutoCompleteMultiValue;
