import React from 'react';
import PropTypes from 'prop-types';

import AlertContent from './AlertContent';
import Card from '../Card';
import IntentAlert from './IntentAlert';
import INTENTS from './intents';

const conditionalProps = details =>
  Object.assign(
    {},
    !details && {
      textAlign: 'center'
    }
  );

const CardAlert = ({ boxShadow, details, intent, ...props }) => (
  <IntentAlert
    Component={Card}
    boxShadow={boxShadow}
    intent={intent}
    {...conditionalProps(details)}
  >
    <AlertContent {...{ details, intent, ...props }} />
  </IntentAlert>
);

CardAlert.propTypes = {
  boxShadow: PropTypes.string,
  details: PropTypes.string,
  intent: PropTypes.oneOf(INTENTS)
};

CardAlert.defaultProps = {
  boxShadow: 'elevation1',
  details: undefined,
  intent: undefined
};

export default CardAlert;
