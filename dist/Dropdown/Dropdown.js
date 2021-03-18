"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("../Button"));

var _Menu = _interopRequireDefault(require("../Menu"));

var _MenuItem = _interopRequireDefault(require("../MenuItem"));

var _Popover = _interopRequireDefault(require("../Popover"));

var _constants = require("../constants");

var _jsxRuntime = require("@emotion/react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

var Dropdown = /*#__PURE__*/function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  var _super = _createSuper(Dropdown);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _super.call(this, props);

    _this.onOpen = function () {
      _this.menu.current.focusMenuItem(0);
    };

    _this.onKeyDown = function (e) {
      var key = e.key;

      if (document.activeElement !== _this.button.current) {
        return;
      }

      if (key !== _constants.ARROW_DOWN) {
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

    _this.popover = /*#__PURE__*/_react["default"].createRef();
    _this.button = /*#__PURE__*/_react["default"].createRef();
    _this.menu = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }

  _createClass(Dropdown, [{
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
    key: "render",
    value: function render() {
      var _this$props = this.props,
          MenuItemComponent = _this$props.MenuItemComponent,
          TriggerComponent = _this$props.TriggerComponent,
          children = _this$props.children,
          menuItems = _this$props.menuItems,
          popoverProps = _this$props.popoverProps,
          selected = _this$props.selected,
          props = _objectWithoutProperties(_this$props, ["MenuItemComponent", "TriggerComponent", "children", "menuItems", "popoverProps", "selected"]);

      var isOpen = this.popover.current && this.popover.current.state.isOpen;
      var menu = (0, _jsxRuntime.jsx)(_Menu["default"], {
        MenuItemComponent: MenuItemComponent,
        onChange: this.onChange,
        ref: this.menu,
        menuItems: menuItems,
        name: props.name,
        selected: selected
      });
      return (0, _jsxRuntime.jsx)(_Popover["default"], _objectSpread(_objectSpread({
        ref: this.popover,
        content: menu
      }, popoverProps), {}, {
        children: (0, _jsxRuntime.jsx)(TriggerComponent, _objectSpread(_objectSpread({
          ref: this.button,
          "aria-haspopup": true,
          "aria-expanded": isOpen
        }, props), {}, {
          children: children
        }))
      }));
    }
  }]);

  return Dropdown;
}(_react["default"].Component);

Dropdown.propTypes = {
  /**
   * The content inside the menu button trigger
   */
  children: _propTypes["default"].node.isRequired,

  /**
   * Component used to render each menu item
   */
  MenuItemComponent: _propTypes["default"].elementType,

  /**
   * Array of menu item objects to render as MenuItems in the Menu
   */
  menuItems: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    baseColor: _propTypes["default"].string,
    label: _propTypes["default"].string,
    value: _propTypes["default"].string
  })).isRequired,

  /**
   * Name of the dropdown's menu for grouping the menu item DOM IDs
   */
  name: _propTypes["default"].string.isRequired,

  /**
   * Callback to run when a dropdown menu item is selected
   */
  onChange: _propTypes["default"].func,

  /**
   * Props to be passed to the popover component/
   */
  popoverProps: _propTypes["default"].object,
  // eslint-disable-line react/forbid-prop-types

  /**
   * Initial selected menu item value
   */
  selected: _propTypes["default"].string,

  /**
   * Component used to render dropdown trigger
   */
  TriggerComponent: _propTypes["default"].elementType
};
Dropdown.defaultProps = {
  MenuItemComponent: _MenuItem["default"],
  TriggerComponent: _Button["default"],
  onChange: function onChange() {
    return null;
  },
  popoverProps: {},
  selected: undefined
};
var _default = Dropdown;
exports["default"] = _default;