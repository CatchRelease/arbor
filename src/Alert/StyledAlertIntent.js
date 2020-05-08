import React from 'react';
import PropTypes from 'prop-types';

import Box from '../Box';
import Icon from '../Icon';
import INTENTS from './intents';

const getIconName = (intent) => {
  switch (intent) {
    case 'danger':
      return 'error';
    case 'info':
      return 'info-sign';
    case 'success':
      return 'tick-circle';
    case 'warning':
      return 'warning-sign';
    default:
      return '';
  }
};

const StyledAlertIntent = ({ intent }) => (
  <Box aria-label={intent}>
    <Icon
      color={`intent.${intent}.default`}
      fontSize="size4"
      name={getIconName(intent)}
    />
  </Box>
);

StyledAlertIntent.propTypes = {
  intent: PropTypes.oneOf(INTENTS).isRequired
};

export default StyledAlertIntent;
