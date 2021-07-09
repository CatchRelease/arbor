export default DatePickerInput;
declare function DatePickerInput({ dayPickerProps, inputProps, ...props }: {
    [x: string]: any;
    dayPickerProps: any;
    inputProps: any;
}): JSX.Element;
declare namespace DatePickerInput {
    namespace propTypes {
        const dayPickerProps: PropTypes.Requireable<object>;
        const inputProps: PropTypes.Requireable<object>;
    }
    namespace defaultProps {
        const dayPickerProps_1: {};
        export { dayPickerProps_1 as dayPickerProps };
        const inputProps_1: {};
        export { inputProps_1 as inputProps };
    }
}
import PropTypes from "prop-types";
