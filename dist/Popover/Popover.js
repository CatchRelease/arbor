"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _reactPopover = _interopRequireDefault(require("react-popover"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PopoverContent = _interopRequireDefault(require("./PopoverContent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Popover =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Popover, _React$Component);

  function Popover(props) {
    var _this;

    _classCallCheck(this, Popover);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Popover).call(this, props));
    _this.state = {
      isOpen: false
    };

    _this.handleOutsideClick = function (e) {
      var isOpen = _this.state.isOpen;

      if (!isOpen) {
        return;
      }

      var currentRef = _this.node.current;

      if (!currentRef.containerEl.contains(e.target) && !currentRef.targetEl.contains(e.target)) {
        _this.close();
      }
    };

    _this.handleKeyboard = function (e) {
      if (e.key === 'Escape') {
        _this.close();
      }
    };

    _this.toggle = function () {
      var isOpen = _this.state.isOpen;

      if (isOpen) {
        _this.close();
      } else {
        _this.open();
      }
    };

    _this.node = _react.default.createRef();
    return _this;
  }

  _createClass(Popover, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('click', this.handleOutsideClick, true);
      document.addEventListener('keypress', this.handleKeyboard, true);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.handleOutsideClick, true);
      document.removeEventListener('keypress', this.handleKeyboard, true);
    }
  }, {
    key: "open",
    value: function open(callback) {
      var onOpen = this.props.onOpen;
      var isOpen = this.state.isOpen;

      if (isOpen) {
        return;
      }

      this.setState({
        isOpen: true
      }, function () {
        if (callback) {
          callback();
        }

        onOpen();
      });
    }
  }, {
    key: "close",
    value: function close() {
      var onClose = this.props.onClose;
      var isOpen = this.state.isOpen;

      if (!isOpen) {
        return;
      }

      this.setState({
        isOpen: false
      }, onClose);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          content = _this$props.content,
          preferPlace = _this$props.preferPlace,
          place = _this$props.place,
          popoverProps = _objectWithoutProperties(_this$props, ["children", "content", "preferPlace", "place"]);

      var isOpen = this.state.isOpen;
      var styledContent = (0, _core.jsx)(_PopoverContent.default, null, content);

      var trigger = _react.default.cloneElement(children, {
        onClick: this.toggle
      });

      return (0, _core.jsx)(_reactPopover.default, _extends({
        ref: this.node,
        isOpen: isOpen,
        body: styledContent,
        preferPlace: preferPlace,
        place: place,
        tipSize: 0.01,
        enterExitTransitionDurationMs: 0
      }, {
        popoverProps: popoverProps
      }), trigger);
    }
  }]);

  return Popover;
}(_react.default.Component);

Popover.propTypes = {
  /**
   * Content to display within the Popover
   */
  content: _propTypes.default.node.isRequired,

  /**
   * The trigger which will open the popover when it is clicked. By default,
   * the child will be cloned and an onClick handler will be attached to open
   * the popover when it is clicked.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * Optional callback that will be fired once the Popover's state is set to opened
   */
  onOpen: _propTypes.default.func,

  /**
   * Optional callback that will be fired once the Popover's state is set to closed
   */
  onClose: _propTypes.default.func,

  /**
   * Preferred location to place the popover when it's opened in the event that
   * there are multiple available areas where the popover would fit. This list
   * is based off the supported places provided by [littlebits/react-popover](https://github.com/littlebits/react-popover#preferplace--enum-string--null)
   */
  preferPlace: _propTypes.default.oneOf(['above', 'right', 'below', 'left', 'row', 'column', 'start', 'end']),

  /**
   * Required location or scope to place the popover when it's opened in the event that
   * there are multiple available areas where the popover would fit. This list
   * is based off the supported places provided by [littlebits/react-popover](https://github.com/littlebits/react-popover#code-place-string-null-code)
   */
  place: _propTypes.default.oneOf(['above', 'right', 'below', 'left', 'row', 'column', 'start', 'end'])
};
Popover.defaultProps = {
  preferPlace: 'below',
  place: 'column',
  onOpen: function onOpen() {
    return null;
  },
  onClose: function onClose() {
    return null;
  }
};
var _default = Popover;
exports.default = _default;