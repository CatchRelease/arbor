import PropTypes from 'prop-types';

import AlertContent from './AlertContent';
import Card from '../Card';
import IntentAlert from './IntentAlert';
import INTENTS from './intents';

const conditionalProps = (details) => {
  const props = !details
    ? {
        textAlign: 'center'
      }
    : {};

  return props;
};

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
  details: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  intent: PropTypes.oneOf(INTENTS)
};

CardAlert.defaultProps = {
  boxShadow: 'elevation1',
  details: undefined,
  intent: undefined
};

export default CardAlert;
