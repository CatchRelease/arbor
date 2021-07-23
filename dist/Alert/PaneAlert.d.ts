export default PaneAlert;
declare function PaneAlert({ boxShadow, intent, ...props }: {
    [x: string]: any;
    boxShadow: any;
    intent: any;
}): import("@emotion/react/jsx-runtime").JSX.Element;
declare namespace PaneAlert {
    namespace propTypes {
        const boxShadow: PropTypes.Requireable<string>;
        const intent: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const boxShadow_1: string;
        export { boxShadow_1 as boxShadow };
        const intent_1: undefined;
        export { intent_1 as intent };
    }
}
import PropTypes from "prop-types";
