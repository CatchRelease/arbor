import { FC } from 'react';

import Box from '../Box';
import Button from '../Button';
import Flex from '../Flex';
import Icon from '../Icon';

type Props = {
  className: string;
  onNextClick: () => void;
  onPreviousClick: () => void;
};

const DatePickerNavbar: FC<Props> = ({
  className,
  onPreviousClick,
  onNextClick
}) => (
  <Flex className={className} alignItems="center">
    <Button
      iconStart={<Icon color="icon.default" name="chevron" rotation="90" />}
      onClick={() => onPreviousClick()}
      size="small"
      variant="minimal"
      aria-label="Previous Month"
      type="button"
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
      type="button"
    />
  </Flex>
);

export default DatePickerNavbar;
