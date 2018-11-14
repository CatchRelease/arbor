"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

var _Grid = _interopRequireDefault(require("./Grid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var gridStyles = function gridStyles(_ref) {
  var children = _ref.children;
  return (
    /*#__PURE__*/
    (0, _reactEmotion.css)("grid-template-columns:repeat(", children.length, ",1fr);/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DYXJkQWN0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJd0MiLCJmaWxlIjoiLi4vc3JjL0NhcmRBY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdyZWFjdC1lbW90aW9uJztcblxuaW1wb3J0IEdyaWQgZnJvbSAnLi9HcmlkJztcblxuY29uc3QgZ3JpZFN0eWxlcyA9ICh7IGNoaWxkcmVuIH0pID0+IGNzc2BcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoJHtjaGlsZHJlbi5sZW5ndGh9LCAxZnIpO1xuYDtcblxuY29uc3QgQ2FyZEFjdGlvbnMgPSBzdHlsZWQoR3JpZC53aXRoQ29tcG9uZW50KCdkaXYnKSlgXG4gICR7Z3JpZFN0eWxlc307XG5gO1xuXG5DYXJkQWN0aW9ucy5kZWZhdWx0UHJvcHMgPSB7XG4gIGdyaWRHYXA6ICdzbWFsbCdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRBY3Rpb25zO1xuIl19 */label:gridStyles;")
  );
};

var CardActions =
/*#__PURE__*/
(0, _reactEmotion.default)(_Grid.default.withComponent('div', {
  target: "emp3b8f1"
}), {
  label: "CardActions",
  target: "emp3b8f0"
})(gridStyles, ";/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DYXJkQWN0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRcUQiLCJmaWxlIjoiLi4vc3JjL0NhcmRBY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdyZWFjdC1lbW90aW9uJztcblxuaW1wb3J0IEdyaWQgZnJvbSAnLi9HcmlkJztcblxuY29uc3QgZ3JpZFN0eWxlcyA9ICh7IGNoaWxkcmVuIH0pID0+IGNzc2BcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoJHtjaGlsZHJlbi5sZW5ndGh9LCAxZnIpO1xuYDtcblxuY29uc3QgQ2FyZEFjdGlvbnMgPSBzdHlsZWQoR3JpZC53aXRoQ29tcG9uZW50KCdkaXYnKSlgXG4gICR7Z3JpZFN0eWxlc307XG5gO1xuXG5DYXJkQWN0aW9ucy5kZWZhdWx0UHJvcHMgPSB7XG4gIGdyaWRHYXA6ICdzbWFsbCdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRBY3Rpb25zO1xuIl19 */");
CardActions.defaultProps = {
  gridGap: 'small'
};
var _default = CardActions;
exports.default = _default;