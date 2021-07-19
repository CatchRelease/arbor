export default ButtonSpinner;
declare function ButtonSpinner({ disabled, intent, size, variant }: {
    disabled: any;
    intent: any;
    size: any;
    variant: any;
}): JSX.Element;
declare namespace ButtonSpinner {
    namespace propTypes {
        const disabled: PropTypes.Validator<boolean>;
        const intent: PropTypes.Validator<string>;
        const size: PropTypes.Validator<"small" | "large" | "medium" | "jumbo" | ("small" | "large" | "medium" | "jumbo" | null | undefined)[]>;
        const variant: PropTypes.Validator<string>;
    }
}
import PropTypes from "prop-types";
