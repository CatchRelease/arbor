export default StyledAutoCompletePlaceholder;
declare function StyledAutoCompletePlaceholder({ cx, children, ...props }: {
    [x: string]: any;
    cx: any;
    children: any;
}): JSX.Element;
declare namespace StyledAutoCompletePlaceholder {
    namespace propTypes {
        const cx: PropTypes.Validator<(...args: any[]) => any>;
        const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
    }
}
import PropTypes from "prop-types";
