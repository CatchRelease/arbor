import PropTypes from 'prop-types';

import INTENTS from './intents';

const IntentAlert = ({ intent, children, Component, ...props }) => (
  <Component
    borderLeft={intent ? '3px solid' : null}
    borderColor={`intent.${intent}.default`}
    {...props}
  >
    {children}
  </Component>
);

IntentAlert.propTypes = {
  intent: PropTypes.oneOf(INTENTS),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  Component: PropTypes.elementType.isRequired
};

IntentAlert.defaultProps = {
  intent: undefined
};

export default IntentAlert;
