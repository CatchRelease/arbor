"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AccordionHeader = _interopRequireDefault(require("./AccordionHeader"));

var _AccordionPanel = _interopRequireDefault(require("./AccordionPanel"));

var _variants = _interopRequireDefault(require("./variants"));

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

var AccordionSection = /*#__PURE__*/function (_React$Component) {
  _inherits(AccordionSection, _React$Component);

  var _super = _createSuper(AccordionSection);

  function AccordionSection(props) {
    var _this;

    _classCallCheck(this, AccordionSection);

    _this = _super.call(this, props);

    _this.onHeaderClick = function () {
      var onHeaderClick = _this.props.onHeaderClick;

      if (!_this.isControlled) {
        _this.toggle();
      }

      onHeaderClick();
    };

    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(AccordionSection, [{
    key: "isControlled",
    get: function get() {
      var isOpen = this.props.isOpen;
      return isOpen !== undefined;
    }
  }, {
    key: "isOpen",
    get: function get() {
      var controlledIsOpen = this.props.isOpen;
      var internalIsOpen = this.state.isOpen;
      return this.isControlled ? controlledIsOpen : internalIsOpen;
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          header = _this$props.header,
          headerNote = _this$props.headerNote,
          panelId = _this$props.panelId,
          onHeaderClick = _this$props.onHeaderClick,
          isOpen = _this$props.isOpen,
          variant = _this$props.variant,
          props = _objectWithoutProperties(_this$props, ["children", "header", "headerNote", "panelId", "onHeaderClick", "isOpen", "variant"]);

      return (0, _jsxRuntime.jsxs)("section", {
        children: [(0, _jsxRuntime.jsx)(_AccordionHeader["default"], _objectSpread({
          isOpen: this.isOpen,
          note: headerNote,
          onClick: this.onHeaderClick,
          panelId: panelId,
          text: header,
          variant: variant
        }, props)), (0, _jsxRuntime.jsx)(_AccordionPanel["default"], {
          id: panelId,
          isOpen: this.isOpen,
          variant: variant,
          children: children
        })]
      });
    }
  }]);

  return AccordionSection;
}(_react["default"].Component);

AccordionSection.propTypes = {
  /**
   * Content to render inside the opened accordion
   * */
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].arrayOf(_propTypes["default"].node)]).isRequired,

  /**
   * Content to display within the AccordionHeader component
   */
  header: _propTypes["default"].node.isRequired,

  /**
   * Note to render within the AccordionHeader component
   */
  headerNote: _propTypes["default"].node,

  /**
   * Manually specify whether or not the accordion is open or not. If it is not
   * provided, then the accordion section will maintain it's own open state.
   * When the component is uncontrolled, clicking the header will open the
   * accordion section.
   */
  isOpen: _propTypes["default"].bool,

  /**
   * Callback function to call when the AccordionHeader component is clicked.
   */
  onHeaderClick: _propTypes["default"].func,

  /**
   * HTML id attribute for the AccordionPanel component. Used in conjunction
   * with the AccordionHeader for the aria-controls attribute.
   */
  panelId: _propTypes["default"].string.isRequired,

  /**
   * Link variant for styling. See storybook for examples.
   */
  variant: _propTypes["default"].oneOf(_variants["default"])
};
AccordionSection.defaultProps = {
  isOpen: undefined,
  headerNote: null,
  onHeaderClick: function onHeaderClick() {},
  variant: 'default'
};
var _default = AccordionSection;
exports["default"] = _default;