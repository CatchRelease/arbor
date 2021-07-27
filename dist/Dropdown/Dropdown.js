"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const Button_1 = __importDefault(require("../Button"));
const Menu_1 = __importDefault(require("../Menu"));
const MenuItem_1 = __importDefault(require("../MenuItem"));
const Popover_1 = __importDefault(require("../Popover"));
const constants_1 = require("../constants");
class Dropdown extends react_1.Component {
    constructor(props) {
        super(props);
        this.onOpen = () => {
            this.menu.current.focusMenuItem(0);
        };
        this.onKeyDown = (e) => {
            const { key } = e;
            if (document.activeElement !== this.button.current) {
                return;
            }
            if (key !== constants_1.ARROW_DOWN) {
                return;
            }
            e.preventDefault();
            this.popover.current.open(this.onOpen);
        };
        this.onChange = (value) => {
            const { onChange } = this.props;
            this.popover.current.close();
            onChange(value);
        };
        this.popover = react_1.createRef();
        this.button = react_1.createRef();
        this.menu = react_1.createRef();
    }
    componentDidMount() {
        document.addEventListener('keydown', this.onKeyDown, true);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeyDown, true);
    }
    render() {
        const _a = this.props, { MenuItemComponent, TriggerComponent, children, menuItems, popoverProps, selected } = _a, props = __rest(_a, ["MenuItemComponent", "TriggerComponent", "children", "menuItems", "popoverProps", "selected"]);
        const isOpen = this.popover.current && this.popover.current.state.isOpen;
        const menu = (jsx_runtime_1.jsx(Menu_1.default, Object.assign({ MenuItemComponent: MenuItemComponent, onChange: this.onChange, ref: this.menu }, { menuItems, name: props.name, selected }), void 0));
        return (jsx_runtime_1.jsx(Popover_1.default, Object.assign({ ref: this.popover, content: menu }, popoverProps, { children: jsx_runtime_1.jsx(TriggerComponent, Object.assign({ ref: this.button, "aria-haspopup": true, "aria-expanded": isOpen }, props, { children: children }), void 0) }), void 0));
    }
}
Dropdown.propTypes = {
    /**
     * The content inside the menu button trigger
     */
    children: prop_types_1.default.node.isRequired,
    /**
     * Component used to render each menu item
     */
    MenuItemComponent: prop_types_1.default.elementType,
    /**
     * Array of menu item objects to render as MenuItems in the Menu
     */
    menuItems: prop_types_1.default.arrayOf(prop_types_1.default.shape({
        baseColor: prop_types_1.default.string,
        label: prop_types_1.default.string,
        value: prop_types_1.default.string
    })).isRequired,
    /**
     * Name of the dropdown's menu for grouping the menu item DOM IDs
     */
    name: prop_types_1.default.string.isRequired,
    /**
     * Callback to run when a dropdown menu item is selected
     */
    onChange: prop_types_1.default.func,
    /**
     * Props to be passed to the popover component/
     */
    popoverProps: prop_types_1.default.object,
    /**
     * Initial selected menu item value
     */
    selected: prop_types_1.default.string,
    /**
     * Component used to render dropdown trigger
     */
    TriggerComponent: prop_types_1.default.elementType
};
Dropdown.defaultProps = {
    MenuItemComponent: MenuItem_1.default,
    TriggerComponent: Button_1.default,
    onChange: () => null,
    popoverProps: {},
    selected: undefined
};
exports.default = Dropdown;
