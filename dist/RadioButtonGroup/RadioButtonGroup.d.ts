export default RadioButtonGroup;
declare function RadioButtonGroup({ name, options, onChange, checkedValue, disabled, buttonProps }: {
    name: any;
    options: any;
    onChange: any;
    checkedValue: any;
    disabled: any;
    buttonProps: any;
}): import("@emotion/react/jsx-runtime").JSX.Element;
declare namespace RadioButtonGroup {
    namespace propTypes {
        const name: PropTypes.Validator<string>;
        const options: PropTypes.Validator<(PropTypes.InferProps<{
            label: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
            value: PropTypes.Validator<string>;
            disabled: PropTypes.Requireable<boolean>;
        }> | null | undefined)[]>;
        const onChange: PropTypes.Validator<(...args: any[]) => any>;
        const checkedValue: PropTypes.Requireable<string>;
        const disabled: PropTypes.Requireable<boolean>;
        const buttonProps: PropTypes.Requireable<object>;
    }
    namespace defaultProps {
        const checkedValue_1: null;
        export { checkedValue_1 as checkedValue };
        const buttonProps_1: {};
        export { buttonProps_1 as buttonProps };
        const disabled_1: boolean;
        export { disabled_1 as disabled };
    }
}
import PropTypes from "prop-types";
