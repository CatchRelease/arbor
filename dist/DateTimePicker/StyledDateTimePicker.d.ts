/// <reference types="react" />
import DateTimePicker from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
declare const StyledDateTimePicker: import("@emotion/styled").StyledComponent<DateTimePicker.DatetimepickerProps & {
    theme?: import("@emotion/react").Theme | undefined;
} & import("../Input/inputStyles").InputStylesProps, {}, {
    ref?: import("react").Ref<DateTimePicker> | undefined;
}>;
export default StyledDateTimePicker;
