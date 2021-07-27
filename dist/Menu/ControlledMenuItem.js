"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var polished_1 = require("polished");
var constants_1 = require("../constants");
var Flex_1 = __importDefault(require("../Flex"));
var Icon_1 = __importDefault(require("../Icon"));
var MenuItem_1 = __importDefault(require("../MenuItem"));
var Text_1 = __importDefault(require("../Text"));
var MIN_WIDTH = '120px';
var PADDING = '8px';
var ControlledMenuItem = /** @class */ (function (_super) {
    __extends(ControlledMenuItem, _super);
    function ControlledMenuItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onKeyDown = function (e) {
            var key = e.key;
            var isFocused = _this.props.isFocused;
            if (!isFocused) {
                return;
            }
            if (key === constants_1.ENTER_KEY || key === constants_1.SPACEBAR) {
                e.preventDefault();
                _this.onSelect();
            }
        };
        _this.onSelect = function () {
            var _a = _this.props, onSelect = _a.onSelect, value = _a.value;
            onSelect(value);
        };
        return _this;
    }
    ControlledMenuItem.prototype.componentDidMount = function () {
        document.addEventListener('keydown', this.onKeyDown, true);
    };
    ControlledMenuItem.prototype.componentWillUnmount = function () {
        document.removeEventListener('keydown', this.onKeyDown, true);
    };
    ControlledMenuItem.prototype.render = function () {
        var _a = this.props, MenuItemComponent = _a.MenuItemComponent, baseColor = _a.baseColor, iconName = _a.iconName, id = _a.id, isFocused = _a.isFocused, isSelected = _a.isSelected, label = _a.label, name = _a.name, secondaryLabel = _a.secondaryLabel, value = _a.value;
        return (jsx_runtime_1.jsxs(MenuItemComponent, __assign({}, __assign({ 'aria-selected': isSelected, alignItems: 'center', isFocused: isFocused, isSelected: isSelected, onClick: this.onSelect, onKeyPress: this.onKeyDown, role: 'option' }, this.props), { children: [jsx_runtime_1.jsx("input", __assign({}, { id: id, name: name, value: value, css: polished_1.hideVisually(), type: 'hidden' }), void 0), jsx_runtime_1.jsxs(Flex_1["default"], __assign({ width: "100%", justifyContent: "space-between" }, { children: [jsx_runtime_1.jsxs(Flex_1["default"], __assign({ flex: "1 0 auto", maxWidth: secondaryLabel ? "calc(100% - " + MIN_WIDTH + " - " + PADDING + ")" : '100%' }, { children: [iconName && (jsx_runtime_1.jsx(Icon_1["default"], { name: iconName, mr: "small", color: baseColor, fontSize: "16px" }, void 0)), jsx_runtime_1.jsx(Text_1["default"], __assign({ as: "span", color: "inherit", minWidth: MIN_WIDTH, fontSize: "size4", overflow: "hidden" }, { children: label }), void 0)] }), void 0), secondaryLabel && (jsx_runtime_1.jsx(Flex_1["default"], __assign({ pl: PADDING, overflow: "hidden", flex: "0 1 auto" }, { children: jsx_runtime_1.jsx(Text_1["default"], __assign({ as: "span", fontSize: "size3", css: function (theme) { return ({
                                    // Put primary and secondary labels on the same baseline
                                    lineHeight: theme.fontSizes.size4
                                }); }, color: "text.muted", maxWidth: "100%" }, { children: secondaryLabel }), void 0) }), void 0))] }), void 0)] }), void 0));
    };
    return ControlledMenuItem;
}(react_1.PureComponent));
ControlledMenuItem.propTypes = {
    /**
     * Base color to use for the menu item
     */
    baseColor: prop_types_1["default"].string,
    /**
     * Name of icon to use for the menu item
     */
    iconName: prop_types_1["default"].string,
    /**
     * HTML ID for the menu item
     */
    id: prop_types_1["default"].string.isRequired,
    /**
     * Whether or not the current menu item is focused
     */
    isFocused: prop_types_1["default"].bool,
    /**
     * Indicates whether or not the menu item is selected
     */
    isSelected: prop_types_1["default"].bool,
    /**
     * Main label text for the menu item
     */
    label: prop_types_1["default"].string.isRequired,
    /**
     * Component used to render each menu item
     */
    MenuItemComponent: prop_types_1["default"].elementType,
    /**
     * HTML input name property for the input field
     */
    name: prop_types_1["default"].string.isRequired,
    /**
     * Callback to run when a selection is made. This is generally intended for
     * internal use with the Menu component.
     */
    onSelect: prop_types_1["default"].func,
    /**
     * Secondary label text for the menu item
     */
    secondaryLabel: prop_types_1["default"].string,
    /**
     * HTML input value property for the input field
     */
    value: prop_types_1["default"].string.isRequired
};
ControlledMenuItem.defaultProps = {
    MenuItemComponent: MenuItem_1["default"],
    baseColor: 'text.default',
    iconName: null,
    isFocused: false,
    isSelected: false,
    onSelect: function () { return null; },
    secondaryLabel: null
};
exports["default"] = ControlledMenuItem;
