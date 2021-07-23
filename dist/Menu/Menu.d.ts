export default Menu;
declare class Menu extends Component<any, any, any> {
    constructor(props: any);
    onMenuItemSelect: (value: any) => void;
    onKeyDown: ({ key }: {
        key: any;
    }) => void;
    get currentlyFocused(): string | undefined;
    domIdForMenuItem(menuItem: any): string | undefined;
    focusNextMenuItem(): void;
    focusPreviousMenuItem(): void;
    focusMenuItem(menuItem: any): void;
    renderMenuItems(): any;
    renderMenuItem(menuItem: any, index: any): import("@emotion/react/jsx-runtime").JSX.Element;
}
declare namespace Menu {
    namespace propTypes {
        const menuItems: PropTypes.Validator<(PropTypes.InferProps<{
            baseColor: PropTypes.Requireable<string>;
            label: PropTypes.Requireable<string>;
            name: PropTypes.Requireable<string>;
            value: PropTypes.Requireable<string>;
        }> | null | undefined)[]>;
        const MenuItemComponent: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        const name: PropTypes.Validator<string>;
        const onChange: PropTypes.Requireable<(...args: any[]) => any>;
        const selected: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        export { MenuItem as MenuItemComponent };
        export function onChange_1(): null;
        export { onChange_1 as onChange };
        const selected_1: undefined;
        export { selected_1 as selected };
    }
}
import { Component } from "react";
import PropTypes from "prop-types";
import MenuItem from "../MenuItem";
