export default StyledSelect;
declare function StyledSelect({ children, ...props }: {
    [x: string]: any;
    children: any;
}): JSX.Element;
declare namespace StyledSelect {
    namespace propTypes {
        const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const large: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        const large_1: boolean;
        export { large_1 as large };
    }
}
import PropTypes from "prop-types";
