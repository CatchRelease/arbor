export default DatePickerNavbar;
declare function DatePickerNavbar({ onPreviousClick, onNextClick, className }: {
    onPreviousClick: any;
    onNextClick: any;
    className: any;
}): JSX.Element;
declare namespace DatePickerNavbar {
    namespace propTypes {
        const className: PropTypes.Validator<string>;
        const onNextClick: PropTypes.Validator<(...args: any[]) => any>;
        const onPreviousClick: PropTypes.Validator<(...args: any[]) => any>;
    }
}
import PropTypes from "prop-types";
