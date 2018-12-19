"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _snakeCase = _interopRequireDefault(require("lodash/snakeCase"));

var _constants = require("../constants");

var _StyledMenu = _interopRequireDefault(require("./StyledMenu"));

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var NAVIGATION_KEYS = [_constants.ARROW_UP, _constants.ARROW_DOWN];

function domIdForMenuItem(menuItem) {
  if (menuItem === undefined) {
    return undefined;
  }

  var name = menuItem.name,
      label = menuItem.label;
  return "menu-item_".concat(name, "_").concat((0, _snakeCase.default)(label));
}

var Menu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu(props) {
    var _this;

    _classCallCheck(this, Menu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Menu).call(this, props));

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
      var currentlyFocused = this.state.currentlyFocused;
      var selected = this.state.selected;
      var isSelected = menuItem.value === selected;
      var id = domIdForMenuItem(menuItem);
      var focused = index === currentlyFocused;
      return _react.default.createElement(_MenuItem.default, _objectSpread({}, menuItem, {
        id: id,
        focused: focused,
        selected: isSelected,
        key: menuItem.label,
        onSelect: this.onMenuItemSelect
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var currentlyFocused = this.currentlyFocused;
      return _react.default.createElement(_StyledMenu.default, {
        role: "menu",
        "aria-activedescendant": currentlyFocused,
        flexDirection: "column"
      }, this.renderMenuItems());
    }
  }, {
    key: "currentlyFocused",
    get: function get() {
      var currentlyFocused = this.state.currentlyFocused;
      var menuItems = this.props.menuItems;
      var focusedMenuItem = menuItems[currentlyFocused];
      return domIdForMenuItem(focusedMenuItem);
    }
  }]);

  return Menu;
}(_react.default.Component);

Menu.propTypes = {
  /**
   * Callback to run when a menu item is selected
   */
  onChange: _propTypes.default.func,

  /**
   * Array of menu item objects to render as MenuItems in the Menu
   */
  menuItems: _propTypes.default.arrayOf(_propTypes.default.shape({
    baseColor: _propTypes.default.string,
    label: _propTypes.default.string,
    name: _propTypes.default.string,
    value: _propTypes.default.string
  })).isRequired
};
Menu.defaultProps = {
  onChange: function onChange() {
    return null;
  }
};
var _default = Menu;
exports.default = _default;