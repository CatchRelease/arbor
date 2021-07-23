export default StyledAutoCompleteNoOptionsMessage;
declare function StyledAutoCompleteNoOptionsMessage({ cx, innerRef, innerProps, children, ...props }: {
    [x: string]: any;
    cx: any;
    innerRef: any;
    innerProps: any;
    children: any;
}): import("@emotion/react/jsx-runtime").JSX.Element;
declare namespace StyledAutoCompleteNoOptionsMessage {
    namespace propTypes {
        const cx: PropTypes.Validator<(...args: any[]) => any>;
        const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const innerProps: PropTypes.Requireable<object>;
        const innerRef: PropTypes.Requireable<(...args: any[]) => any>;
    }
    namespace defaultProps {
        const innerProps_1: {};
        export { innerProps_1 as innerProps };
        const innerRef_1: undefined;
        export { innerRef_1 as innerRef };
    }
}
import PropTypes from "prop-types";
