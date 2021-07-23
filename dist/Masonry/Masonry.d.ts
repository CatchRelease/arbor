export default Masonry;
declare function Masonry({ children, rowGap, ...props }: {
    [x: string]: any;
    children: any;
    rowGap: any;
}): import("@emotion/react/jsx-runtime").JSX.Element;
declare namespace Masonry {
    namespace propTypes {
        const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const rowGap: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const rowGap_1: undefined;
        export { rowGap_1 as rowGap };
    }
}
import PropTypes from "prop-types";
