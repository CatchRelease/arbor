"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Popover = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _polished = require("polished");

var _reactPopover = _interopRequireDefault(require("react-popover"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Box = _interopRequireDefault(require("./Box"));

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

var PopoverContent = (
/*#__PURE__*/
0, _styledBase.default)(_Box.default, {
  target: "eubejzp0",
  label: "PopoverContent"
})("background:", function (props) {
  return props.theme.colors.white;
}, ";border-radius:", function (props) {
  return props.theme.borderRadius.large;
}, ";box-shadow:0 4px 8px ", function (props) {
  return (0, _polished.transparentize)(0.9, props.theme.colors.black);
}, ",0 0 1px ", function (props) {
  return props.theme.colors.grey20;
}, ";min-height:40px;min-width:200px;overflow:hidden;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Qb3BvdmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVrQyIsImZpbGUiOiIuLi9zcmMvUG9wb3Zlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgdHJhbnNwYXJlbnRpemUgfSBmcm9tICdwb2xpc2hlZCc7XG5pbXBvcnQgUmVhY3RQb3BvdmVyIGZyb20gJ3JlYWN0LXBvcG92ZXInO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEJveCBmcm9tICcuL0JveCc7XG5cbmNvbnN0IFBvcG92ZXJDb250ZW50ID0gc3R5bGVkKEJveClgXG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfTtcbiAgYm9yZGVyLXJhZGl1czogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ib3JkZXJSYWRpdXMubGFyZ2V9O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHhcbiAgICAgICR7cHJvcHMgPT4gdHJhbnNwYXJlbnRpemUoMC45LCBwcm9wcy50aGVtZS5jb2xvcnMuYmxhY2spfSxcbiAgICAwIDAgMXB4ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmdyZXkyMH07XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5gO1xuXG5leHBvcnQgY2xhc3MgUG9wb3ZlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGlzT3BlbjogZmFsc2VcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMubm9kZSA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZU91dHNpZGVDbGljaywgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCB0aGlzLmhhbmRsZUtleWJvYXJkLCB0cnVlKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2ssIHRydWUpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgdGhpcy5oYW5kbGVLZXlib2FyZCwgdHJ1ZSk7XG4gIH1cblxuICBoYW5kbGVPdXRzaWRlQ2xpY2sgPSBlID0+IHtcbiAgICBjb25zdCB7IGlzT3BlbiB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmICghaXNPcGVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY3VycmVudFJlZiA9IHRoaXMubm9kZS5jdXJyZW50O1xuXG4gICAgaWYgKFxuICAgICAgIWN1cnJlbnRSZWYuY29udGFpbmVyRWwuY29udGFpbnMoZS50YXJnZXQpICYmXG4gICAgICAhY3VycmVudFJlZi50YXJnZXRFbC5jb250YWlucyhlLnRhcmdldClcbiAgICApIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlS2V5Ym9hcmQgPSBlID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9O1xuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbjogdHJ1ZSB9KTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIGNvbnN0IHsgb25DbG9zZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW46IGZhbHNlIH0sIG9uQ2xvc2UpO1xuICB9XG5cbiAgdG9nZ2xlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaXNPcGVuIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKGlzT3Blbikge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY29udGVudCxcbiAgICAgIHByZWZlclBsYWNlLFxuICAgICAgcGxhY2UsXG4gICAgICAuLi5wb3BvdmVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGlzT3BlbiB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IHN0eWxlZENvbnRlbnQgPSA8UG9wb3ZlckNvbnRlbnQ+e2NvbnRlbnR9PC9Qb3BvdmVyQ29udGVudD47XG5cbiAgICBjb25zdCB0cmlnZ2VyID0gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICBvbkNsaWNrOiB0aGlzLnRvZ2dsZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdFBvcG92ZXJcbiAgICAgICAgcmVmPXt0aGlzLm5vZGV9XG4gICAgICAgIGlzT3Blbj17aXNPcGVufVxuICAgICAgICBib2R5PXtzdHlsZWRDb250ZW50fVxuICAgICAgICBwcmVmZXJQbGFjZT17cHJlZmVyUGxhY2V9XG4gICAgICAgIHBsYWNlPXtwbGFjZX1cbiAgICAgICAgdGlwU2l6ZT17MC4wMX1cbiAgICAgICAgZW50ZXJFeGl0VHJhbnNpdGlvbkR1cmF0aW9uTXM9ezB9XG4gICAgICAgIHsuLi57IHBvcG92ZXJQcm9wcyB9fVxuICAgICAgPlxuICAgICAgICB7dHJpZ2dlcn1cbiAgICAgIDwvUmVhY3RQb3BvdmVyPlxuICAgICk7XG4gIH1cbn1cblxuUG9wb3Zlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBDb250ZW50IHRvIGRpc3BsYXkgd2l0aGluIHRoZSBQb3BvdmVyXG4gICAqL1xuICBjb250ZW50OiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBUaGUgdHJpZ2dlciB3aGljaCB3aWxsIG9wZW4gdGhlIHBvcG92ZXIgd2hlbiBpdCBpcyBjbGlja2VkLiBCeSBkZWZhdWx0LFxuICAgKiB0aGUgY2hpbGQgd2lsbCBiZSBjbG9uZWQgYW5kIGFuIG9uQ2xpY2sgaGFuZGxlciB3aWxsIGJlIGF0dGFjaGVkIHRvIG9wZW5cbiAgICogdGhlIHBvcG92ZXIgd2hlbiBpdCBpcyBjbGlja2VkLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIE9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBmaXJlZCBvbmNlIHRoZSBQb3BvdmVyJ3Mgc3RhdGUgaXMgc2V0IHRvIGNsb3NlZFxuICAgKi9cbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFByZWZlcnJlZCBsb2NhdGlvbiB0byBwbGFjZSB0aGUgcG9wb3ZlciB3aGVuIGl0J3Mgb3BlbmVkIGluIHRoZSBldmVudCB0aGF0XG4gICAqIHRoZXJlIGFyZSBtdWx0aXBsZSBhdmFpbGFibGUgYXJlYXMgd2hlcmUgdGhlIHBvcG92ZXIgd291bGQgZml0LiBUaGlzIGxpc3RcbiAgICogaXMgYmFzZWQgb2ZmIHRoZSBzdXBwb3J0ZWQgcGxhY2VzIHByb3ZpZGVkIGJ5IFtsaXR0bGViaXRzL3JlYWN0LXBvcG92ZXJdKGh0dHBzOi8vZ2l0aHViLmNvbS9saXR0bGViaXRzL3JlYWN0LXBvcG92ZXIjcHJlZmVycGxhY2UtLWVudW0tc3RyaW5nLS1udWxsKVxuICAgKi9cbiAgcHJlZmVyUGxhY2U6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgJ2Fib3ZlJyxcbiAgICAncmlnaHQnLFxuICAgICdiZWxvdycsXG4gICAgJ2xlZnQnLFxuICAgICdyb3cnLFxuICAgICdjb2x1bW4nLFxuICAgICdzdGFydCcsXG4gICAgJ2VuZCdcbiAgXSksXG5cbiAgLyoqXG4gICAqIFJlcXVpcmVkIGxvY2F0aW9uIG9yIHNjb3BlIHRvIHBsYWNlIHRoZSBwb3BvdmVyIHdoZW4gaXQncyBvcGVuZWQgaW4gdGhlIGV2ZW50IHRoYXRcbiAgICogdGhlcmUgYXJlIG11bHRpcGxlIGF2YWlsYWJsZSBhcmVhcyB3aGVyZSB0aGUgcG9wb3ZlciB3b3VsZCBmaXQuIFRoaXMgbGlzdFxuICAgKiBpcyBiYXNlZCBvZmYgdGhlIHN1cHBvcnRlZCBwbGFjZXMgcHJvdmlkZWQgYnkgW2xpdHRsZWJpdHMvcmVhY3QtcG9wb3Zlcl0oaHR0cHM6Ly9naXRodWIuY29tL2xpdHRsZWJpdHMvcmVhY3QtcG9wb3ZlciNjb2RlLXBsYWNlLXN0cmluZy1udWxsLWNvZGUpXG4gICAqL1xuICBwbGFjZTogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAnYWJvdmUnLFxuICAgICdyaWdodCcsXG4gICAgJ2JlbG93JyxcbiAgICAnbGVmdCcsXG4gICAgJ3JvdycsXG4gICAgJ2NvbHVtbicsXG4gICAgJ3N0YXJ0JyxcbiAgICAnZW5kJ1xuICBdKVxufTtcblxuUG9wb3Zlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHByZWZlclBsYWNlOiAnYmVsb3cnLFxuICBwbGFjZTogJ2NvbHVtbicsXG4gIG9uQ2xvc2U6ICgpID0+IG51bGxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvcG92ZXI7XG4iXX0= */"));

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
    value: function open() {
      this.setState({
        isOpen: true
      });
    }
  }, {
    key: "close",
    value: function close() {
      var onClose = this.props.onClose;
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
      var styledContent = (0, _core.jsx)(PopoverContent, null, content);

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

exports.Popover = Popover;
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
  onClose: function onClose() {
    return null;
  }
};
var _default = Popover;
exports.default = _default;