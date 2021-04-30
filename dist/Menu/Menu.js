"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _snakeCase = _interopRequireDefault(require("lodash/snakeCase"));

var _constants = require("../constants");

var _ControlledMenuItem = _interopRequireDefault(require("./ControlledMenuItem"));

var _MenuItem = _interopRequireDefault(require("../MenuItem"));

var _StyledMenu = _interopRequireDefault(require("./StyledMenu"));

var _jsxRuntime = require("@emotion/react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var NAVIGATION_KEYS = [_constants.ARROW_UP, _constants.ARROW_DOWN];

var Menu = /*#__PURE__*/function (_Component) {
  _inherits(Menu, _Component);

  var _super = _createSuper(Menu);

  function Menu(props) {
    var _this;

    _classCallCheck(this, Menu);

    _this = _super.call(this, props);

    _this.onMenuItemSelect = function (value) {
      var onChange = _this.props.onChange;

      _this.setState({
        selected: value
      }, function () {
        return onChange(value);
      });
    };

    _this.onKeyDown = function (_ref) {
      var key = _ref.key;
      var currentlyFocused = _this.state.currentlyFocused;
      var menuItems = _this.props.menuItems;

      if (NAVIGATION_KEYS.includes(key) && currentlyFocused === null) {
        _this.focusMenuItem(0);
      } else if (key === _constants.HOME_KEY) {
        _this.focusMenuItem(0);
      } else if (key === _constants.END_KEY) {
        _this.focusMenuItem(menuItems.length - 1);
      } else if (key === _constants.ARROW_DOWN) {
        _this.focusNextMenuItem();
      } else if (key === _constants.ARROW_UP) {
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

  _createClass(Menu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keydown', this.onKeyDown, true);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.onKeyDown, true);
    }
  }, {
    key: "currentlyFocused",
    get: function get() {
      var currentlyFocused = this.state.currentlyFocused;
      var menuItems = this.props.menuItems;
      var focusedMenuItem = menuItems[currentlyFocused];
      return this.domIdForMenuItem(focusedMenuItem);
    }
  }, {
    key: "domIdForMenuItem",
    value: function domIdForMenuItem(menuItem) {
      if (menuItem === undefined) return undefined;
      var name = this.props.name;
      var label = menuItem.label;
      return "menu-item_".concat(name, "_").concat((0, _snakeCase["default"])(label));
    }
  }, {
    key: "focusNextMenuItem",
    value: function focusNextMenuItem() {
      var menuItems = this.props.menuItems;
      var currentlyFocused = this.state.currentlyFocused;
      var nextFocus = currentlyFocused + 1;

      if (nextFocus < menuItems.length) {
        this.focusMenuItem(nextFocus);
      }
    }
  }, {
    key: "focusPreviousMenuItem",
    value: function focusPreviousMenuItem() {
      var currentlyFocused = this.state.currentlyFocused;

      if (currentlyFocused > 0) {
        var previousFocus = currentlyFocused - 1;
        this.focusMenuItem(previousFocus);
      }
    }
  }, {
    key: "focusMenuItem",
    value: function focusMenuItem(menuItem) {
      this.setState({
        currentlyFocused: menuItem
      });
    }
  }, {
    key: "renderMenuItems",
    value: function renderMenuItems() {
      var _this2 = this;

      var menuItems = this.props.menuItems;
      return menuItems.map(function (menuItem, index) {
        return _this2.renderMenuItem(menuItem, index);
      });
    }
  }, {
    key: "renderMenuItem",
    value: function renderMenuItem(menuItem, index) {
      var _this$state = this.state,
          currentlyFocused = _this$state.currentlyFocused,
          selected = _this$state.selected;
      var _this$props = this.props,
          name = _this$props.name,
          MenuItemComponent = _this$props.MenuItemComponent;
      var isSelected = menuItem.value === selected;
      var id = this.domIdForMenuItem(menuItem);
      var isFocused = index === currentlyFocused;
      return (0, _jsxRuntime.jsx)(_ControlledMenuItem["default"], _objectSpread({}, _objectSpread({
        id: id,
        isFocused: isFocused,
        isSelected: isSelected,
        key: id,
        MenuItemComponent: MenuItemComponent,
        name: name,
        onSelect: this.onMenuItemSelect
      }, menuItem)));
    }
  }, {
    key: "render",
    value: function render() {
      var currentlyFocused = this.currentlyFocused;
      return (0, _jsxRuntime.jsx)(_StyledMenu["default"], {
        role: "listbox",
        "aria-activedescendant": currentlyFocused,
        flexDirection: "column",
        children: this.renderMenuItems()
      });
    }
  }]);

  return Menu;
}(_react.Component);

Menu.propTypes = {
  /**
   * Array of menu item objects to render as MenuItems in the Menu
   */
  menuItems: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    baseColor: _propTypes["default"].string,
    label: _propTypes["default"].string,
    name: _propTypes["default"].string,
    value: _propTypes["default"].string
  })).isRequired,

  /**
   * Component used to render each menu item
   */
  MenuItemComponent: _propTypes["default"].elementType,

  /**
   * Name of the menu for grouping the menu item DOM IDs
   */
  name: _propTypes["default"].string.isRequired,

  /**
   * Callback to run when a menu item is selected
   */
  onChange: _propTypes["default"].func,

  /**
   * Initial selected menu item value
   */
  selected: _propTypes["default"].string
};
Menu.defaultProps = {
  MenuItemComponent: _MenuItem["default"],
  onChange: function onChange() {
    return null;
  },
  selected: undefined
};
var _default = Menu;
exports["default"] = _default;