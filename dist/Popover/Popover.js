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

var _Card = _interopRequireDefault(require("../Card"));

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
  target: "elmxmjv0",
  label: "PopoverContent"
})("background:", function (props) {
  return props.theme.colors.white;
}, ";border-radius:", function (props) {
  return props.theme.borderRadius.large;
}, ";box-shadow:0 4px 8px ", function (props) {
  return (0, _polished.transparentize)(0.9, props.theme.colors.black);
}, ",0 0 1px ", function (props) {
  return props.theme.colors.grey20;
}, ";min-height:40px;min-width:200px;overflow:hidden;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Qb3BvdmVyL1BvcG92ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVW1DIiwiZmlsZSI6Ii4uLy4uL3NyYy9Qb3BvdmVyL1BvcG92ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IHRyYW5zcGFyZW50aXplIH0gZnJvbSAncG9saXNoZWQnO1xuaW1wb3J0IFJlYWN0UG9wb3ZlciBmcm9tICdyZWFjdC1wb3BvdmVyJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBDYXJkIGZyb20gJy4uL0NhcmQnO1xuXG5jb25zdCBQb3BvdmVyQ29udGVudCA9IHN0eWxlZChDYXJkKWBcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGV9O1xuICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJvcmRlclJhZGl1cy5sYXJnZX07XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweFxuICAgICAgJHtwcm9wcyA9PiB0cmFuc3BhcmVudGl6ZSgwLjksIHByb3BzLnRoZW1lLmNvbG9ycy5ibGFjayl9LFxuICAgIDAgMCAxcHggJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZ3JleTIwfTtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbmA7XG5cbmNsYXNzIFBvcG92ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBpc09wZW46IGZhbHNlXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLm5vZGUgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVPdXRzaWRlQ2xpY2ssIHRydWUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgdGhpcy5oYW5kbGVLZXlib2FyZCwgdHJ1ZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlT3V0c2lkZUNsaWNrLCB0cnVlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIHRoaXMuaGFuZGxlS2V5Ym9hcmQsIHRydWUpO1xuICB9XG5cbiAgaGFuZGxlT3V0c2lkZUNsaWNrID0gZSA9PiB7XG4gICAgY29uc3QgeyBpc09wZW4gfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoIWlzT3Blbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnRSZWYgPSB0aGlzLm5vZGUuY3VycmVudDtcblxuICAgIGlmIChcbiAgICAgICFjdXJyZW50UmVmLmNvbnRhaW5lckVsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJlxuICAgICAgIWN1cnJlbnRSZWYudGFyZ2V0RWwuY29udGFpbnMoZS50YXJnZXQpXG4gICAgKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUtleWJvYXJkID0gZSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfTtcblxuICBvcGVuKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgeyBvbk9wZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBpc09wZW4gfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoaXNPcGVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbjogdHJ1ZSB9LCAoKSA9PiB7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cblxuICAgICAgb25PcGVuKCk7XG4gICAgfSk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICBjb25zdCB7IG9uQ2xvc2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBpc09wZW4gfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoIWlzT3Blbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW46IGZhbHNlIH0sIG9uQ2xvc2UpO1xuICB9XG5cbiAgdG9nZ2xlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaXNPcGVuIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKGlzT3Blbikge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY29udGVudCxcbiAgICAgIHByZWZlclBsYWNlLFxuICAgICAgcGxhY2UsXG4gICAgICAuLi5wb3BvdmVyUHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGlzT3BlbiB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IHN0eWxlZENvbnRlbnQgPSA8UG9wb3ZlckNvbnRlbnQ+e2NvbnRlbnR9PC9Qb3BvdmVyQ29udGVudD47XG5cbiAgICBjb25zdCB0cmlnZ2VyID0gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICBvbkNsaWNrOiB0aGlzLnRvZ2dsZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdFBvcG92ZXJcbiAgICAgICAgcmVmPXt0aGlzLm5vZGV9XG4gICAgICAgIGlzT3Blbj17aXNPcGVufVxuICAgICAgICBib2R5PXtzdHlsZWRDb250ZW50fVxuICAgICAgICBwcmVmZXJQbGFjZT17cHJlZmVyUGxhY2V9XG4gICAgICAgIHBsYWNlPXtwbGFjZX1cbiAgICAgICAgdGlwU2l6ZT17MC4wMX1cbiAgICAgICAgZW50ZXJFeGl0VHJhbnNpdGlvbkR1cmF0aW9uTXM9ezB9XG4gICAgICAgIHsuLi57IHBvcG92ZXJQcm9wcyB9fVxuICAgICAgPlxuICAgICAgICB7dHJpZ2dlcn1cbiAgICAgIDwvUmVhY3RQb3BvdmVyPlxuICAgICk7XG4gIH1cbn1cblxuUG9wb3Zlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBDb250ZW50IHRvIGRpc3BsYXkgd2l0aGluIHRoZSBQb3BvdmVyXG4gICAqL1xuICBjb250ZW50OiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBUaGUgdHJpZ2dlciB3aGljaCB3aWxsIG9wZW4gdGhlIHBvcG92ZXIgd2hlbiBpdCBpcyBjbGlja2VkLiBCeSBkZWZhdWx0LFxuICAgKiB0aGUgY2hpbGQgd2lsbCBiZSBjbG9uZWQgYW5kIGFuIG9uQ2xpY2sgaGFuZGxlciB3aWxsIGJlIGF0dGFjaGVkIHRvIG9wZW5cbiAgICogdGhlIHBvcG92ZXIgd2hlbiBpdCBpcyBjbGlja2VkLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIE9wdGlvbmFsIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBmaXJlZCBvbmNlIHRoZSBQb3BvdmVyJ3Mgc3RhdGUgaXMgc2V0IHRvIG9wZW5lZFxuICAgKi9cbiAgb25PcGVuOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogT3B0aW9uYWwgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGZpcmVkIG9uY2UgdGhlIFBvcG92ZXIncyBzdGF0ZSBpcyBzZXQgdG8gY2xvc2VkXG4gICAqL1xuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogUHJlZmVycmVkIGxvY2F0aW9uIHRvIHBsYWNlIHRoZSBwb3BvdmVyIHdoZW4gaXQncyBvcGVuZWQgaW4gdGhlIGV2ZW50IHRoYXRcbiAgICogdGhlcmUgYXJlIG11bHRpcGxlIGF2YWlsYWJsZSBhcmVhcyB3aGVyZSB0aGUgcG9wb3ZlciB3b3VsZCBmaXQuIFRoaXMgbGlzdFxuICAgKiBpcyBiYXNlZCBvZmYgdGhlIHN1cHBvcnRlZCBwbGFjZXMgcHJvdmlkZWQgYnkgW2xpdHRsZWJpdHMvcmVhY3QtcG9wb3Zlcl0oaHR0cHM6Ly9naXRodWIuY29tL2xpdHRsZWJpdHMvcmVhY3QtcG9wb3ZlciNwcmVmZXJwbGFjZS0tZW51bS1zdHJpbmctLW51bGwpXG4gICAqL1xuICBwcmVmZXJQbGFjZTogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAnYWJvdmUnLFxuICAgICdyaWdodCcsXG4gICAgJ2JlbG93JyxcbiAgICAnbGVmdCcsXG4gICAgJ3JvdycsXG4gICAgJ2NvbHVtbicsXG4gICAgJ3N0YXJ0JyxcbiAgICAnZW5kJ1xuICBdKSxcblxuICAvKipcbiAgICogUmVxdWlyZWQgbG9jYXRpb24gb3Igc2NvcGUgdG8gcGxhY2UgdGhlIHBvcG92ZXIgd2hlbiBpdCdzIG9wZW5lZCBpbiB0aGUgZXZlbnQgdGhhdFxuICAgKiB0aGVyZSBhcmUgbXVsdGlwbGUgYXZhaWxhYmxlIGFyZWFzIHdoZXJlIHRoZSBwb3BvdmVyIHdvdWxkIGZpdC4gVGhpcyBsaXN0XG4gICAqIGlzIGJhc2VkIG9mZiB0aGUgc3VwcG9ydGVkIHBsYWNlcyBwcm92aWRlZCBieSBbbGl0dGxlYml0cy9yZWFjdC1wb3BvdmVyXShodHRwczovL2dpdGh1Yi5jb20vbGl0dGxlYml0cy9yZWFjdC1wb3BvdmVyI2NvZGUtcGxhY2Utc3RyaW5nLW51bGwtY29kZSlcbiAgICovXG4gIHBsYWNlOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdhYm92ZScsXG4gICAgJ3JpZ2h0JyxcbiAgICAnYmVsb3cnLFxuICAgICdsZWZ0JyxcbiAgICAncm93JyxcbiAgICAnY29sdW1uJyxcbiAgICAnc3RhcnQnLFxuICAgICdlbmQnXG4gIF0pXG59O1xuXG5Qb3BvdmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgcHJlZmVyUGxhY2U6ICdiZWxvdycsXG4gIHBsYWNlOiAnY29sdW1uJyxcbiAgb25PcGVuOiAoKSA9PiBudWxsLFxuICBvbkNsb3NlOiAoKSA9PiBudWxsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3BvdmVyO1xuIl19 */"));

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