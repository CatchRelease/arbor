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
  tiny: 'size2'
};

var variantStyles = function variantStyles(_ref) {
  var theme = _ref.theme,
      variant = _ref.variant;
  return (
    /*#__PURE__*/
    (0, _core.css)("font-size:", theme.fontSizes[VARIANT_MAPPING[variant]], ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QYXJhZ3JhcGgvUGFyYWdyYXBoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlpRCIsImZpbGUiOiIuLi8uLi9zcmMvUGFyYWdyYXBoL1BhcmFncmFwaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFRleHQgZnJvbSAnLi4vVGV4dCc7XG5cbmNvbnN0IFZBUklBTlRfTUFQUElORyA9IHtcbiAgdWk6ICdzaXplNCcsXG4gIGxvbmdGb3JtOiAnc2l6ZTUnLFxuICB0aW55OiAnc2l6ZTInXG59O1xuXG5jb25zdCB2YXJpYW50U3R5bGVzID0gKHsgdGhlbWUsIHZhcmlhbnQgfSkgPT4gY3NzYFxuICBmb250LXNpemU6ICR7dGhlbWUuZm9udFNpemVzW1ZBUklBTlRfTUFQUElOR1t2YXJpYW50XV19O1xuYDtcblxuY29uc3QgUGFyYWdyYXBoID0gc3R5bGVkKFRleHQpYFxuICAke3ZhcmlhbnRTdHlsZXN9O1xuYDtcblxuUGFyYWdyYXBoLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFN0eWxlIHZhcmlhbnQuIFNlZSBzdG9yeWJvb2sgZm9yIGV4YW1wbGVzLlxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsndWknLCAnbG9uZ0Zvcm0nLCAndGlueSddKS5pc1JlcXVpcmVkXG59O1xuXG5QYXJhZ3JhcGguZGVmYXVsdFByb3BzID0ge1xuICBsaW5lSGVpZ2h0OiAnbGFyZ2UnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYXJhZ3JhcGg7XG4iXX0= */"))
  );
};

var Paragraph = (
/*#__PURE__*/
0, _styledBase["default"])(_Text["default"], {
  target: "eui2ovj0",
  label: "Paragraph"
})(variantStyles, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QYXJhZ3JhcGgvUGFyYWdyYXBoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCOEIiLCJmaWxlIjoiLi4vLi4vc3JjL1BhcmFncmFwaC9QYXJhZ3JhcGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBUZXh0IGZyb20gJy4uL1RleHQnO1xuXG5jb25zdCBWQVJJQU5UX01BUFBJTkcgPSB7XG4gIHVpOiAnc2l6ZTQnLFxuICBsb25nRm9ybTogJ3NpemU1JyxcbiAgdGlueTogJ3NpemUyJ1xufTtcblxuY29uc3QgdmFyaWFudFN0eWxlcyA9ICh7IHRoZW1lLCB2YXJpYW50IH0pID0+IGNzc2BcbiAgZm9udC1zaXplOiAke3RoZW1lLmZvbnRTaXplc1tWQVJJQU5UX01BUFBJTkdbdmFyaWFudF1dfTtcbmA7XG5cbmNvbnN0IFBhcmFncmFwaCA9IHN0eWxlZChUZXh0KWBcbiAgJHt2YXJpYW50U3R5bGVzfTtcbmA7XG5cblBhcmFncmFwaC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBTdHlsZSB2YXJpYW50LiBTZWUgc3Rvcnlib29rIGZvciBleGFtcGxlcy5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ3VpJywgJ2xvbmdGb3JtJywgJ3RpbnknXSkuaXNSZXF1aXJlZFxufTtcblxuUGFyYWdyYXBoLmRlZmF1bHRQcm9wcyA9IHtcbiAgbGluZUhlaWdodDogJ2xhcmdlJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFyYWdyYXBoO1xuIl19 */"));
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