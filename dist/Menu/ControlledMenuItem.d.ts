export default ControlledMenuItem;
declare class ControlledMenuItem extends PureComponent<any, any, any> {
    constructor(props: any);
    constructor(props: any, context: any);
    onKeyDown: (e: any) => void;
    onSelect: () => void;
}
declare namespace ControlledMenuItem {
    namespace propTypes {
        const baseColor: PropTypes.Requireable<string>;
        const iconName: PropTypes.Requireable<string>;
        const id: PropTypes.Validator<string>;
        const isFocused: PropTypes.Requireable<boolean>;
        const isSelected: PropTypes.Requireable<boolean>;
        const label: PropTypes.Validator<string>;
        const MenuItemComponent: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        const name: PropTypes.Validator<string>;
        const onSelect: PropTypes.Requireable<(...args: any[]) => any>;
        const secondaryLabel: PropTypes.Requireable<string>;
        const value: PropTypes.Validator<string>;
    }
    namespace defaultProps {
        export { MenuItem as MenuItemComponent };
        const baseColor_1: string;
        export { baseColor_1 as baseColor };
        const iconName_1: null;
        export { iconName_1 as iconName };
        const isFocused_1: boolean;
        export { isFocused_1 as isFocused };
        const isSelected_1: boolean;
        export { isSelected_1 as isSelected };
        export function onSelect_1(): null;
        export { onSelect_1 as onSelect };
        const secondaryLabel_1: null;
        export { secondaryLabel_1 as secondaryLabel };
    }
}
import { PureComponent } from "react";
import PropTypes from "prop-types";
import MenuItem from "../MenuItem";
