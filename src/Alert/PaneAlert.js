import PropTypes from 'prop-types';

import AlertContent from './AlertContent';
import IntentAlert from './IntentAlert';
import Pane from '../Pane';
import INTENTS from './intents';

const PaneAlert = ({ boxShadow, intent, ...props }) => (
  <IntentAlert Component={Pane} boxShadow={boxShadow} intent={intent}>
    <AlertContent {...{ intent, ...props }} />
  </IntentAlert>
);

PaneAlert.propTypes = {
  boxShadow: PropTypes.string,
  intent: PropTypes.oneOf(INTENTS)
};

PaneAlert.defaultProps = {
  boxShadow: 'elevation0',
  intent: undefined
};

export default PaneAlert;
