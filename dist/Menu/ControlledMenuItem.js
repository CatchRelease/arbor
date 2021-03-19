"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _polished = require("polished");

var _constants = require("../constants");

var _Flex = _interopRequireDefault(require("../Flex"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _MenuItem = _interopRequireDefault(require("../MenuItem"));

var _Text = _interopRequireDefault(require("../Text"));

var _jsxRuntime = require("@emotion/react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

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

var MIN_WIDTH = '120px';
var PADDING = '8px';

var ControlledMenuItem = /*#__PURE__*/function (_PureComponent) {
  _inherits(ControlledMenuItem, _PureComponent);

  var _super = _createSuper(ControlledMenuItem);

  function ControlledMenuItem() {
    var _this;

    _classCallCheck(this, ControlledMenuItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.onKeyDown = function (e) {
      var key = e.key;
      var isFocused = _this.props.isFocused;

      if (!isFocused) {
        return;
      }

      if (key === _constants.ENTER_KEY || key === _constants.SPACEBAR) {
        e.preventDefault();

        _this.onSelect();
      }
    };

    _this.onSelect = function () {
      var _this$props = _this.props,
          onSelect = _this$props.onSelect,
          value = _this$props.value;
      onSelect(value);
    };

    return _this;
  }

  _createClass(ControlledMenuItem, [{
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
      var _this$props2 = this.props,
          MenuItemComponent = _this$props2.MenuItemComponent,
          baseColor = _this$props2.baseColor,
          iconName = _this$props2.iconName,
          id = _this$props2.id,
          isFocused = _this$props2.isFocused,
          isSelected = _this$props2.isSelected,
          label = _this$props2.label,
          name = _this$props2.name,
          secondaryLabel = _this$props2.secondaryLabel,
          value = _this$props2.value;
      return (0, _jsxRuntime.jsxs)(MenuItemComponent, _objectSpread(_objectSpread({}, _objectSpread({
        'aria-selected': isSelected,
        alignItems: 'center',
        isFocused: isFocused,
        isSelected: isSelected,
        onClick: this.onSelect,
        onKeyPress: this.onKeyDown,
        role: 'option'
      }, this.props)), {}, {
        children: [(0, _jsxRuntime.jsx)("input", {
          id: id,
          name: name,
          value: value,
          css: (0, _polished.hideVisually)(),
          type: 'hidden'
        }), (0, _jsxRuntime.jsxs)(_Flex["default"], {
          width: "100%",
          justifyContent: "space-between",
          children: [(0, _jsxRuntime.jsxs)(_Flex["default"], {
            flex: "1 0 auto",
            maxWidth: secondaryLabel ? "calc(100% - ".concat(MIN_WIDTH, " - ").concat(PADDING, ")") : '100%',
            children: [iconName && (0, _jsxRuntime.jsx)(_Icon["default"], {
              name: iconName,
              mr: "small",
              color: baseColor,
              fontSize: "16px"
            }), (0, _jsxRuntime.jsx)(_Text["default"], {
              as: "span",
              color: "inherit",
              minWidth: MIN_WIDTH,
              fontSize: "size4",
              overflow: "hidden",
              children: label
            })]
          }), secondaryLabel && (0, _jsxRuntime.jsx)(_Flex["default"], {
            pl: PADDING,
            overflow: "hidden",
            flex: "0 1 auto",
            children: (0, _jsxRuntime.jsx)(_Text["default"], {
              as: "span",
              fontSize: "size3",
              css: function css(theme) {
                return {
                  // Put primary and secondary labels on the same baseline
                  lineHeight: theme.fontSizes.size4
                };
              },
              color: "text.muted",
              maxWidth: "100%",
              children: secondaryLabel
            })
          })]
        })]
      }));
    }
  }]);

  return ControlledMenuItem;
}(_react.PureComponent);

ControlledMenuItem.propTypes = {
  /**
   * Base color to use for the menu item
   */
  baseColor: _propTypes["default"].string,

  /**
   * Name of icon to use for the menu item
   */
  iconName: _propTypes["default"].string,

  /**
   * HTML ID for the menu item
   */
  id: _propTypes["default"].string.isRequired,

  /**
   * Whether or not the current menu item is focused
   */
  isFocused: _propTypes["default"].bool,

  /**
   * Indicates whether or not the menu item is selected
   */
  isSelected: _propTypes["default"].bool,

  /**
   * Main label text for the menu item
   */
  label: _propTypes["default"].string.isRequired,

  /**
   * Component used to render each menu item
   */
  MenuItemComponent: _propTypes["default"].elementType,

  /**
   * HTML input name property for the input field
   */
  name: _propTypes["default"].string.isRequired,

  /**
   * Callback to run when a selection is made. This is generally intended for
   * internal use with the Menu component.
   */
  onSelect: _propTypes["default"].func,

  /**
   * Secondary label text for the menu item
   */
  secondaryLabel: _propTypes["default"].string,

  /**
   * HTML input value property for the input field
   */
  value: _propTypes["default"].string.isRequired
};
ControlledMenuItem.defaultProps = {
  MenuItemComponent: _MenuItem["default"],
  baseColor: 'text.default',
  iconName: null,
  isFocused: false,
  isSelected: false,
  onSelect: function onSelect() {
    return null;
  },
  secondaryLabel: null
};
var _default = ControlledMenuItem;
exports["default"] = _default;