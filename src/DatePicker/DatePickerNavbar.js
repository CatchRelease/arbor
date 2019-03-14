import React from 'react';
import PropTypes from 'prop-types';

import Box from '../Box';
import Button from '../Button';
import Flex from '../Flex';
import Icon from '../Icon';

const DatePickerNavbar = ({ onPreviousClick, onNextClick, className }) => (
  <Flex className={className} alignItems="center">
    <Button
      iconStart={<Icon color="icon.default" name="chevron" rotation="90" />}
      onClick={() => onPreviousClick()}
      size="small"
      variant="minimal"
      aria-label="Previous Month"
    />
    <Box mr="small" ml="small">
      <Icon color="icon.default" fontSize="size5" name="symbol-circle" />
    </Box>
    <Button
      iconStart={<Icon color="icon.default" name="chevron" rotation="270" />}
      onClick={() => onNextClick()}
      size="small"
      variant="minimal"
      aria-label="Next Month"
    />
  </Flex>
);

DatePickerNavbar.propTypes = {
  className: PropTypes.string.isRequired,
  onNextClick: PropTypes.func.isRequired,
  onPreviousClick: PropTypes.func.isRequired
};

export default DatePickerNavbar;
