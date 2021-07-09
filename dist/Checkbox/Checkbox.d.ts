export default Checkbox;
declare function Checkbox({ id, name, label, disabled, isInvalid, checked, onChange, value, indeterminate, icon, ...props }: {
    [x: string]: any;
    id: any;
    name: any;
    label: any;
    disabled: any;
    isInvalid: any;
    checked: any;
    onChange: any;
    value: any;
    indeterminate: any;
    icon: any;
}): JSX.Element;
declare namespace Checkbox {
    namespace propTypes {
        const checked: PropTypes.Requireable<boolean>;
        const disabled: PropTypes.Requireable<boolean>;
        const icon: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        const id: PropTypes.Validator<string>;
        const indeterminate: PropTypes.Requireable<boolean>;
        const isInvalid: PropTypes.Requireable<boolean>;
        const label: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const name: PropTypes.Validator<string>;
        const onChange: PropTypes.Requireable<(...args: any[]) => any>;
        const value: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const checked_1: boolean;
        export { checked_1 as checked };
        const disabled_1: boolean;
        export { disabled_1 as disabled };
        const icon_1: undefined;
        export { icon_1 as icon };
        const indeterminate_1: boolean;
        export { indeterminate_1 as indeterminate };
        const isInvalid_1: boolean;
        export { isInvalid_1 as isInvalid };
        export function onChange_1(): void;
        export { onChange_1 as onChange };
        const value_1: string;
        export { value_1 as value };
    }
}
import PropTypes from "prop-types";
