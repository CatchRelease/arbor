"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(require("@emotion/styled/base"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Flex = _interopRequireDefault(require("../Flex"));

var _palette = _interopRequireDefault(require("../theme/colors/palette"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var StyledBadge = ( /*#__PURE__*/0, _base["default"])(_Flex["default"], {
  target: "e1q9vwte0",
  label: "StyledBadge"
})("background:", getBackground, ";border-color:", getBorderColor, ";border-radius:", function (props) {
  return props.variant === 'pill' ? '999px' : '2px';
}, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CYWRnZS9TdHlsZWRCYWRnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QmdDIiwiZmlsZSI6Ii4uLy4uL3NyYy9CYWRnZS9TdHlsZWRCYWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5cbmltcG9ydCBGbGV4IGZyb20gJy4uL0ZsZXgnO1xuaW1wb3J0IHBhbGV0dGUgZnJvbSAnLi4vdGhlbWUvY29sb3JzL3BhbGV0dGUnO1xuXG5jb25zdCBnZXRCYWNrZ3JvdW5kID0gKHsgcGFsZXR0ZUNvbG9yLCBzdWJ0bGUsIHRoZW1lIH0pID0+IHtcbiAgaWYgKHBhbGV0dGVDb2xvcikge1xuICAgIHJldHVybiBzdWJ0bGVcbiAgICAgID8gdGhlbWUuY29sb3JzLnBhbGV0dGVbcGFsZXR0ZUNvbG9yXS5saWdodGVyXG4gICAgICA6IHRoZW1lLmNvbG9ycy5wYWxldHRlW3BhbGV0dGVDb2xvcl0uZGVmYXVsdDtcbiAgfVxuXG4gIHJldHVybiBzdWJ0bGVcbiAgICA/IHRoZW1lLmNvbG9ycy5tb25vY2hyb21lLmdyZXkyMFxuICAgIDogdGhlbWUuY29sb3JzLm1vbm9jaHJvbWUuZ3JleTEwMDtcbn07XG5cbmNvbnN0IGdldEJvcmRlckNvbG9yID0gKHsgcGFsZXR0ZUNvbG9yLCB0aGVtZSB9KSA9PlxuICBwYWxldHRlQ29sb3JcbiAgICA/IHRoZW1lLmNvbG9ycy5wYWxldHRlW3BhbGV0dGVDb2xvcl0uZGVmYXVsdFxuICAgIDogdGhlbWUuY29sb3JzLm1vbm9jaHJvbWUuZ3JleTEwMDtcblxuY29uc3QgU3R5bGVkQmFkZ2UgPSBzdHlsZWQoRmxleClgXG4gIGJhY2tncm91bmQ6ICR7Z2V0QmFja2dyb3VuZH07XG4gIGJvcmRlci1jb2xvcjogJHtnZXRCb3JkZXJDb2xvcn07XG4gIGJvcmRlci1yYWRpdXM6ICR7KHByb3BzKSA9PiAocHJvcHMudmFyaWFudCA9PT0gJ3BpbGwnID8gJzk5OXB4JyA6ICcycHgnKX07XG5gO1xuXG5TdHlsZWRCYWRnZS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBwYWxldHRlQ29sb3I6IFByb3BUeXBlcy5vbmVPZihbJycsIC4uLk9iamVjdC5rZXlzKHBhbGV0dGUpXSksXG4gIHN1YnRsZTogUHJvcFR5cGVzLmJvb2wsXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAncGlsbCddKVxufTtcblxuU3R5bGVkQmFkZ2UuZGVmYXVsdFByb3BzID0ge1xuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcbiAgcGFsZXR0ZUNvbG9yOiAnJyxcbiAgaGVpZ2h0OiAnMjRweCcsXG4gIG1heFdpZHRoOiAnMTAwJScsXG4gIHB4OiAnc21hbGxlcidcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlZEJhZGdlO1xuIl19 */"));
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