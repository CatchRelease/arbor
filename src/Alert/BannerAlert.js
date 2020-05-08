import React from 'react';
import PropTypes from 'prop-types';

import AlertContent from './AlertContent';
import Box from '../Box';
import IntentAlert from './IntentAlert';
import INTENTS from './intents';

const conditionalProps = (intent) => {
  const props = intent
    ? {
        bg: `intent.${intent}.lighter`
      }
    : {};

  return props;
};

const BannerAlert = ({ intent, ...props }) => (
  <IntentAlert
    Component={Box}
    intent={intent}
    textAlign="center"
    {...conditionalProps(intent)}
  >
    <AlertContent oneLine {...{ intent, ...props }} />
  </IntentAlert>
);

BannerAlert.propTypes = {
  intent: PropTypes.oneOf(INTENTS)
};

BannerAlert.defaultProps = {
  intent: undefined
};

export default BannerAlert;
