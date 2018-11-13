"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Tooltip = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactEmotion = require("react-emotion");

var _emotionTheming = require("emotion-theming");

var _propTypes = _interopRequireDefault(require("prop-types"));

require("react-tippy/dist/tippy.css");

var _reactTippy = require("react-tippy");

var _Paragraph = _interopRequireDefault(require("./Paragraph"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// eslint-disable-next-line no-unused-expressions
(0, _reactEmotion.injectGlobal)(".tippy-tooltip.arbor-theme{padding:0;}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Ub29sdGlwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVZIiwiZmlsZSI6Ii4uL3NyYy9Ub29sdGlwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGluamVjdEdsb2JhbCB9IGZyb20gJ3JlYWN0LWVtb3Rpb24nO1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnZW1vdGlvbi10aGVtaW5nJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgJ3JlYWN0LXRpcHB5L2Rpc3QvdGlwcHkuY3NzJztcbmltcG9ydCB7IFRvb2x0aXAgYXMgVGlwcHlUb29sdGlwIH0gZnJvbSAncmVhY3QtdGlwcHknO1xuXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gJy4vUGFyYWdyYXBoJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuaW5qZWN0R2xvYmFsYFxuICAudGlwcHktdG9vbHRpcC5hcmJvci10aGVtZSB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFRvb2x0aXAgPSAoeyB0ZXh0LCB0aGVtZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcbiAgY29uc3QgdG9vbHRpcFRleHQgPSAoXG4gICAgPFBhcmFncmFwaFxuICAgICAgcHg9XCJzbWFsbGVyXCJcbiAgICAgIHB5PVwic21hbGxlc3RcIlxuICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgdmFyaWFudD1cInRpbnlcIlxuICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgPlxuICAgICAge3RleHR9XG4gICAgPC9QYXJhZ3JhcGg+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGlwcHlUb29sdGlwXG4gICAgICB7Li4ue1xuICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgdGhlbWU6ICdhcmJvcicsXG4gICAgICAgIGFycm93OiB0cnVlLFxuICAgICAgICBodG1sOiB0b29sdGlwVGV4dFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9UaXBweVRvb2x0aXA+XG4gICk7XG59O1xuXG5Ub29sdGlwLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRleHQgdG8gZGlzcGxheSB3aXRoaW4gdGhlIHRvb2x0aXAgd2hlbiBpdCBpcyBkaXNwbGF5ZWRcbiAgICogKi9cbiAgdGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBOb2RlIHdoaWNoIHdpbGwgdHJpZ2dlciB0aGUgdG9vbHRpcC4gVGhpcyBzaG91bGQgYmUgZWl0aGVyIGFuIEljb24sIEJ1dHRvbixcbiAgICogb3IgTGluay5cbiAgICogKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShUb29sdGlwKTtcbiJdfQ== */");

var Tooltip = function Tooltip(_ref) {
  var text = _ref.text,
      theme = _ref.theme,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["text", "theme", "children"]);

  var tooltipText = _react.default.createElement(_Paragraph.default, {
    px: "smaller",
    py: "smallest",
    theme: theme,
    variant: "tiny",
    color: "white"
  }, text);

  return _react.default.createElement(_reactTippy.Tooltip, _objectSpread({}, props, {
    theme: 'arbor',
    arrow: true,
    html: tooltipText
  }), children);
};

exports.Tooltip = Tooltip;
Tooltip.propTypes = {
  /**
   * Text to display within the tooltip when it is displayed
   * */
  text: _propTypes.default.string.isRequired,

  /**
   * Node which will trigger the tooltip. This should be either an Icon, Button,
   * or Link.
   * */
  children: _propTypes.default.element.isRequired
};

var _default = (0, _emotionTheming.withTheme)(Tooltip);

exports.default = _default;