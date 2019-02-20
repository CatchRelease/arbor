"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _polished = require("polished");

var _reactPopover = _interopRequireDefault(require("react-popover"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Card = _interopRequireDefault(require("./Card"));

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
0, _styledBase.default)(_Card.default, {
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
}, ";min-height:40px;min-width:200px;overflow:hidden;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Qb3BvdmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVtQyIsImZpbGUiOiIuLi9zcmMvUG9wb3Zlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgdHJhbnNwYXJlbnRpemUgfSBmcm9tICdwb2xpc2hlZCc7XG5pbXBvcnQgUmVhY3RQb3BvdmVyIGZyb20gJ3JlYWN0LXBvcG92ZXInO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IENhcmQgZnJvbSAnLi9DYXJkJztcblxuY29uc3QgUG9wb3ZlckNvbnRlbnQgPSBzdHlsZWQoQ2FyZClgXG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfTtcbiAgYm9yZGVyLXJhZGl1czogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ib3JkZXJSYWRpdXMubGFyZ2V9O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHhcbiAgICAgICR7cHJvcHMgPT4gdHJhbnNwYXJlbnRpemUoMC45LCBwcm9wcy50aGVtZS5jb2xvcnMuYmxhY2spfSxcbiAgICAwIDAgMXB4ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmdyZXkyMH07XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5gO1xuXG5jbGFzcyBQb3BvdmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgaXNPcGVuOiBmYWxzZVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5ub2RlID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrLCB0cnVlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIHRoaXMuaGFuZGxlS2V5Ym9hcmQsIHRydWUpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZU91dHNpZGVDbGljaywgdHJ1ZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCB0aGlzLmhhbmRsZUtleWJvYXJkLCB0cnVlKTtcbiAgfVxuXG4gIGhhbmRsZU91dHNpZGVDbGljayA9IGUgPT4ge1xuICAgIGNvbnN0IHsgaXNPcGVuIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKCFpc09wZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50UmVmID0gdGhpcy5ub2RlLmN1cnJlbnQ7XG5cbiAgICBpZiAoXG4gICAgICAhY3VycmVudFJlZi5jb250YWluZXJFbC5jb250YWlucyhlLnRhcmdldCkgJiZcbiAgICAgICFjdXJyZW50UmVmLnRhcmdldEVsLmNvbnRhaW5zKGUudGFyZ2V0KVxuICAgICkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVLZXlib2FyZCA9IGUgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH07XG5cbiAgb3BlbihjYWxsYmFjaykge1xuICAgIGNvbnN0IHsgb25PcGVuIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgaXNPcGVuIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKGlzT3Blbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW46IHRydWUgfSwgKCkgPT4ge1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG5cbiAgICAgIG9uT3BlbigpO1xuICAgIH0pO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgY29uc3QgeyBvbkNsb3NlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgaXNPcGVuIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKCFpc09wZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuOiBmYWxzZSB9LCBvbkNsb3NlKTtcbiAgfVxuXG4gIHRvZ2dsZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGlzT3BlbiB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmIChpc09wZW4pIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIGNvbnRlbnQsXG4gICAgICBwcmVmZXJQbGFjZSxcbiAgICAgIHBsYWNlLFxuICAgICAgLi4ucG9wb3ZlclByb3BzXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBpc09wZW4gfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCBzdHlsZWRDb250ZW50ID0gPFBvcG92ZXJDb250ZW50Pntjb250ZW50fTwvUG9wb3ZlckNvbnRlbnQ+O1xuXG4gICAgY29uc3QgdHJpZ2dlciA9IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgICAgb25DbGljazogdGhpcy50b2dnbGVcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3RQb3BvdmVyXG4gICAgICAgIHJlZj17dGhpcy5ub2RlfVxuICAgICAgICBpc09wZW49e2lzT3Blbn1cbiAgICAgICAgYm9keT17c3R5bGVkQ29udGVudH1cbiAgICAgICAgcHJlZmVyUGxhY2U9e3ByZWZlclBsYWNlfVxuICAgICAgICBwbGFjZT17cGxhY2V9XG4gICAgICAgIHRpcFNpemU9ezAuMDF9XG4gICAgICAgIGVudGVyRXhpdFRyYW5zaXRpb25EdXJhdGlvbk1zPXswfVxuICAgICAgICB7Li4ueyBwb3BvdmVyUHJvcHMgfX1cbiAgICAgID5cbiAgICAgICAge3RyaWdnZXJ9XG4gICAgICA8L1JlYWN0UG9wb3Zlcj5cbiAgICApO1xuICB9XG59XG5cblBvcG92ZXIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQ29udGVudCB0byBkaXNwbGF5IHdpdGhpbiB0aGUgUG9wb3ZlclxuICAgKi9cbiAgY29udGVudDogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogVGhlIHRyaWdnZXIgd2hpY2ggd2lsbCBvcGVuIHRoZSBwb3BvdmVyIHdoZW4gaXQgaXMgY2xpY2tlZC4gQnkgZGVmYXVsdCxcbiAgICogdGhlIGNoaWxkIHdpbGwgYmUgY2xvbmVkIGFuZCBhbiBvbkNsaWNrIGhhbmRsZXIgd2lsbCBiZSBhdHRhY2hlZCB0byBvcGVuXG4gICAqIHRoZSBwb3BvdmVyIHdoZW4gaXQgaXMgY2xpY2tlZC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBPcHRpb25hbCBjYWxsYmFjayB0aGF0IHdpbGwgYmUgZmlyZWQgb25jZSB0aGUgUG9wb3ZlcidzIHN0YXRlIGlzIHNldCB0byBvcGVuZWRcbiAgICovXG4gIG9uT3BlbjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIE9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBmaXJlZCBvbmNlIHRoZSBQb3BvdmVyJ3Mgc3RhdGUgaXMgc2V0IHRvIGNsb3NlZFxuICAgKi9cbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFByZWZlcnJlZCBsb2NhdGlvbiB0byBwbGFjZSB0aGUgcG9wb3ZlciB3aGVuIGl0J3Mgb3BlbmVkIGluIHRoZSBldmVudCB0aGF0XG4gICAqIHRoZXJlIGFyZSBtdWx0aXBsZSBhdmFpbGFibGUgYXJlYXMgd2hlcmUgdGhlIHBvcG92ZXIgd291bGQgZml0LiBUaGlzIGxpc3RcbiAgICogaXMgYmFzZWQgb2ZmIHRoZSBzdXBwb3J0ZWQgcGxhY2VzIHByb3ZpZGVkIGJ5IFtsaXR0bGViaXRzL3JlYWN0LXBvcG92ZXJdKGh0dHBzOi8vZ2l0aHViLmNvbS9saXR0bGViaXRzL3JlYWN0LXBvcG92ZXIjcHJlZmVycGxhY2UtLWVudW0tc3RyaW5nLS1udWxsKVxuICAgKi9cbiAgcHJlZmVyUGxhY2U6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgJ2Fib3ZlJyxcbiAgICAncmlnaHQnLFxuICAgICdiZWxvdycsXG4gICAgJ2xlZnQnLFxuICAgICdyb3cnLFxuICAgICdjb2x1bW4nLFxuICAgICdzdGFydCcsXG4gICAgJ2VuZCdcbiAgXSksXG5cbiAgLyoqXG4gICAqIFJlcXVpcmVkIGxvY2F0aW9uIG9yIHNjb3BlIHRvIHBsYWNlIHRoZSBwb3BvdmVyIHdoZW4gaXQncyBvcGVuZWQgaW4gdGhlIGV2ZW50IHRoYXRcbiAgICogdGhlcmUgYXJlIG11bHRpcGxlIGF2YWlsYWJsZSBhcmVhcyB3aGVyZSB0aGUgcG9wb3ZlciB3b3VsZCBmaXQuIFRoaXMgbGlzdFxuICAgKiBpcyBiYXNlZCBvZmYgdGhlIHN1cHBvcnRlZCBwbGFjZXMgcHJvdmlkZWQgYnkgW2xpdHRsZWJpdHMvcmVhY3QtcG9wb3Zlcl0oaHR0cHM6Ly9naXRodWIuY29tL2xpdHRsZWJpdHMvcmVhY3QtcG9wb3ZlciNjb2RlLXBsYWNlLXN0cmluZy1udWxsLWNvZGUpXG4gICAqL1xuICBwbGFjZTogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAnYWJvdmUnLFxuICAgICdyaWdodCcsXG4gICAgJ2JlbG93JyxcbiAgICAnbGVmdCcsXG4gICAgJ3JvdycsXG4gICAgJ2NvbHVtbicsXG4gICAgJ3N0YXJ0JyxcbiAgICAnZW5kJ1xuICBdKVxufTtcblxuUG9wb3Zlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHByZWZlclBsYWNlOiAnYmVsb3cnLFxuICBwbGFjZTogJ2NvbHVtbicsXG4gIG9uT3BlbjogKCkgPT4gbnVsbCxcbiAgb25DbG9zZTogKCkgPT4gbnVsbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9wb3ZlcjtcbiJdfQ== */"));

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