import { FC } from 'react';
import { DayPickerInputProps } from 'react-day-picker';
import { InputProps } from '../Input';
declare type Props = Omit<DayPickerInputProps, 'inputProps'> & {
    inputProps?: InputProps;
};
declare const DatePickerInput: FC<Props>;
export default DatePickerInput;
