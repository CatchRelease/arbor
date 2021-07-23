export default Pane;
declare function Pane({ innerRef, ...props }: {
    [x: string]: any;
    innerRef: any;
}): import("@emotion/react/jsx-runtime").JSX.Element;
declare namespace Pane {
    namespace propTypes {
        export { propType as bg };
        export { propType as boxShadow };
        export const innerRef: PropTypes.Requireable<(...args: any[]) => any>;
        export { propType as overflow };
        export { propType as width };
    }
    namespace defaultProps {
        export const bg: string;
        export const boxShadow: string;
        const innerRef_1: undefined;
        export { innerRef_1 as innerRef };
        export const overflow: string;
        export const width: string;
    }
}
import PropTypes from "prop-types";
