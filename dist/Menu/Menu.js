"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const snakeCase_1 = __importDefault(require("lodash/snakeCase"));
const constants_1 = require("../constants");
const ControlledMenuItem_1 = __importDefault(require("./ControlledMenuItem"));
const MenuItem_1 = __importDefault(require("../MenuItem"));
const StyledMenu_1 = __importDefault(require("./StyledMenu"));
const NAVIGATION_KEYS = [constants_1.ARROW_UP, constants_1.ARROW_DOWN];
class Menu extends react_1.Component {
    constructor(props) {
        super(props);
        this.onMenuItemSelect = (value) => {
            const { onChange } = this.props;
            this.setState({ selected: value }, () => onChange(value));
        };
        this.onKeyDown = ({ key }) => {
            const { currentlyFocused } = this.state;
            const { menuItems } = this.props;
            if (NAVIGATION_KEYS.includes(key) && currentlyFocused === null) {
                this.focusMenuItem(0);
            }
            else if (key === constants_1.HOME_KEY) {
                this.focusMenuItem(0);
            }
            else if (key === constants_1.END_KEY) {
                this.focusMenuItem(menuItems.length - 1);
            }
            else if (key === constants_1.ARROW_DOWN) {
                this.focusNextMenuItem();
            }
            else if (key === constants_1.ARROW_UP) {
                this.focusPreviousMenuItem();
            }
        };
        const { selected } = this.props;
        this.state = {
            currentlyFocused: null,
            selected
        };
    }
    componentDidMount() {
        document.addEventListener('keydown', this.onKeyDown, true);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.onKeyDown, true);
    }
    get currentlyFocused() {
        const { currentlyFocused } = this.state;
        const { menuItems } = this.props;
        const focusedMenuItem = menuItems[currentlyFocused];
        return this.domIdForMenuItem(focusedMenuItem);
    }
    domIdForMenuItem(menuItem) {
        if (menuItem === undefined)
            return undefined;
        const { name } = this.props;
        const { label } = menuItem;
        return `menu-item_${name}_${(0, snakeCase_1.default)(label)}`;
    }
    focusNextMenuItem() {
        const { menuItems } = this.props;
        const { currentlyFocused } = this.state;
        const nextFocus = currentlyFocused + 1;
        if (nextFocus < menuItems.length) {
            this.focusMenuItem(nextFocus);
        }
    }
    focusPreviousMenuItem() {
        const { currentlyFocused } = this.state;
        if (currentlyFocused > 0) {
            const previousFocus = currentlyFocused - 1;
            this.focusMenuItem(previousFocus);
        }
    }
    focusMenuItem(menuItem) {
        this.setState({ currentlyFocused: menuItem });
    }
    renderMenuItems() {
        const { menuItems } = this.props;
        return menuItems.map((menuItem, index) => this.renderMenuItem(menuItem, index));
    }
    renderMenuItem(menuItem, index) {
        const { currentlyFocused, selected } = this.state;
        const { name, MenuItemComponent } = this.props;
        const isSelected = menuItem.value === selected;
        const id = this.domIdForMenuItem(menuItem);
        const isFocused = index === currentlyFocused;
        return ((0, jsx_runtime_1.jsx)(ControlledMenuItem_1.default, Object.assign({}, Object.assign({ id,
            isFocused,
            isSelected, key: id, MenuItemComponent,
            name, onSelect: this.onMenuItemSelect }, menuItem)), void 0));
    }
    render() {
        const { currentlyFocused } = this;
        return ((0, jsx_runtime_1.jsx)(StyledMenu_1.default, Object.assign({ role: "listbox", "aria-activedescendant": currentlyFocused, flexDirection: "column" }, { children: this.renderMenuItems() }), void 0));
    }
}
Menu.propTypes = {
    /**
     * Array of menu item objects to render as MenuItems in the Menu
     */
    menuItems: prop_types_1.default.arrayOf(prop_types_1.default.shape({
        baseColor: prop_types_1.default.string,
        label: prop_types_1.default.string,
        name: prop_types_1.default.string,
        value: prop_types_1.default.string
    })).isRequired,
    /**
     * Component used to render each menu item
     */
    MenuItemComponent: prop_types_1.default.elementType,
    /**
     * Name of the menu for grouping the menu item DOM IDs
     */
    name: prop_types_1.default.string.isRequired,
    /**
     * Callback to run when a menu item is selected
     */
    onChange: prop_types_1.default.func,
    /**
     * Initial selected menu item value
     */
    selected: prop_types_1.default.string
};
Menu.defaultProps = {
    MenuItemComponent: MenuItem_1.default,
    onChange: () => null,
    selected: undefined
};
exports.default = Menu;
