import PropTypes from 'prop-types';

import Text from '../Text';

const StyledAlertMessage = Text.withComponent('div');

StyledAlertMessage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

StyledAlertMessage.defaultProps = {
  color: 'monochrome.grey100',
  fontSize: 'size4',
  fontWeight: 'medium'
};

export default StyledAlertMessage;
