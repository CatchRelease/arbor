"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Flex = _interopRequireDefault(require("../Flex"));

var _palette = _interopRequireDefault(require("../theme/colors/palette"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var getBackground = function getBackground(_ref) {
  var paletteColor = _ref.paletteColor,
      subtle = _ref.subtle,
      theme = _ref.theme;

  if (paletteColor) {
    return subtle ? theme.colors.palette[paletteColor].lighter : theme.colors.palette[paletteColor]["default"];
  }

  return subtle ? theme.colors.monochrome.grey20 : theme.colors.monochrome.grey100;
};

var getBorderColor = function getBorderColor(_ref2) {
  var paletteColor = _ref2.paletteColor,
      theme = _ref2.theme;
  return paletteColor ? theme.colors.palette[paletteColor]["default"] : theme.colors.monochrome.grey100;
};

var StyledBadge = (
/*#__PURE__*/
0, _styledBase["default"])(_Flex["default"], {
  target: "e1q9vwte0",
  label: "StyledBadge"
})("background:", getBackground, ";border-color:", getBorderColor, ";border-radius:", function (props) {
  return props.variant === 'pill' ? '999px' : '2px';
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CYWRnZS9TdHlsZWRCYWRnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QmdDIiwiZmlsZSI6Ii4uLy4uL3NyYy9CYWRnZS9TdHlsZWRCYWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmltcG9ydCBGbGV4IGZyb20gJy4uL0ZsZXgnO1xuaW1wb3J0IHBhbGV0dGUgZnJvbSAnLi4vdGhlbWUvY29sb3JzL3BhbGV0dGUnO1xuXG5jb25zdCBnZXRCYWNrZ3JvdW5kID0gKHsgcGFsZXR0ZUNvbG9yLCBzdWJ0bGUsIHRoZW1lIH0pID0+IHtcbiAgaWYgKHBhbGV0dGVDb2xvcikge1xuICAgIHJldHVybiBzdWJ0bGVcbiAgICAgID8gdGhlbWUuY29sb3JzLnBhbGV0dGVbcGFsZXR0ZUNvbG9yXS5saWdodGVyXG4gICAgICA6IHRoZW1lLmNvbG9ycy5wYWxldHRlW3BhbGV0dGVDb2xvcl0uZGVmYXVsdDtcbiAgfVxuXG4gIHJldHVybiBzdWJ0bGVcbiAgICA/IHRoZW1lLmNvbG9ycy5tb25vY2hyb21lLmdyZXkyMFxuICAgIDogdGhlbWUuY29sb3JzLm1vbm9jaHJvbWUuZ3JleTEwMDtcbn07XG5cbmNvbnN0IGdldEJvcmRlckNvbG9yID0gKHsgcGFsZXR0ZUNvbG9yLCB0aGVtZSB9KSA9PlxuICBwYWxldHRlQ29sb3JcbiAgICA/IHRoZW1lLmNvbG9ycy5wYWxldHRlW3BhbGV0dGVDb2xvcl0uZGVmYXVsdFxuICAgIDogdGhlbWUuY29sb3JzLm1vbm9jaHJvbWUuZ3JleTEwMDtcblxuY29uc3QgU3R5bGVkQmFkZ2UgPSBzdHlsZWQoRmxleClgXG4gIGJhY2tncm91bmQ6ICR7Z2V0QmFja2dyb3VuZH07XG4gIGJvcmRlci1jb2xvcjogJHtnZXRCb3JkZXJDb2xvcn07XG4gIGJvcmRlci1yYWRpdXM6ICR7cHJvcHMgPT4gKHByb3BzLnZhcmlhbnQgPT09ICdwaWxsJyA/ICc5OTlweCcgOiAnMnB4Jyl9O1xuYDtcblxuU3R5bGVkQmFkZ2UucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgcGFsZXR0ZUNvbG9yOiBQcm9wVHlwZXMub25lT2YoWycnLCAuLi5PYmplY3Qua2V5cyhwYWxldHRlKV0pLFxuICBzdWJ0bGU6IFByb3BUeXBlcy5ib29sLFxuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ3BpbGwnXSlcbn07XG5cblN0eWxlZEJhZGdlLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGJvcmRlcjogJzFweCBzb2xpZCcsXG4gIHBhbGV0dGVDb2xvcjogJycsXG4gIGhlaWdodDogJzI0cHgnLFxuICBtYXhXaWR0aDogJzEwMCUnLFxuICBweDogJ3NtYWxsZXInXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdHlsZWRCYWRnZTtcbiJdfQ== */"));
StyledBadge.propTypes = {
  children: _propTypes["default"].node.isRequired,
  paletteColor: _propTypes["default"].oneOf([''].concat(_toConsumableArray(Object.keys(_palette["default"])))),
  subtle: _propTypes["default"].bool,
  variant: _propTypes["default"].oneOf(['default', 'pill'])
};
StyledBadge.defaultProps = {
  alignItems: 'center',
  border: '1px solid',
  paletteColor: '',
  height: '24px',
  maxWidth: '100%',
  px: 'smaller'
};
var _default = StyledBadge;
exports["default"] = _default;