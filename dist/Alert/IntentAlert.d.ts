export default IntentAlert;
declare function IntentAlert({ intent, children, Component, ...props }: {
    [x: string]: any;
    intent: any;
    children: any;
    Component: any;
}): JSX.Element;
declare namespace IntentAlert {
    namespace propTypes {
        const intent: PropTypes.Requireable<string>;
        const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const Component: PropTypes.Validator<PropTypes.ReactComponentLike>;
    }
    namespace defaultProps {
        const intent_1: undefined;
        export { intent_1 as intent };
    }
}
import PropTypes from "prop-types";
