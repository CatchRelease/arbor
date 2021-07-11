export default MenuItem;
declare function MenuItem({ innerRef, children, ...props }: {
    [x: string]: any;
    innerRef: any;
    children: any;
}): JSX.Element;
declare namespace MenuItem {
    namespace propTypes {
        const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const innerRef: PropTypes.Requireable<(...args: any[]) => any>;
    }
    namespace defaultProps {
        const innerRef_1: undefined;
        export { innerRef_1 as innerRef };
    }
}
import PropTypes from "prop-types";
