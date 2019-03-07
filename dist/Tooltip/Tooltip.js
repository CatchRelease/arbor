"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = require("react");

var _emotionTheming = require("emotion-theming");

var _propTypes = _interopRequireDefault(require("prop-types"));

require("react-tippy/dist/tippy.css");

var _reactTippy = require("react-tippy");

var _Text = _interopRequireDefault(require("../Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var globalTippyStyles = function globalTippyStyles(theme) {
  return (
    /*#__PURE__*/
    (0, _core.css)(".tippy-tooltip.arbor-theme{border-radius:", theme.radii.small, ";padding:0;}label:globalTippyStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Ub29sdGlwL1Rvb2x0aXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVXNDIiwiZmlsZSI6Ii4uLy4uL3NyYy9Ub29sdGlwL1Rvb2x0aXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IEdsb2JhbCwgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnZW1vdGlvbi10aGVtaW5nJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgJ3JlYWN0LXRpcHB5L2Rpc3QvdGlwcHkuY3NzJztcbmltcG9ydCB7IFRvb2x0aXAgYXMgVGlwcHlUb29sdGlwIH0gZnJvbSAncmVhY3QtdGlwcHknO1xuXG5pbXBvcnQgVGV4dCBmcm9tICcuLi9UZXh0JztcblxuY29uc3QgZ2xvYmFsVGlwcHlTdHlsZXMgPSB0aGVtZSA9PiBjc3NgXG4gIC50aXBweS10b29sdGlwLmFyYm9yLXRoZW1lIHtcbiAgICBib3JkZXItcmFkaXVzOiAke3RoZW1lLnJhZGlpLnNtYWxsfTtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5gO1xuXG5jb25zdCBUb29sdGlwID0gKHsgdGV4dCwgY2hpbGRyZW4sIHRoZW1lLCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHRvb2x0aXBUZXh0ID0gKFxuICAgIDxUZXh0XG4gICAgICB7Li4ue1xuICAgICAgICBweDogJ3NtYWxsZXInLFxuICAgICAgICBweTogJ3NtYWxsZXN0JyxcbiAgICAgICAgZm9udFNpemU6ICdzaXplNCcsXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICB0aGVtZVxuICAgICAgfX1cbiAgICA+XG4gICAgICB7dGV4dH1cbiAgICA8L1RleHQ+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8R2xvYmFsIHN0eWxlcz17Z2xvYmFsVGlwcHlTdHlsZXN9IC8+XG5cbiAgICAgIDxUaXBweVRvb2x0aXBcbiAgICAgICAgey4uLntcbiAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICB0aGVtZTogJ2FyYm9yJyxcbiAgICAgICAgICBhcnJvdzogdHJ1ZSxcbiAgICAgICAgICBodG1sOiB0b29sdGlwVGV4dCxcbiAgICAgICAgICBkaXN0YW5jZTogOCxcbiAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgIHVwZGF0ZUR1cmF0aW9uOiAwLFxuICAgICAgICAgIGFycm93U2l6ZTogJ3NtYWxsJyxcbiAgICAgICAgICBhbmltYXRpb246ICdmYWRlJyxcbiAgICAgICAgICBpbmVydGlhOiB0cnVlLFxuICAgICAgICAgIGFuaW1hdGVGaWxsOiBmYWxzZVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1RpcHB5VG9vbHRpcD5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuVG9vbHRpcC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUZXh0IHRvIGRpc3BsYXkgd2l0aGluIHRoZSB0b29sdGlwIHdoZW4gaXQgaXMgZGlzcGxheWVkXG4gICAqICovXG4gIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogTm9kZSB3aGljaCB3aWxsIHRyaWdnZXIgdGhlIHRvb2x0aXAuIFRoaXMgc2hvdWxkIGJlIGVpdGhlciBhbiBJY29uLCBCdXR0b24sXG4gICAqIG9yIExpbmsuXG4gICAqICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoVG9vbHRpcCk7XG4iXX0= */"))
  );
};

var Tooltip = function Tooltip(_ref) {
  var text = _ref.text,
      children = _ref.children,
      theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ["text", "children", "theme"]);

  var tooltipText = (0, _core.jsx)(_Text.default, {
    px: 'smaller',
    py: 'smallest',
    fontSize: 'size4',
    color: 'white',
    theme: theme
  }, text);
  return (0, _core.jsx)(_react.Fragment, null, (0, _core.jsx)(_core.Global, {
    styles: globalTippyStyles
  }), (0, _core.jsx)(_reactTippy.Tooltip, _objectSpread({}, props, {
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
  }), children));
};

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