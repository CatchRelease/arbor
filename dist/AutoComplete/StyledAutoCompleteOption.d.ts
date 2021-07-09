export default StyledAutoCompleteOption;
declare function StyledAutoCompleteOption({ cx, innerProps, children, ...props }: {
    [x: string]: any;
    cx: any;
    innerProps: any;
    children: any;
}): JSX.Element;
declare namespace StyledAutoCompleteOption {
    namespace propTypes {
        const cx: PropTypes.Validator<(...args: any[]) => any>;
        const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const innerProps: PropTypes.Validator<object>;
    }
}
import PropTypes from "prop-types";
