export default CheckboxIcon;
declare function CheckboxIcon({ checked, indeterminate }: {
    checked: any;
    indeterminate: any;
}): JSX.Element | null;
declare namespace CheckboxIcon {
    namespace propTypes {
        const checked: PropTypes.Requireable<boolean>;
        const indeterminate: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        const checked_1: boolean;
        export { checked_1 as checked };
        const indeterminate_1: boolean;
        export { indeterminate_1 as indeterminate };
    }
}
import PropTypes from "prop-types";
