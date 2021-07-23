export default StyledAutoCompleteContainer;
declare function StyledAutoCompleteContainer({ cx, innerRef, children, ...props }: {
    [x: string]: any;
    cx: any;
    innerRef: any;
    children: any;
}): import("@emotion/react/jsx-runtime").JSX.Element;
declare namespace StyledAutoCompleteContainer {
    namespace propTypes {
        const cx: PropTypes.Validator<(...args: any[]) => any>;
        const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const innerRef: PropTypes.Validator<(...args: any[]) => any>;
    }
}
import PropTypes from "prop-types";
