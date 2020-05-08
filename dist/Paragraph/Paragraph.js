"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _core = require("@emotion/core");

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
  return /*#__PURE__*/(0, _core.css)("font-size:", fontSizeOverride || theme.fontSizes[VARIANT_MAPPING[variant]], ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QYXJhZ3JhcGgvUGFyYWdyYXBoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCWSIsImZpbGUiOiIuLi8uLi9zcmMvUGFyYWdyYXBoL1BhcmFncmFwaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFRleHQgZnJvbSAnLi4vVGV4dCc7XG5cbmNvbnN0IFZBUklBTlRfTUFQUElORyA9IHtcbiAgdWk6ICdzaXplNCcsXG4gIGxvbmdGb3JtOiAnc2l6ZTUnLFxuICB0aW55OiAnc2l6ZTMnXG59O1xuXG5jb25zdCB2YXJpYW50U3R5bGVzID0gKHsgdGhlbWUsIHZhcmlhbnQsIGZvbnRTaXplIH0pID0+IHtcbiAgY29uc3QgZm9udFNpemVPdmVycmlkZSA9IHRoZW1lLmZvbnRTaXplc1tmb250U2l6ZV1cbiAgICA/IHRoZW1lLmZvbnRTaXplc1tmb250U2l6ZV1cbiAgICA6IGZvbnRTaXplO1xuXG4gIHJldHVybiBjc3NgXG4gICAgZm9udC1zaXplOiAke2ZvbnRTaXplT3ZlcnJpZGUgfHwgdGhlbWUuZm9udFNpemVzW1ZBUklBTlRfTUFQUElOR1t2YXJpYW50XV19O1xuICBgO1xufTtcblxuY29uc3QgUGFyYWdyYXBoID0gc3R5bGVkKFRleHQpYFxuICAke3ZhcmlhbnRTdHlsZXN9O1xuYDtcblxuUGFyYWdyYXBoLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFN0eWxlIHZhcmlhbnQuIFNlZSBzdG9yeWJvb2sgZm9yIGV4YW1wbGVzLlxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsndWknLCAnbG9uZ0Zvcm0nLCAndGlueSddKS5pc1JlcXVpcmVkXG59O1xuXG5QYXJhZ3JhcGguZGVmYXVsdFByb3BzID0ge1xuICBsaW5lSGVpZ2h0OiAnbGFyZ2UnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYXJhZ3JhcGg7XG4iXX0= */"));
};

var Paragraph = ( /*#__PURE__*/0, _styledBase["default"])(_Text["default"], {
  target: "eui2ovj0",
  label: "Paragraph"
})(variantStyles, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QYXJhZ3JhcGgvUGFyYWdyYXBoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCOEIiLCJmaWxlIjoiLi4vLi4vc3JjL1BhcmFncmFwaC9QYXJhZ3JhcGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBUZXh0IGZyb20gJy4uL1RleHQnO1xuXG5jb25zdCBWQVJJQU5UX01BUFBJTkcgPSB7XG4gIHVpOiAnc2l6ZTQnLFxuICBsb25nRm9ybTogJ3NpemU1JyxcbiAgdGlueTogJ3NpemUzJ1xufTtcblxuY29uc3QgdmFyaWFudFN0eWxlcyA9ICh7IHRoZW1lLCB2YXJpYW50LCBmb250U2l6ZSB9KSA9PiB7XG4gIGNvbnN0IGZvbnRTaXplT3ZlcnJpZGUgPSB0aGVtZS5mb250U2l6ZXNbZm9udFNpemVdXG4gICAgPyB0aGVtZS5mb250U2l6ZXNbZm9udFNpemVdXG4gICAgOiBmb250U2l6ZTtcblxuICByZXR1cm4gY3NzYFxuICAgIGZvbnQtc2l6ZTogJHtmb250U2l6ZU92ZXJyaWRlIHx8IHRoZW1lLmZvbnRTaXplc1tWQVJJQU5UX01BUFBJTkdbdmFyaWFudF1dfTtcbiAgYDtcbn07XG5cbmNvbnN0IFBhcmFncmFwaCA9IHN0eWxlZChUZXh0KWBcbiAgJHt2YXJpYW50U3R5bGVzfTtcbmA7XG5cblBhcmFncmFwaC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBTdHlsZSB2YXJpYW50LiBTZWUgc3Rvcnlib29rIGZvciBleGFtcGxlcy5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ3VpJywgJ2xvbmdGb3JtJywgJ3RpbnknXSkuaXNSZXF1aXJlZFxufTtcblxuUGFyYWdyYXBoLmRlZmF1bHRQcm9wcyA9IHtcbiAgbGluZUhlaWdodDogJ2xhcmdlJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFyYWdyYXBoO1xuIl19 */"));
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