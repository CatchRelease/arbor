import React from 'react';
import PropTypes from 'prop-types';

import Box from '../Box';
import StyledAlert from './StyledAlert';
import StyledAlertAction from './StyledAlertAction';
import StyledAlertDetails from './StyledAlertDetails';
import StyledAlertIntent from './StyledAlertIntent';
import StyledAlertMessage from './StyledAlertMessage';
import INTENTS from './intents';
import VARIANTS from './variants';

const Alert = ({ onClose, details, intent, message, variant }) => (
  <StyledAlert
    details={details}
    intent={intent}
    onClose={onClose}
    variant={variant}
  >
    {intent && <StyledAlertIntent intent={intent} />}
    <StyledAlertMessage>{message}</StyledAlertMessage>
    {onClose && <StyledAlertAction onClose={onClose} />}
    {details &&
      intent && <Box aria-hidden="true" gridArea="intentPlaceholder" />}
    {details && <StyledAlertDetails>{details}</StyledAlertDetails>}
    {details &&
      onClose && <Box aria-hidden="true" gridArea="actionPlaceholder" />}
  </StyledAlert>
);

Alert.propTypes = {
  /**
   * More details about the alert.
   * */
  details: PropTypes.string,

  /**
   * Specify an intent to visualize meaning.
   * */
  intent: PropTypes.oneOf(INTENTS),

  /**
   * Main message of the alert.
   * */
  message: PropTypes.string.isRequired,

  /**
   * Callback for the alert close button.
   * */
  onClose: PropTypes.func,

  /**
   * Variants for different alert styles.
   * */
  variant: PropTypes.oneOf(VARIANTS)
};

Alert.defaultProps = {
  details: undefined,
  intent: undefined,
  onClose: undefined,
  variant: undefined
};

export default Alert;
