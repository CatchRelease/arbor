"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Text = _interopRequireDefault(require("./Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var variantColor = function variantColor(_ref) {
  var color = _ref.color,
      theme = _ref.theme,
      variant = _ref.variant;
  return color === undefined &&
  /*#__PURE__*/
  (0, _reactEmotion.css)("color:", theme.typography.text[variant].color, ";/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9QYXJhZ3JhcGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0siLCJmaWxlIjoiLi4vc3JjL1BhcmFncmFwaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAncmVhY3QtZW1vdGlvbic7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQnO1xuXG5jb25zdCB2YXJpYW50Q29sb3IgPSAoeyBjb2xvciwgdGhlbWUsIHZhcmlhbnQgfSkgPT5cbiAgY29sb3IgPT09IHVuZGVmaW5lZCAmJlxuICBjc3NgXG4gICAgY29sb3I6ICR7dGhlbWUudHlwb2dyYXBoeS50ZXh0W3ZhcmlhbnRdLmNvbG9yfTtcbiAgYDtcblxuY29uc3QgdmFyaWFudFN0eWxlcyA9ICh7IHRoZW1lLCB2YXJpYW50IH0pID0+IGNzc2BcbiAgZm9udC1zaXplOiAke3RoZW1lLnR5cG9ncmFwaHkudGV4dFt2YXJpYW50XS5mb250U2l6ZX07XG5gO1xuXG5jb25zdCBQYXJhZ3JhcGggPSBzdHlsZWQoVGV4dC53aXRoQ29tcG9uZW50KCdwJykpYFxuICAke3ZhcmlhbnRDb2xvcn07XG4gICR7dmFyaWFudFN0eWxlc307XG5gO1xuXG5QYXJhZ3JhcGgucHJvcFR5cGVzID0ge1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWyd1aScsICdsb25nRm9ybScsICd0aW55J10pLmlzUmVxdWlyZWRcbn07XG5cblBhcmFncmFwaC5wID0gUGFyYWdyYXBoLndpdGhDb21wb25lbnQoJ3AnKTtcblBhcmFncmFwaC5zcGFuID0gUGFyYWdyYXBoLndpdGhDb21wb25lbnQoJ3NwYW4nKTtcblxuZXhwb3J0IGRlZmF1bHQgUGFyYWdyYXBoO1xuIl19 */label:variantColor;");
};

var variantStyles = function variantStyles(_ref2) {
  var theme = _ref2.theme,
      variant = _ref2.variant;
  return (
    /*#__PURE__*/
    (0, _reactEmotion.css)("font-size:", theme.typography.text[variant].fontSize, ";/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9QYXJhZ3JhcGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV2lEIiwiZmlsZSI6Ii4uL3NyYy9QYXJhZ3JhcGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3JlYWN0LWVtb3Rpb24nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0JztcblxuY29uc3QgdmFyaWFudENvbG9yID0gKHsgY29sb3IsIHRoZW1lLCB2YXJpYW50IH0pID0+XG4gIGNvbG9yID09PSB1bmRlZmluZWQgJiZcbiAgY3NzYFxuICAgIGNvbG9yOiAke3RoZW1lLnR5cG9ncmFwaHkudGV4dFt2YXJpYW50XS5jb2xvcn07XG4gIGA7XG5cbmNvbnN0IHZhcmlhbnRTdHlsZXMgPSAoeyB0aGVtZSwgdmFyaWFudCB9KSA9PiBjc3NgXG4gIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LnRleHRbdmFyaWFudF0uZm9udFNpemV9O1xuYDtcblxuY29uc3QgUGFyYWdyYXBoID0gc3R5bGVkKFRleHQud2l0aENvbXBvbmVudCgncCcpKWBcbiAgJHt2YXJpYW50Q29sb3J9O1xuICAke3ZhcmlhbnRTdHlsZXN9O1xuYDtcblxuUGFyYWdyYXBoLnByb3BUeXBlcyA9IHtcbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsndWknLCAnbG9uZ0Zvcm0nLCAndGlueSddKS5pc1JlcXVpcmVkXG59O1xuXG5QYXJhZ3JhcGgucCA9IFBhcmFncmFwaC53aXRoQ29tcG9uZW50KCdwJyk7XG5QYXJhZ3JhcGguc3BhbiA9IFBhcmFncmFwaC53aXRoQ29tcG9uZW50KCdzcGFuJyk7XG5cbmV4cG9ydCBkZWZhdWx0IFBhcmFncmFwaDtcbiJdfQ== */label:variantStyles;")
  );
};

var Paragraph =
/*#__PURE__*/
(0, _reactEmotion.default)(_Text.default.withComponent('p', {
  target: "e1jrgekt1"
}), {
  label: "Paragraph",
  target: "e1jrgekt0"
})(variantColor, ";", variantStyles, ";/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9QYXJhZ3JhcGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWlEIiwiZmlsZSI6Ii4uL3NyYy9QYXJhZ3JhcGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3JlYWN0LWVtb3Rpb24nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0JztcblxuY29uc3QgdmFyaWFudENvbG9yID0gKHsgY29sb3IsIHRoZW1lLCB2YXJpYW50IH0pID0+XG4gIGNvbG9yID09PSB1bmRlZmluZWQgJiZcbiAgY3NzYFxuICAgIGNvbG9yOiAke3RoZW1lLnR5cG9ncmFwaHkudGV4dFt2YXJpYW50XS5jb2xvcn07XG4gIGA7XG5cbmNvbnN0IHZhcmlhbnRTdHlsZXMgPSAoeyB0aGVtZSwgdmFyaWFudCB9KSA9PiBjc3NgXG4gIGZvbnQtc2l6ZTogJHt0aGVtZS50eXBvZ3JhcGh5LnRleHRbdmFyaWFudF0uZm9udFNpemV9O1xuYDtcblxuY29uc3QgUGFyYWdyYXBoID0gc3R5bGVkKFRleHQud2l0aENvbXBvbmVudCgncCcpKWBcbiAgJHt2YXJpYW50Q29sb3J9O1xuICAke3ZhcmlhbnRTdHlsZXN9O1xuYDtcblxuUGFyYWdyYXBoLnByb3BUeXBlcyA9IHtcbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsndWknLCAnbG9uZ0Zvcm0nLCAndGlueSddKS5pc1JlcXVpcmVkXG59O1xuXG5QYXJhZ3JhcGgucCA9IFBhcmFncmFwaC53aXRoQ29tcG9uZW50KCdwJyk7XG5QYXJhZ3JhcGguc3BhbiA9IFBhcmFncmFwaC53aXRoQ29tcG9uZW50KCdzcGFuJyk7XG5cbmV4cG9ydCBkZWZhdWx0IFBhcmFncmFwaDtcbiJdfQ== */");
Paragraph.propTypes = {
  variant: _propTypes.default.oneOf(['ui', 'longForm', 'tiny']).isRequired
};
Paragraph.p = Paragraph.withComponent('p', {
  target: "e1jrgekt2"
});
Paragraph.span = Paragraph.withComponent('span', {
  target: "e1jrgekt3"
});
var _default = Paragraph;
exports.default = _default;