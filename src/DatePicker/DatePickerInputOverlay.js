import React from 'react';
import PropTypes from 'prop-types';

import Box from '../Box';
import DatePicker from './DatePicker';
import PopoverContent from '../Popover/PopoverContent';

const DatePickerInputOverlay = ({ classNames, children, ...props }) => (
  <Box position="absolute" zIndex="100">
    <PopoverContent className={classNames.overlayWrapper} {...props}>
      <DatePicker {...children.props} />
    </PopoverContent>
  </Box>
);

DatePickerInputOverlay.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  classNames: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default DatePickerInputOverlay;
