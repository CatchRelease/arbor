export default StyledAutoCompleteControl;
declare function StyledAutoCompleteControl({ cx, innerRef, innerProps, children, ...props }: {
    [x: string]: any;
    cx: any;
    innerRef: any;
    innerProps: any;
    children: any;
}): JSX.Element;
declare namespace StyledAutoCompleteControl {
    namespace propTypes {
        const cx: PropTypes.Validator<(...args: any[]) => any>;
        const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const innerProps: PropTypes.Validator<object>;
        const innerRef: PropTypes.Validator<(...args: any[]) => any>;
    }
}
import PropTypes from "prop-types";
