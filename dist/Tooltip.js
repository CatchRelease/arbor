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

var _theme = require("./theme");

var _Text = _interopRequireDefault(require("./Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// eslint-disable-next-line no-unused-expressions
(0, _reactEmotion.injectGlobal)(".tippy-tooltip.arbor-theme{padding:0;border-radius:", _theme.borderRadius.small, ";}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Ub29sdGlwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdZIiwiZmlsZSI6Ii4uL3NyYy9Ub29sdGlwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGluamVjdEdsb2JhbCB9IGZyb20gJ3JlYWN0LWVtb3Rpb24nO1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnZW1vdGlvbi10aGVtaW5nJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgJ3JlYWN0LXRpcHB5L2Rpc3QvdGlwcHkuY3NzJztcbmltcG9ydCB7IFRvb2x0aXAgYXMgVGlwcHlUb29sdGlwIH0gZnJvbSAncmVhY3QtdGlwcHknO1xuXG5pbXBvcnQgeyBib3JkZXJSYWRpdXMgfSBmcm9tICcuL3RoZW1lJztcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dCc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbmluamVjdEdsb2JhbGBcbiAgLnRpcHB5LXRvb2x0aXAuYXJib3ItdGhlbWUge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogJHtib3JkZXJSYWRpdXMuc21hbGx9O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgVG9vbHRpcCA9ICh7IHRleHQsIHRoZW1lLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCB0b29sdGlwVGV4dCA9IChcbiAgICA8VGV4dFxuICAgICAgcHg9XCJzbWFsbGVyXCJcbiAgICAgIHB5PVwic21hbGxlc3RcIlxuICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgZm9udFNpemU9XCJzaXplMlwiXG4gICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICA+XG4gICAgICB7dGV4dH1cbiAgICA8L1RleHQ+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGlwcHlUb29sdGlwXG4gICAgICB7Li4ue1xuICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgdGhlbWU6ICdhcmJvcicsXG4gICAgICAgIGFycm93OiB0cnVlLFxuICAgICAgICBodG1sOiB0b29sdGlwVGV4dCxcbiAgICAgICAgZGlzdGFuY2U6IDgsXG4gICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgIHVwZGF0ZUR1cmF0aW9uOiAwLFxuICAgICAgICBhcnJvd1NpemU6ICdzbWFsbCcsXG4gICAgICAgIGFuaW1hdGlvbjogJ2ZhZGUnLFxuICAgICAgICBpbmVydGlhOiB0cnVlLFxuICAgICAgICBhbmltYXRlRmlsbDogZmFsc2VcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvVGlwcHlUb29sdGlwPlxuICApO1xufTtcblxuVG9vbHRpcC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUZXh0IHRvIGRpc3BsYXkgd2l0aGluIHRoZSB0b29sdGlwIHdoZW4gaXQgaXMgZGlzcGxheWVkXG4gICAqICovXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogTm9kZSB3aGljaCB3aWxsIHRyaWdnZXIgdGhlIHRvb2x0aXAuIFRoaXMgc2hvdWxkIGJlIGVpdGhlciBhbiBJY29uLCBCdXR0b24sXG4gICAqIG9yIExpbmsuXG4gICAqICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoVG9vbHRpcCk7XG4iXX0= */");

var Tooltip = function Tooltip(_ref) {
  var text = _ref.text,
      theme = _ref.theme,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["text", "theme", "children"]);

  var tooltipText = _react.default.createElement(_Text.default, {
    px: "smaller",
    py: "smallest",
    theme: theme,
    fontSize: "size2",
    color: "white"
  }, text);

  return _react.default.createElement(_reactTippy.Tooltip, _objectSpread({}, props, {
    theme: 'arbor',
    arrow: true,
    html: tooltipText,
    distance: 8,
    duration: 300,
    updateDuration: 0,
    arrowSize: 'small',
    animation: 'fade',
    inertia: true,
    animateFill: false
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