import PropTypes from 'prop-types';

import Box from '../Box';
import Button from '../Button';
import Icon from '../Icon';

const StyledAlertAction = ({ onClose }) => (
  <Box>
    <Button
      aria-label="close"
      iconStart={<Icon fontSize="larger" name="cross" />}
      onClick={onClose}
      size="small"
      variant="minimal"
    />
  </Box>
);

StyledAlertAction.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default StyledAlertAction;
