"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(require("@emotion/styled/base"));

var _react = require("@emotion/react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Text = _interopRequireDefault(require("../Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var VARIANT_MAPPING = {
  ui: 'size4',
  longForm: 'size5',
  tiny: 'size3'
};

var variantStyles = function variantStyles(_ref) {
  var theme = _ref.theme,
      variant = _ref.variant,
      fontSize = _ref.fontSize;
  var fontSizeOverride = theme.fontSizes[fontSize] ? theme.fontSizes[fontSize] : fontSize;
  return /*#__PURE__*/(0, _react.css)("font-size:", fontSizeOverride || theme.fontSizes[VARIANT_MAPPING[variant]], ";;label:variantStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QYXJhZ3JhcGgvUGFyYWdyYXBoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCWSIsImZpbGUiOiIuLi8uLi9zcmMvUGFyYWdyYXBoL1BhcmFncmFwaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBUZXh0IGZyb20gJy4uL1RleHQnO1xuXG5jb25zdCBWQVJJQU5UX01BUFBJTkcgPSB7XG4gIHVpOiAnc2l6ZTQnLFxuICBsb25nRm9ybTogJ3NpemU1JyxcbiAgdGlueTogJ3NpemUzJ1xufTtcblxuY29uc3QgdmFyaWFudFN0eWxlcyA9ICh7IHRoZW1lLCB2YXJpYW50LCBmb250U2l6ZSB9KSA9PiB7XG4gIGNvbnN0IGZvbnRTaXplT3ZlcnJpZGUgPSB0aGVtZS5mb250U2l6ZXNbZm9udFNpemVdXG4gICAgPyB0aGVtZS5mb250U2l6ZXNbZm9udFNpemVdXG4gICAgOiBmb250U2l6ZTtcblxuICByZXR1cm4gY3NzYFxuICAgIGZvbnQtc2l6ZTogJHtmb250U2l6ZU92ZXJyaWRlIHx8IHRoZW1lLmZvbnRTaXplc1tWQVJJQU5UX01BUFBJTkdbdmFyaWFudF1dfTtcbiAgYDtcbn07XG5cbmNvbnN0IFBhcmFncmFwaCA9IHN0eWxlZChUZXh0KWBcbiAgJHt2YXJpYW50U3R5bGVzfTtcbmA7XG5cblBhcmFncmFwaC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBTdHlsZSB2YXJpYW50LiBTZWUgc3Rvcnlib29rIGZvciBleGFtcGxlcy5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ3VpJywgJ2xvbmdGb3JtJywgJ3RpbnknXSkuaXNSZXF1aXJlZFxufTtcblxuUGFyYWdyYXBoLmRlZmF1bHRQcm9wcyA9IHtcbiAgbGluZUhlaWdodDogJ2xhcmdlJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFyYWdyYXBoO1xuIl19 */"));
};

var Paragraph = ( /*#__PURE__*/0, _base["default"])(_Text["default"], {
  target: "eui2ovj0",
  label: "Paragraph"
})(variantStyles, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QYXJhZ3JhcGgvUGFyYWdyYXBoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCOEIiLCJmaWxlIjoiLi4vLi4vc3JjL1BhcmFncmFwaC9QYXJhZ3JhcGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgVGV4dCBmcm9tICcuLi9UZXh0JztcblxuY29uc3QgVkFSSUFOVF9NQVBQSU5HID0ge1xuICB1aTogJ3NpemU0JyxcbiAgbG9uZ0Zvcm06ICdzaXplNScsXG4gIHRpbnk6ICdzaXplMydcbn07XG5cbmNvbnN0IHZhcmlhbnRTdHlsZXMgPSAoeyB0aGVtZSwgdmFyaWFudCwgZm9udFNpemUgfSkgPT4ge1xuICBjb25zdCBmb250U2l6ZU92ZXJyaWRlID0gdGhlbWUuZm9udFNpemVzW2ZvbnRTaXplXVxuICAgID8gdGhlbWUuZm9udFNpemVzW2ZvbnRTaXplXVxuICAgIDogZm9udFNpemU7XG5cbiAgcmV0dXJuIGNzc2BcbiAgICBmb250LXNpemU6ICR7Zm9udFNpemVPdmVycmlkZSB8fCB0aGVtZS5mb250U2l6ZXNbVkFSSUFOVF9NQVBQSU5HW3ZhcmlhbnRdXX07XG4gIGA7XG59O1xuXG5jb25zdCBQYXJhZ3JhcGggPSBzdHlsZWQoVGV4dClgXG4gICR7dmFyaWFudFN0eWxlc307XG5gO1xuXG5QYXJhZ3JhcGgucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogU3R5bGUgdmFyaWFudC4gU2VlIHN0b3J5Ym9vayBmb3IgZXhhbXBsZXMuXG4gICAqL1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWyd1aScsICdsb25nRm9ybScsICd0aW55J10pLmlzUmVxdWlyZWRcbn07XG5cblBhcmFncmFwaC5kZWZhdWx0UHJvcHMgPSB7XG4gIGxpbmVIZWlnaHQ6ICdsYXJnZSdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhcmFncmFwaDtcbiJdfQ== */"));
Paragraph.propTypes = {
  /**
   * Style variant. See storybook for examples.
   */
  variant: _propTypes["default"].oneOf(['ui', 'longForm', 'tiny']).isRequired
};
Paragraph.defaultProps = {
  lineHeight: 'large'
};
var _default = Paragraph;
exports["default"] = _default;