"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(require("@emotion/styled/base"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _themeGet = require("@styled-system/theme-get");

var _react2 = require("@emotion/react");

var _styledSystem = require("styled-system");

var _Box = _interopRequireDefault(require("../Box"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledSpinner = ( /*#__PURE__*/0, _base["default"])(_Box["default"], {
  target: "e1dufl9m1",
  label: "StyledSpinner"
})((0, _styledSystem.system)({
  diameter: {
    properties: ['width', 'height']
  }
}), " position:relative;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TcGlubmVyL1NwaW5uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU2lDIiwiZmlsZSI6Ii4uLy4uL3NyYy9TcGlubmVyL1NwaW5uZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHRoZW1lR2V0IH0gZnJvbSAnQHN0eWxlZC1zeXN0ZW0vdGhlbWUtZ2V0JztcbmltcG9ydCB7IHdpdGhUaGVtZSwga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgc3lzdGVtIH0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5cbmltcG9ydCBCb3ggZnJvbSAnLi4vQm94JztcblxuY29uc3QgU3R5bGVkU3Bpbm5lciA9IHN0eWxlZChCb3gpYFxuICAke3N5c3RlbSh7XG4gICAgZGlhbWV0ZXI6IHtcbiAgICAgIHByb3BlcnRpZXM6IFsnd2lkdGgnLCAnaGVpZ2h0J11cbiAgICB9XG4gIH0pfVxuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5cbmNvbnN0IHNwaW5BbmltYXRpb24gPSBrZXlmcmFtZXNgXG4gIDAlLCAzOSUsIDEwMCUge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XG4gIH0gNDAlIHtcbiAgICBvcGFjaXR5OiAxOyBcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRTcGlubmVyRG90ID0gc3R5bGVkKEJveClgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuXG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTUlO1xuICAgIGhlaWdodDogMTUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy5jb2xvcn07XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBhbmltYXRpb246ICR7c3BpbkFuaW1hdGlvbn0gMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xuICB9XG5cbiAgJjpudGgtY2hpbGQoMSkge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcbiAgfVxuICAmOm50aC1jaGlsZCgyKSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xuICB9XG4gICY6bnRoLWNoaWxkKDMpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIH1cbiAgJjpudGgtY2hpbGQoNCkge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7XG4gIH1cbiAgJjpudGgtY2hpbGQoNSkge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE1MGRlZyk7XG4gIH1cbiAgJjpudGgtY2hpbGQoNikge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cbiAgJjpudGgtY2hpbGQoNykge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7XG4gIH1cbiAgJjpudGgtY2hpbGQoOCkge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDI0MGRlZyk7XG4gIH1cbiAgJjpudGgtY2hpbGQoOSkge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gIH1cbiAgJjpudGgtY2hpbGQoMTApIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xuICB9XG4gICY6bnRoLWNoaWxkKDExKSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTtcbiAgfVxuICAmOm50aC1jaGlsZCgxKTpiZWZvcmUge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTEuMXM7XG4gIH1cbiAgJjpudGgtY2hpbGQoMik6YmVmb3JlIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xcztcbiAgfVxuICAmOm50aC1jaGlsZCgzKTpiZWZvcmUge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7XG4gIH1cbiAgJjpudGgtY2hpbGQoNCk6YmVmb3JlIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjhzO1xuICB9XG4gICY6bnRoLWNoaWxkKDUpOmJlZm9yZSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC43cztcbiAgfVxuICAmOm50aC1jaGlsZCg2KTpiZWZvcmUge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNnM7XG4gIH1cbiAgJjpudGgtY2hpbGQoNyk6YmVmb3JlIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xuICB9XG4gICY6bnRoLWNoaWxkKDgpOmJlZm9yZSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC40cztcbiAgfVxuICAmOm50aC1jaGlsZCg5KTpiZWZvcmUge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuM3M7XG4gIH1cbiAgJjpudGgtY2hpbGQoMTApOmJlZm9yZSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4ycztcbiAgfVxuICAmOm50aC1jaGlsZCgxMSk6YmVmb3JlIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjFzO1xuICB9XG5gO1xuXG5jb25zdCBTcGlubmVyID0gKHsgY2hpbGRyZW4sIGNvbG9yLCBzcGluLCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHRoZW1lZENvbG9yID0gdGhlbWVHZXQoYGNvbG9ycy4ke2NvbG9yfWAsIGNvbG9yKShwcm9wcyk7XG5cbiAgaWYgKCFzcGluKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRTcGlubmVyIHsuLi57IGNvbG9yOiB0aGVtZWRDb2xvciwgLi4ucHJvcHMgfX0+XG4gICAgICB7Wy4uLkFycmF5KDEyKS5rZXlzKCldLm1hcCgodmFsdWUpID0+IChcbiAgICAgICAgPFN0eWxlZFNwaW5uZXJEb3Qga2V5PXt2YWx1ZX0gY29sb3I9e3RoZW1lZENvbG9yfSAvPlxuICAgICAgKSl9XG4gICAgPC9TdHlsZWRTcGlubmVyPlxuICApO1xufTtcblxuU3Bpbm5lci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBBbGwgU3Bpbi5qcyBvcHRpb25zIGFyZSBzdXBwb3J0ZWQgYXMgcHJvcHMgdmlhIHJlYWN0LWxvYWRlclxuICAgKiBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9yZWFjdC1sb2FkZXJcbiAgICovXG5cbiAgLyoqXG4gICAqIENvbnRlbnQgdG8gcmVuZGVyIGluc2lkZSB0aGUgbG9hZGVyIHdoZW4gbG9hZGVkXG4gICAqICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubm9kZSxcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSlcbiAgXSksXG5cbiAgLyoqXG4gICAqIENvbG9yIGZvciB0aGUgc3Bpbm5lciwgc3VwcG9ydHMgY29sb3JzIGZyb20gdGhlbWUuXG4gICAqL1xuICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogV2hldGhlciBvciBub3QgdG8gc2hvdyB0aGUgc3Bpbm5lci5cbiAgICovXG4gIHNwaW46IFByb3BUeXBlcy5ib29sLFxuXG4gIGRpYW1ldGVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgICBQcm9wVHlwZXMuc3RyaW5nXG4gIF0pXG59O1xuXG5TcGlubmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgY29sb3I6ICdtb25vY2hyb21lLmJsYWNrJyxcbiAgc3BpbjogdHJ1ZSxcbiAgZGlhbWV0ZXI6ICc0MHB4J1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFNwaW5uZXIpO1xuIl19 */"));
var spinAnimation = (0, _react2.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  0%, 39%, 100% {\n    opacity: 0.5;\n    transform: scale(0.6);\n  } 40% {\n    opacity: 1; \n    transform: scale(1);\n  }\n"])));
var StyledSpinnerDot = ( /*#__PURE__*/0, _base["default"])(_Box["default"], {
  target: "e1dufl9m0",
  label: "StyledSpinnerDot"
})("width:100%;height:100%;position:absolute;left:0;top:0;&:before{content:'';display:block;width:15%;height:15%;background-color:", function (props) {
  return props.color;
}, ";border-radius:100%;animation:", spinAnimation, " 1.2s infinite ease-in-out both;}&:nth-child(1){transform:rotate(30deg);}&:nth-child(2){transform:rotate(60deg);}&:nth-child(3){transform:rotate(90deg);}&:nth-child(4){transform:rotate(120deg);}&:nth-child(5){transform:rotate(150deg);}&:nth-child(6){transform:rotate(180deg);}&:nth-child(7){transform:rotate(210deg);}&:nth-child(8){transform:rotate(240deg);}&:nth-child(9){transform:rotate(270deg);}&:nth-child(10){transform:rotate(300deg);}&:nth-child(11){transform:rotate(330deg);}&:nth-child(1):before{animation-delay:-1.1s;}&:nth-child(2):before{animation-delay:-1s;}&:nth-child(3):before{animation-delay:-0.9s;}&:nth-child(4):before{animation-delay:-0.8s;}&:nth-child(5):before{animation-delay:-0.7s;}&:nth-child(6):before{animation-delay:-0.6s;}&:nth-child(7):before{animation-delay:-0.5s;}&:nth-child(8):before{animation-delay:-0.4s;}&:nth-child(9):before{animation-delay:-0.3s;}&:nth-child(10):before{animation-delay:-0.2s;}&:nth-child(11):before{animation-delay:-0.1s;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TcGlubmVyL1NwaW5uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJvQyIsImZpbGUiOiIuLi8uLi9zcmMvU3Bpbm5lci9TcGlubmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB0aGVtZUdldCB9IGZyb20gJ0BzdHlsZWQtc3lzdGVtL3RoZW1lLWdldCc7XG5pbXBvcnQgeyB3aXRoVGhlbWUsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IHN5c3RlbSB9IGZyb20gJ3N0eWxlZC1zeXN0ZW0nO1xuXG5pbXBvcnQgQm94IGZyb20gJy4uL0JveCc7XG5cbmNvbnN0IFN0eWxlZFNwaW5uZXIgPSBzdHlsZWQoQm94KWBcbiAgJHtzeXN0ZW0oe1xuICAgIGRpYW1ldGVyOiB7XG4gICAgICBwcm9wZXJ0aWVzOiBbJ3dpZHRoJywgJ2hlaWdodCddXG4gICAgfVxuICB9KX1cblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5jb25zdCBzcGluQW5pbWF0aW9uID0ga2V5ZnJhbWVzYFxuICAwJSwgMzklLCAxMDAlIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xuICB9IDQwJSB7XG4gICAgb3BhY2l0eTogMTsgXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkU3Bpbm5lckRvdCA9IHN0eWxlZChCb3gpYFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcblxuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDE1JTtcbiAgICBoZWlnaHQ6IDE1JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMuY29sb3J9O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYW5pbWF0aW9uOiAke3NwaW5BbmltYXRpb259IDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcbiAgfVxuXG4gICY6bnRoLWNoaWxkKDEpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG4gIH1cbiAgJjpudGgtY2hpbGQoMikge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcbiAgfVxuICAmOm50aC1jaGlsZCgzKSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB9XG4gICY6bnRoLWNoaWxkKDQpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpO1xuICB9XG4gICY6bnRoLWNoaWxkKDUpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xuICB9XG4gICY6bnRoLWNoaWxkKDYpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB9XG4gICY6bnRoLWNoaWxkKDcpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMTBkZWcpO1xuICB9XG4gICY6bnRoLWNoaWxkKDgpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpO1xuICB9XG4gICY6bnRoLWNoaWxkKDkpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICB9XG4gICY6bnRoLWNoaWxkKDEwKSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcbiAgfVxuICAmOm50aC1jaGlsZCgxMSkge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDMzMGRlZyk7XG4gIH1cbiAgJjpudGgtY2hpbGQoMSk6YmVmb3JlIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xLjFzO1xuICB9XG4gICY6bnRoLWNoaWxkKDIpOmJlZm9yZSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7XG4gIH1cbiAgJjpudGgtY2hpbGQoMyk6YmVmb3JlIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjlzO1xuICB9XG4gICY6bnRoLWNoaWxkKDQpOmJlZm9yZSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC44cztcbiAgfVxuICAmOm50aC1jaGlsZCg1KTpiZWZvcmUge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuN3M7XG4gIH1cbiAgJjpudGgtY2hpbGQoNik6YmVmb3JlIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjZzO1xuICB9XG4gICY6bnRoLWNoaWxkKDcpOmJlZm9yZSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcbiAgfVxuICAmOm50aC1jaGlsZCg4KTpiZWZvcmUge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNHM7XG4gIH1cbiAgJjpudGgtY2hpbGQoOSk6YmVmb3JlIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjNzO1xuICB9XG4gICY6bnRoLWNoaWxkKDEwKTpiZWZvcmUge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMnM7XG4gIH1cbiAgJjpudGgtY2hpbGQoMTEpOmJlZm9yZSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xcztcbiAgfVxuYDtcblxuY29uc3QgU3Bpbm5lciA9ICh7IGNoaWxkcmVuLCBjb2xvciwgc3BpbiwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCB0aGVtZWRDb2xvciA9IHRoZW1lR2V0KGBjb2xvcnMuJHtjb2xvcn1gLCBjb2xvcikocHJvcHMpO1xuXG4gIGlmICghc3Bpbikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkU3Bpbm5lciB7Li4ueyBjb2xvcjogdGhlbWVkQ29sb3IsIC4uLnByb3BzIH19PlxuICAgICAge1suLi5BcnJheSgxMikua2V5cygpXS5tYXAoKHZhbHVlKSA9PiAoXG4gICAgICAgIDxTdHlsZWRTcGlubmVyRG90IGtleT17dmFsdWV9IGNvbG9yPXt0aGVtZWRDb2xvcn0gLz5cbiAgICAgICkpfVxuICAgIDwvU3R5bGVkU3Bpbm5lcj5cbiAgKTtcbn07XG5cblNwaW5uZXIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQWxsIFNwaW4uanMgb3B0aW9ucyBhcmUgc3VwcG9ydGVkIGFzIHByb3BzIHZpYSByZWFjdC1sb2FkZXJcbiAgICogaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcmVhY3QtbG9hZGVyXG4gICAqL1xuXG4gIC8qKlxuICAgKiBDb250ZW50IHRvIHJlbmRlciBpbnNpZGUgdGhlIGxvYWRlciB3aGVuIGxvYWRlZFxuICAgKiAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm5vZGUsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpXG4gIF0pLFxuXG4gIC8qKlxuICAgKiBDb2xvciBmb3IgdGhlIHNwaW5uZXIsIHN1cHBvcnRzIGNvbG9ycyBmcm9tIHRoZW1lLlxuICAgKi9cbiAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHRvIHNob3cgdGhlIHNwaW5uZXIuXG4gICAqL1xuICBzcGluOiBQcm9wVHlwZXMuYm9vbCxcblxuICBkaWFtZXRlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gICAgUHJvcFR5cGVzLnN0cmluZ1xuICBdKVxufTtcblxuU3Bpbm5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIGNvbG9yOiAnbW9ub2Nocm9tZS5ibGFjaycsXG4gIHNwaW46IHRydWUsXG4gIGRpYW1ldGVyOiAnNDBweCdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShTcGlubmVyKTtcbiJdfQ== */"));

var Spinner = function Spinner(_ref) {
  var children = _ref.children,
      color = _ref.color,
      spin = _ref.spin,
      props = _objectWithoutProperties(_ref, ["children", "color", "spin"]);

  var themedColor = (0, _themeGet.themeGet)("colors.".concat(color), color)(props);

  if (!spin) {
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement(StyledSpinner, _objectSpread({
    color: themedColor
  }, props), _toConsumableArray(Array(12).keys()).map(function (value) {
    return /*#__PURE__*/_react["default"].createElement(StyledSpinnerDot, {
      key: value,
      color: themedColor
    });
  }));
};

Spinner.propTypes = {
  /**
   * All Spin.js options are supported as props via react-loader
   * https://www.npmjs.com/package/react-loader
   */

  /**
   * Content to render inside the loader when loaded
   * */
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].arrayOf(_propTypes["default"].node)]),

  /**
   * Color for the spinner, supports colors from theme.
   */
  color: _propTypes["default"].string,

  /**
   * Whether or not to show the spinner.
   */
  spin: _propTypes["default"].bool,
  diameter: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].string), _propTypes["default"].string])
};
Spinner.defaultProps = {
  children: undefined,
  color: 'monochrome.black',
  spin: true,
  diameter: '40px'
};

var _default = (0, _react2.withTheme)(Spinner);

exports["default"] = _default;