"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AccordionHeader = _interopRequireDefault(require("./AccordionHeader"));

var _AccordionPanel = _interopRequireDefault(require("./AccordionPanel"));

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

var AccordionSection =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AccordionSection, _React$Component);

  function AccordionSection() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AccordionSection);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AccordionSection)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      isOpen: false
    };

    _this.onHeaderClick = function () {
      var onHeaderClick = _this.props.onHeaderClick;

      if (!_this.isControlled) {
        _this.toggle();
      }

      onHeaderClick();
    };

    return _this;
  }

  _createClass(AccordionSection, [{
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
          panelId = _this$props.panelId;
      return _react.default.createElement("section", null, _react.default.createElement(_AccordionHeader.default, {
        isOpen: this.isOpen,
        note: headerNote,
        onClick: this.onHeaderClick,
        panelId: panelId,
        text: header
      }), _react.default.createElement(_AccordionPanel.default, {
        id: panelId,
        isOpen: this.isOpen
      }, children));
    }
  }, {
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
  }]);

  return AccordionSection;
}(_react.default.Component);

AccordionSection.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.arrayOf(_propTypes.default.node)]).isRequired,
  header: _propTypes.default.node.isRequired,
  headerNote: _propTypes.default.node,
  isOpen: _propTypes.default.bool,
  onHeaderClick: _propTypes.default.func,
  panelId: _propTypes.default.string.isRequired
};
AccordionSection.defaultProps = {
  isOpen: undefined,
  headerNote: null,
  onHeaderClick: function onHeaderClick() {}
};
var _default = AccordionSection;
exports.default = _default;