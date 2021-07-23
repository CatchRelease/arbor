export default BannerAlert;
declare function BannerAlert({ intent, ...props }: {
    [x: string]: any;
    intent: any;
}): import("@emotion/react/jsx-runtime").JSX.Element;
declare namespace BannerAlert {
    namespace propTypes {
        const intent: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const intent_1: undefined;
        export { intent_1 as intent };
    }
}
import PropTypes from "prop-types";
