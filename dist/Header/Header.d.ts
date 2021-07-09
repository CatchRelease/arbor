export default Header;
declare function Header({ children, ...props }: {
    [x: string]: any;
    children: any;
}): JSX.Element;
declare namespace Header {
    namespace propTypes {
        const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
    }
}
import PropTypes from "prop-types";
