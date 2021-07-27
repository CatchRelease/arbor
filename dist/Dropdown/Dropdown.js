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
exports.__esModule = true;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var Button_1 = __importDefault(require("../Button"));
var Menu_1 = __importDefault(require("../Menu"));
var MenuItem_1 = __importDefault(require("../MenuItem"));
var Popover_1 = __importDefault(require("../Popover"));
var constants_1 = require("../constants");
var Dropdown = /** @class */ (function (_super) {
    __extends(Dropdown, _super);
    function Dropdown(props) {
        var _this = _super.call(this, props) || this;
        _this.onOpen = function () {
            _this.menu.current.focusMenuItem(0);
        };
        _this.onKeyDown = function (e) {
            var key = e.key;
            if (document.activeElement !== _this.button.current) {
                return;
            }
            if (key !== constants_1.ARROW_DOWN) {
                return;
            }
            e.preventDefault();
            _this.popover.current.open(_this.onOpen);
        };
        _this.onChange = function (value) {
            var onChange = _this.props.onChange;
            _this.popover.current.close();
            onChange(value);
        };
        _this.popover = react_1.createRef();
        _this.button = react_1.createRef();
        _this.menu = react_1.createRef();
        return _this;
    }
    Dropdown.prototype.componentDidMount = function () {
        document.addEventListener('keydown', this.onKeyDown, true);
    };
    Dropdown.prototype.componentWillUnmount = function () {
        document.removeEventListener('keydown', this.onKeyDown, true);
    };
    Dropdown.prototype.render = function () {
        var _a = this.props, MenuItemComponent = _a.MenuItemComponent, TriggerComponent = _a.TriggerComponent, children = _a.children, menuItems = _a.menuItems, popoverProps = _a.popoverProps, selected = _a.selected, props = __rest(_a, ["MenuItemComponent", "TriggerComponent", "children", "menuItems", "popoverProps", "selected"]);
        var isOpen = this.popover.current && this.popover.current.state.isOpen;
        var menu = (jsx_runtime_1.jsx(Menu_1["default"], __assign({ MenuItemComponent: MenuItemComponent, onChange: this.onChange, ref: this.menu }, { menuItems: menuItems, name: props.name, selected: selected }), void 0));
        return (jsx_runtime_1.jsx(Popover_1["default"], __assign({ ref: this.popover, content: menu }, popoverProps, { children: jsx_runtime_1.jsx(TriggerComponent, __assign({ ref: this.button, "aria-haspopup": true, "aria-expanded": isOpen }, props, { children: children }), void 0) }), void 0));
    };
    return Dropdown;
}(react_1.Component));
Dropdown.propTypes = {
    /**
     * The content inside the menu button trigger
     */
    children: prop_types_1["default"].node.isRequired,
    /**
     * Component used to render each menu item
     */
    MenuItemComponent: prop_types_1["default"].elementType,
    /**
     * Array of menu item objects to render as MenuItems in the Menu
     */
    menuItems: prop_types_1["default"].arrayOf(prop_types_1["default"].shape({
        baseColor: prop_types_1["default"].string,
        label: prop_types_1["default"].string,
        value: prop_types_1["default"].string
    })).isRequired,
    /**
     * Name of the dropdown's menu for grouping the menu item DOM IDs
     */
    name: prop_types_1["default"].string.isRequired,
    /**
     * Callback to run when a dropdown menu item is selected
     */
    onChange: prop_types_1["default"].func,
    /**
     * Props to be passed to the popover component/
     */
    popoverProps: prop_types_1["default"].object,
    /**
     * Initial selected menu item value
     */
    selected: prop_types_1["default"].string,
    /**
     * Component used to render dropdown trigger
     */
    TriggerComponent: prop_types_1["default"].elementType
};
Dropdown.defaultProps = {
    MenuItemComponent: MenuItem_1["default"],
    TriggerComponent: Button_1["default"],
    onChange: function () { return null; },
    popoverProps: {},
    selected: undefined
};
exports["default"] = Dropdown;
