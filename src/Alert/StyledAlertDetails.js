import PropTypes from 'prop-types';

import Text from '../Text';

const StyledAlertDetails = Text.withComponent('div');

StyledAlertDetails.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

StyledAlertDetails.defaultProps = {
  color: 'monochrome.grey80',
  fontSize: 'size4',
  lineHeight: 'large',
  gridArea: 'details'
};

export default StyledAlertDetails;
