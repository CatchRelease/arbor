"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _core = require("@emotion/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _createWithComponent = _interopRequireDefault(require("../utils/createWithComponent"));

var _Text = _interopRequireDefault(require("../Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var variantStyles = function variantStyles(_ref) {
  var theme = _ref.theme,
      variant = _ref.variant;
  return (
    /*#__PURE__*/
    (0, _core.css)("font-size:", theme.typography.text[variant].fontSize, ";label:variantStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QYXJhZ3JhcGgvUGFyYWdyYXBoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9pRCIsImZpbGUiOiIuLi8uLi9zcmMvUGFyYWdyYXBoL1BhcmFncmFwaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IGNyZWF0ZVdpdGhDb21wb25lbnQgZnJvbSAnLi4vdXRpbHMvY3JlYXRlV2l0aENvbXBvbmVudCc7XG5pbXBvcnQgVGV4dCBmcm9tICcuLi9UZXh0JztcblxuY29uc3QgdmFyaWFudFN0eWxlcyA9ICh7IHRoZW1lLCB2YXJpYW50IH0pID0+IGNzc2BcbiAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkudGV4dFt2YXJpYW50XS5mb250U2l6ZX07XG5gO1xuXG5jb25zdCBQYXJhZ3JhcGggPSBzdHlsZWQoVGV4dClgXG4gIGxpbmUtaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxpbmVIZWlnaHRzLnNtYWxsfTtcbiAgJHt2YXJpYW50U3R5bGVzfTtcbmA7XG5cblBhcmFncmFwaC5wcm9wVHlwZXMgPSB7XG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ3VpJywgJ2xvbmdGb3JtJywgJ3RpbnknXSkuaXNSZXF1aXJlZFxufTtcblxuUGFyYWdyYXBoLnAgPSBjcmVhdGVXaXRoQ29tcG9uZW50KFBhcmFncmFwaCwgJ3AnKTtcblBhcmFncmFwaC5zcGFuID0gY3JlYXRlV2l0aENvbXBvbmVudChQYXJhZ3JhcGgsICdzcGFuJyk7XG5cbmV4cG9ydCBkZWZhdWx0IFBhcmFncmFwaDtcbiJdfQ== */"))
  );
};

var Paragraph = (
/*#__PURE__*/
0, _styledBase.default)(_Text.default, {
  target: "eui2ovj0",
  label: "Paragraph"
})("line-height:", function (props) {
  return props.theme.lineHeights.small;
}, ";", variantStyles, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9QYXJhZ3JhcGgvUGFyYWdyYXBoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVc4QiIsImZpbGUiOiIuLi8uLi9zcmMvUGFyYWdyYXBoL1BhcmFncmFwaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IGNyZWF0ZVdpdGhDb21wb25lbnQgZnJvbSAnLi4vdXRpbHMvY3JlYXRlV2l0aENvbXBvbmVudCc7XG5pbXBvcnQgVGV4dCBmcm9tICcuLi9UZXh0JztcblxuY29uc3QgdmFyaWFudFN0eWxlcyA9ICh7IHRoZW1lLCB2YXJpYW50IH0pID0+IGNzc2BcbiAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkudGV4dFt2YXJpYW50XS5mb250U2l6ZX07XG5gO1xuXG5jb25zdCBQYXJhZ3JhcGggPSBzdHlsZWQoVGV4dClgXG4gIGxpbmUtaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxpbmVIZWlnaHRzLnNtYWxsfTtcbiAgJHt2YXJpYW50U3R5bGVzfTtcbmA7XG5cblBhcmFncmFwaC5wcm9wVHlwZXMgPSB7XG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ3VpJywgJ2xvbmdGb3JtJywgJ3RpbnknXSkuaXNSZXF1aXJlZFxufTtcblxuUGFyYWdyYXBoLnAgPSBjcmVhdGVXaXRoQ29tcG9uZW50KFBhcmFncmFwaCwgJ3AnKTtcblBhcmFncmFwaC5zcGFuID0gY3JlYXRlV2l0aENvbXBvbmVudChQYXJhZ3JhcGgsICdzcGFuJyk7XG5cbmV4cG9ydCBkZWZhdWx0IFBhcmFncmFwaDtcbiJdfQ== */"));
Paragraph.propTypes = {
  variant: _propTypes.default.oneOf(['ui', 'longForm', 'tiny']).isRequired
};
Paragraph.p = (0, _createWithComponent.default)(Paragraph, 'p');
Paragraph.span = (0, _createWithComponent.default)(Paragraph, 'span');
var _default = Paragraph;
exports.default = _default;