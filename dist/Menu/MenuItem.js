"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _polished = require("polished");

var _constants = require("../constants");

var _StyledMenuItem = _interopRequireDefault(require("./StyledMenuItem"));

var _Text = _interopRequireDefault(require("../Text"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MenuItem =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(MenuItem, _React$PureComponent);

  function MenuItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MenuItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MenuItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onKeyDown = function (e) {
      var key = e.key;
      var focused = _this.props.focused;

      if (!focused) {
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

  _createClass(MenuItem, [{
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
          selected = _this$props2.selected,
          baseColor = _this$props2.baseColor,
          id = _this$props2.id,
          label = _this$props2.label,
          name = _this$props2.name,
          value = _this$props2.value,
          focused = _this$props2.focused;
      return _react.default.createElement(_StyledMenuItem.default, {
        baseColor: baseColor,
        selected: selected,
        focused: focused,
        role: 'Menuitem',
        'aria-selected': selected,
        alignItems: 'center',
        height: '40px',
        onClick: this.onSelect,
        onKeyPress: this.onKeyDown
      }, _react.default.createElement("input", {
        id: id,
        name: name,
        value: value,
        css: (0, _polished.hideVisually)(),
        type: 'hidden'
      }), _react.default.createElement(_Icon.default, {
        name: "status",
        mr: "small",
        color: baseColor,
        fontSize: "16px"
      }), _react.default.createElement(_Text.default.span, {
        fontSize: "size2"
      }, label));
    }
  }]);

  return MenuItem;
}(_react.default.PureComponent);

MenuItem.propTypes = {
  /**
   * Indicates whether or not the menu item is selected
   */
  selected: _propTypes.default.bool,

  /**
   * Callback to run when a selection is made. This is generally intended for
   * internal use with the Menu component.
   */
  onSelect: _propTypes.default.func,

  /**
   * Label text for the menu item
   */
  label: _propTypes.default.string.isRequired,

  /**
   * HTML input name property for the input field
   */
  name: _propTypes.default.string.isRequired,

  /**
   * HTML input value property for the input field
   */
  value: _propTypes.default.string.isRequired,

  /**
   * Base color to use for the menu item
   */
  baseColor: _propTypes.default.oneOf(['blue', 'grey', 'green', 'red', 'bronze']).isRequired,

  /**
   * HTML ID for the menu item
   */
  id: _propTypes.default.string.isRequired,

  /**
   * Whether or not the current menu item is focused
   */
  focused: _propTypes.default.bool
};
MenuItem.defaultProps = {
  selected: false,
  onSelect: function onSelect() {
    return null;
  },
  focused: false
};
var _default = MenuItem;
exports.default = _default;