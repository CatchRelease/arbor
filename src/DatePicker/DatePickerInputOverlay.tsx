import { DayPickerProps } from 'react-day-picker';

import Box from '../Box';
import DatePicker from './DatePicker';
import PopoverContent, {
  Props as PopoverContentProps
} from '../Popover/PopoverContent';

type Props = PopoverContentProps & {
  children: { props: DayPickerProps };
  classNames: { overlayWrapper: string };
};

const DatePickerInputOverlay = ({ classNames, children, ...props }: Props) => (
  <Box position="absolute" zIndex={100}>
    <PopoverContent className={classNames.overlayWrapper} {...props}>
      <DatePicker {...children.props} />
    </PopoverContent>
  </Box>
);

export default DatePickerInputOverlay;
