export default DatePickerInputOverlay;
declare function DatePickerInputOverlay({ classNames, children, ...props }: {
    [x: string]: any;
    classNames: any;
    children: any;
}): JSX.Element;
declare namespace DatePickerInputOverlay {
    namespace propTypes {
        const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const classNames: PropTypes.Validator<object>;
    }
}
import PropTypes from "prop-types";
