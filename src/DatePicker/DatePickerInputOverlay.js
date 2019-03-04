import React from 'react';

import Box from '../Box';
import DatePicker from './DatePicker';
import PopoverContent from '../Popover/PopoverContent';

const DatePickerInputOverlay = ({
  classNames,
  selectedDay,
  children,
  ...props
}) => (
  <Box position="absolute">
    <PopoverContent className={classNames.overlayWrapper} {...props}>
      <DatePicker {...children.props} />
    </PopoverContent>
  </Box>
);

export default DatePickerInputOverlay;
