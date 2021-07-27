"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const polished_1 = require("polished");
const constants_1 = require("../constants");
const Flex_1 = __importDefault(require("../Flex"));
const Icon_1 = __importDefault(require("../Icon"));
const MenuItem_1 = __importDefault(require("../MenuItem"));
const Text_1 = __importDefault(require("../Text"));
const MIN_WIDTH = '120px';
const PADDING = '8px';
class ControlledMenuItem extends react_1.PureComponent {
    constructor() {
        super(...arguments);
        this.onKeyDown = (e) => {
            const { key } = e;
            const { isFocused } = this.props;
            if (!isFocused) {
                return;
            }
            if (key === constants_1.ENTER_KEY || key === constants_1.SPACEBAR) {
                e.preventDefault();
                this.onSelect();
            }
        };
        this.onSelect = () => {
            const { onSelect, value } = this.props;
            onSelect(value);
        };
    }
    componentDidMount() {
        document.addEventListener('keydown', this.onKeyDown, true);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeyDown, true);
    }
    render() {
        const { MenuItemComponent, baseColor, iconName, id, isFocused, isSelected, label, name, secondaryLabel, value } = this.props;
        return (jsx_runtime_1.jsxs(MenuItemComponent, Object.assign({}, Object.assign({ 'aria-selected': isSelected, alignItems: 'center', isFocused,
            isSelected, onClick: this.onSelect, onKeyPress: this.onKeyDown, role: 'option' }, this.props), { children: [jsx_runtime_1.jsx("input", Object.assign({}, { id, name, value, css: polished_1.hideVisually(), type: 'hidden' }), void 0), jsx_runtime_1.jsxs(Flex_1.default, Object.assign({ width: "100%", justifyContent: "space-between" }, { children: [jsx_runtime_1.jsxs(Flex_1.default, Object.assign({ flex: "1 0 auto", maxWidth: secondaryLabel ? `calc(100% - ${MIN_WIDTH} - ${PADDING})` : '100%' }, { children: [iconName && (jsx_runtime_1.jsx(Icon_1.default, { name: iconName, mr: "small", color: baseColor, fontSize: "16px" }, void 0)), jsx_runtime_1.jsx(Text_1.default, Object.assign({ as: "span", color: "inherit", minWidth: MIN_WIDTH, fontSize: "size4", overflow: "hidden" }, { children: label }), void 0)] }), void 0), secondaryLabel && (jsx_runtime_1.jsx(Flex_1.default, Object.assign({ pl: PADDING, overflow: "hidden", flex: "0 1 auto" }, { children: jsx_runtime_1.jsx(Text_1.default, Object.assign({ as: "span", fontSize: "size3", css: (theme) => ({
                                    // Put primary and secondary labels on the same baseline
                                    lineHeight: theme.fontSizes.size4
                                }), color: "text.muted", maxWidth: "100%" }, { children: secondaryLabel }), void 0) }), void 0))] }), void 0)] }), void 0));
    }
}
ControlledMenuItem.propTypes = {
    /**
     * Base color to use for the menu item
     */
    baseColor: prop_types_1.default.string,
    /**
     * Name of icon to use for the menu item
     */
    iconName: prop_types_1.default.string,
    /**
     * HTML ID for the menu item
     */
    id: prop_types_1.default.string.isRequired,
    /**
     * Whether or not the current menu item is focused
     */
    isFocused: prop_types_1.default.bool,
    /**
     * Indicates whether or not the menu item is selected
     */
    isSelected: prop_types_1.default.bool,
    /**
     * Main label text for the menu item
     */
    label: prop_types_1.default.string.isRequired,
    /**
     * Component used to render each menu item
     */
    MenuItemComponent: prop_types_1.default.elementType,
    /**
     * HTML input name property for the input field
     */
    name: prop_types_1.default.string.isRequired,
    /**
     * Callback to run when a selection is made. This is generally intended for
     * internal use with the Menu component.
     */
    onSelect: prop_types_1.default.func,
    /**
     * Secondary label text for the menu item
     */
    secondaryLabel: prop_types_1.default.string,
    /**
     * HTML input value property for the input field
     */
    value: prop_types_1.default.string.isRequired
};
ControlledMenuItem.defaultProps = {
    MenuItemComponent: MenuItem_1.default,
    baseColor: 'text.default',
    iconName: null,
    isFocused: false,
    isSelected: false,
    onSelect: () => null,
    secondaryLabel: null
};
exports.default = ControlledMenuItem;
