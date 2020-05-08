import React from 'react';
import PropTypes from 'prop-types';

import StyledAlertContent from './StyledAlertContent';
import StyledAlertAction from './StyledAlertAction';
import StyledAlertDetails from './StyledAlertDetails';
import StyledAlertIntent from './StyledAlertIntent';
import StyledAlertMessage from './StyledAlertMessage';
import INTENTS from './intents';

const gridPlaceholder = <span aria-hidden />;

const AlertContent = ({
  details,
  intent,
  message,
  oneLine,
  onClose,
  ...props
}) => (
  <StyledAlertContent
    details={details}
    intent={intent}
    onClose={onClose}
    {...props}
  >
    {intent && <StyledAlertIntent intent={intent} />}
    <StyledAlertMessage>
      {message}
      {oneLine && details && (
        <StyledAlertDetails as="span">
          &nbsp;
          {details}
        </StyledAlertDetails>
      )}
    </StyledAlertMessage>
    {onClose && <StyledAlertAction onClose={onClose} />}
    {!oneLine && (
      <>
        {details && intent && gridPlaceholder}
        {details && <StyledAlertDetails>{details}</StyledAlertDetails>}
        {details && onClose && gridPlaceholder}
      </>
    )}
  </StyledAlertContent>
);

AlertContent.propTypes = {
  /**
   * More details about the alert.
   * */
  details: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),

  /**
   * Specify an intent to visualize meaning.
   * */
  intent: PropTypes.oneOf(INTENTS),

  /**
   * Main message of the alert.
   * */
  message: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,

  /**
   * Callback for the alert close button.
   * */
  onClose: PropTypes.func,

  /**
   * Should the messages and details appear on one line
   */
  oneLine: PropTypes.bool
};

AlertContent.defaultProps = {
  details: undefined,
  intent: undefined,
  onClose: undefined,
  oneLine: false
};

export default AlertContent;
