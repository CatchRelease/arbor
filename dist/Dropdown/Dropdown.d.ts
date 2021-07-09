export default Dropdown;
declare class Dropdown extends Component<any, any, any> {
    constructor(props: any);
    popover: import("react").RefObject<any>;
    button: import("react").RefObject<any>;
    menu: import("react").RefObject<any>;
    onOpen: () => void;
    onKeyDown: (e: any) => void;
    onChange: (value: any) => void;
}
declare namespace Dropdown {
    namespace propTypes {
        const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const MenuItemComponent: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        const menuItems: PropTypes.Validator<(PropTypes.InferProps<{
            baseColor: PropTypes.Requireable<string>;
            label: PropTypes.Requireable<string>;
            value: PropTypes.Requireable<string>;
        }> | null | undefined)[]>;
        const name: PropTypes.Validator<string>;
        const onChange: PropTypes.Requireable<(...args: any[]) => any>;
        const popoverProps: PropTypes.Requireable<object>;
        const selected: PropTypes.Requireable<string>;
        const TriggerComponent: PropTypes.Requireable<PropTypes.ReactComponentLike>;
    }
    namespace defaultProps {
        export { MenuItem as MenuItemComponent };
        export { Button as TriggerComponent };
        export function onChange_1(): null;
        export { onChange_1 as onChange };
        const popoverProps_1: {};
        export { popoverProps_1 as popoverProps };
        const selected_1: undefined;
        export { selected_1 as selected };
    }
}
import { Component } from "react";
import PropTypes from "prop-types";
import MenuItem from "../MenuItem";
import Button from "../Button";
