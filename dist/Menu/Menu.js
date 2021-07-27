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
var snakeCase_1 = __importDefault(require("lodash/snakeCase"));
var constants_1 = require("../constants");
var ControlledMenuItem_1 = __importDefault(require("./ControlledMenuItem"));
var MenuItem_1 = __importDefault(require("../MenuItem"));
var StyledMenu_1 = __importDefault(require("./StyledMenu"));
var NAVIGATION_KEYS = [constants_1.ARROW_UP, constants_1.ARROW_DOWN];
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu(props) {
        var _this = _super.call(this, props) || this;
        _this.onMenuItemSelect = function (value) {
            var onChange = _this.props.onChange;
            _this.setState({ selected: value }, function () { return onChange(value); });
        };
        _this.onKeyDown = function (_a) {
            var key = _a.key;
            var currentlyFocused = _this.state.currentlyFocused;
            var menuItems = _this.props.menuItems;
            if (NAVIGATION_KEYS.includes(key) && currentlyFocused === null) {
                _this.focusMenuItem(0);
            }
            else if (key === constants_1.HOME_KEY) {
                _this.focusMenuItem(0);
            }
            else if (key === constants_1.END_KEY) {
                _this.focusMenuItem(menuItems.length - 1);
            }
            else if (key === constants_1.ARROW_DOWN) {
                _this.focusNextMenuItem();
            }
            else if (key === constants_1.ARROW_UP) {
                _this.focusPreviousMenuItem();
            }
        };
        var selected = _this.props.selected;
        _this.state = {
            currentlyFocused: null,
            selected: selected
        };
        return _this;
    }
    Menu.prototype.componentDidMount = function () {
        document.addEventListener('keydown', this.onKeyDown, true);
    };
    Menu.prototype.componentWillUnmount = function () {
        document.removeEventListener('keydown', this.onKeyDown, true);
    };
    Object.defineProperty(Menu.prototype, "currentlyFocused", {
        get: function () {
            var currentlyFocused = this.state.currentlyFocused;
            var menuItems = this.props.menuItems;
            var focusedMenuItem = menuItems[currentlyFocused];
            return this.domIdForMenuItem(focusedMenuItem);
        },
        enumerable: false,
        configurable: true
    });
    Menu.prototype.domIdForMenuItem = function (menuItem) {
        if (menuItem === undefined)
            return undefined;
        var name = this.props.name;
        var label = menuItem.label;
        return "menu-item_" + name + "_" + snakeCase_1["default"](label);
    };
    Menu.prototype.focusNextMenuItem = function () {
        var menuItems = this.props.menuItems;
        var currentlyFocused = this.state.currentlyFocused;
        var nextFocus = currentlyFocused + 1;
        if (nextFocus < menuItems.length) {
            this.focusMenuItem(nextFocus);
        }
    };
    Menu.prototype.focusPreviousMenuItem = function () {
        var currentlyFocused = this.state.currentlyFocused;
        if (currentlyFocused > 0) {
            var previousFocus = currentlyFocused - 1;
            this.focusMenuItem(previousFocus);
        }
    };
    Menu.prototype.focusMenuItem = function (menuItem) {
        this.setState({ currentlyFocused: menuItem });
    };
    Menu.prototype.renderMenuItems = function () {
        var _this = this;
        var menuItems = this.props.menuItems;
        return menuItems.map(function (menuItem, index) {
            return _this.renderMenuItem(menuItem, index);
        });
    };
    Menu.prototype.renderMenuItem = function (menuItem, index) {
        var _a = this.state, currentlyFocused = _a.currentlyFocused, selected = _a.selected;
        var _b = this.props, name = _b.name, MenuItemComponent = _b.MenuItemComponent;
        var isSelected = menuItem.value === selected;
        var id = this.domIdForMenuItem(menuItem);
        var isFocused = index === currentlyFocused;
        return (jsx_runtime_1.jsx(ControlledMenuItem_1["default"], __assign({}, __assign({ id: id, isFocused: isFocused, isSelected: isSelected, key: id, MenuItemComponent: MenuItemComponent, name: name, onSelect: this.onMenuItemSelect }, menuItem)), void 0));
    };
    Menu.prototype.render = function () {
        var currentlyFocused = this.currentlyFocused;
        return (jsx_runtime_1.jsx(StyledMenu_1["default"], __assign({ role: "listbox", "aria-activedescendant": currentlyFocused, flexDirection: "column" }, { children: this.renderMenuItems() }), void 0));
    };
    return Menu;
}(react_1.Component));
Menu.propTypes = {
    /**
     * Array of menu item objects to render as MenuItems in the Menu
     */
    menuItems: prop_types_1["default"].arrayOf(prop_types_1["default"].shape({
        baseColor: prop_types_1["default"].string,
        label: prop_types_1["default"].string,
        name: prop_types_1["default"].string,
        value: prop_types_1["default"].string
    })).isRequired,
    /**
     * Component used to render each menu item
     */
    MenuItemComponent: prop_types_1["default"].elementType,
    /**
     * Name of the menu for grouping the menu item DOM IDs
     */
    name: prop_types_1["default"].string.isRequired,
    /**
     * Callback to run when a menu item is selected
     */
    onChange: prop_types_1["default"].func,
    /**
     * Initial selected menu item value
     */
    selected: prop_types_1["default"].string
};
Menu.defaultProps = {
    MenuItemComponent: MenuItem_1["default"],
    onChange: function () { return null; },
    selected: undefined
};
exports["default"] = Menu;
