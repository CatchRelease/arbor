export default CardAlert;
declare function CardAlert({ boxShadow, details, intent, ...props }: {
    [x: string]: any;
    boxShadow: any;
    details: any;
    intent: any;
}): import("@emotion/react/jsx-runtime").JSX.Element;
declare namespace CardAlert {
    namespace propTypes {
        const boxShadow: PropTypes.Requireable<string>;
        const details: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const intent: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const boxShadow_1: string;
        export { boxShadow_1 as boxShadow };
        const details_1: undefined;
        export { details_1 as details };
        const intent_1: undefined;
        export { intent_1 as intent };
    }
}
import PropTypes from "prop-types";
