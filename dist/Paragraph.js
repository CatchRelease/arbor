"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _core = require("@emotion/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Text = _interopRequireDefault(require("./Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var variantStyles = function variantStyles(_ref) {
  var theme = _ref.theme,
      variant = _ref.variant;
  return (
    /*#__PURE__*/
    (0, _core.css)("font-size:", theme.typography.text[variant].fontSize, ";label:variantStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9QYXJhZ3JhcGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTWlEIiwiZmlsZSI6Ii4uL3NyYy9QYXJhZ3JhcGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dCc7XG5cbmNvbnN0IHZhcmlhbnRTdHlsZXMgPSAoeyB0aGVtZSwgdmFyaWFudCB9KSA9PiBjc3NgXG4gIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LnRleHRbdmFyaWFudF0uZm9udFNpemV9O1xuYDtcblxuY29uc3QgUGFyYWdyYXBoID0gc3R5bGVkKFRleHQpYFxuICBsaW5lLWhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5saW5lSGVpZ2h0cy5zbWFsbH07XG4gICR7dmFyaWFudFN0eWxlc307XG5gO1xuXG5QYXJhZ3JhcGgucHJvcFR5cGVzID0ge1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWyd1aScsICdsb25nRm9ybScsICd0aW55J10pLmlzUmVxdWlyZWRcbn07XG5cblBhcmFncmFwaC5wID0gUGFyYWdyYXBoLndpdGhDb21wb25lbnQoJ3AnKTtcblBhcmFncmFwaC5zcGFuID0gUGFyYWdyYXBoLndpdGhDb21wb25lbnQoJ3NwYW4nKTtcblxuZXhwb3J0IGRlZmF1bHQgUGFyYWdyYXBoO1xuIl19 */"))
  );
};

var Paragraph = (
/*#__PURE__*/
0, _styledBase.default)(_Text.default, {
  target: "e1jrgekt0",
  label: "Paragraph"
})("line-height:", function (props) {
  return props.theme.lineHeights.small;
}, ";", variantStyles, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9QYXJhZ3JhcGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVThCIiwiZmlsZSI6Ii4uL3NyYy9QYXJhZ3JhcGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dCc7XG5cbmNvbnN0IHZhcmlhbnRTdHlsZXMgPSAoeyB0aGVtZSwgdmFyaWFudCB9KSA9PiBjc3NgXG4gIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LnRleHRbdmFyaWFudF0uZm9udFNpemV9O1xuYDtcblxuY29uc3QgUGFyYWdyYXBoID0gc3R5bGVkKFRleHQpYFxuICBsaW5lLWhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5saW5lSGVpZ2h0cy5zbWFsbH07XG4gICR7dmFyaWFudFN0eWxlc307XG5gO1xuXG5QYXJhZ3JhcGgucHJvcFR5cGVzID0ge1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWyd1aScsICdsb25nRm9ybScsICd0aW55J10pLmlzUmVxdWlyZWRcbn07XG5cblBhcmFncmFwaC5wID0gUGFyYWdyYXBoLndpdGhDb21wb25lbnQoJ3AnKTtcblBhcmFncmFwaC5zcGFuID0gUGFyYWdyYXBoLndpdGhDb21wb25lbnQoJ3NwYW4nKTtcblxuZXhwb3J0IGRlZmF1bHQgUGFyYWdyYXBoO1xuIl19 */"));
Paragraph.propTypes = {
  variant: _propTypes.default.oneOf(['ui', 'longForm', 'tiny']).isRequired
};
Paragraph.p = Paragraph.withComponent('p', {
  target: "e1jrgekt1"
});
Paragraph.span = Paragraph.withComponent('span', {
  target: "e1jrgekt2"
});
var _default = Paragraph;
exports.default = _default;