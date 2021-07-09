export default AlertContent;
declare function AlertContent({ details, intent, message, oneLine, onClose, ...props }: {
    [x: string]: any;
    details: any;
    intent: any;
    message: any;
    oneLine: any;
    onClose: any;
}): JSX.Element;
declare namespace AlertContent {
    namespace propTypes {
        const details: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const intent: PropTypes.Requireable<string>;
        const message: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const onClose: PropTypes.Requireable<(...args: any[]) => any>;
        const oneLine: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        const details_1: undefined;
        export { details_1 as details };
        const intent_1: undefined;
        export { intent_1 as intent };
        const onClose_1: undefined;
        export { onClose_1 as onClose };
        const oneLine_1: boolean;
        export { oneLine_1 as oneLine };
    }
}
import PropTypes from "prop-types";
