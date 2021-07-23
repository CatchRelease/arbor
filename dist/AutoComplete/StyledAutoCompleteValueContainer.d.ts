export default StyledAutoCompleteValueContainer;
declare function StyledAutoCompleteValueContainer({ cx, innerProps, children, ...props }: {
    [x: string]: any;
    cx: any;
    innerProps: any;
    children: any;
}): import("@emotion/react/jsx-runtime").JSX.Element;
declare namespace StyledAutoCompleteValueContainer {
    namespace propTypes {
        const cx: PropTypes.Validator<(...args: any[]) => any>;
        const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const innerProps: PropTypes.Requireable<object>;
    }
    namespace defaultProps {
        const innerProps_1: {};
        export { innerProps_1 as innerProps };
    }
}
import PropTypes from "prop-types";
