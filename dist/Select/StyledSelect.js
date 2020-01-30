"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledBase = _interopRequireDefault(require("@emotion/styled-base"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _StyledInput = _interopRequireDefault(require("../Input/StyledInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var StyledSelectInput = (
/*#__PURE__*/
0, _styledBase["default"])(_StyledInput["default"], {
  target: "e1xemphv0",
  label: "StyledSelectInput"
})("appearance:none;background:", function (props) {
  return props.theme.colors.background.white;
}, ";&:-moz-focusring{color:transparent;text-shadow:0 0 0 #000;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZWxlY3QvU3R5bGVkU2VsZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU02QyIsImZpbGUiOiIuLi8uLi9zcmMvU2VsZWN0L1N0eWxlZFNlbGVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5pbXBvcnQgU3R5bGVkSW5wdXQgZnJvbSAnLi4vSW5wdXQvU3R5bGVkSW5wdXQnO1xuXG5jb25zdCBTdHlsZWRTZWxlY3RJbnB1dCA9IHN0eWxlZChTdHlsZWRJbnB1dClgXG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJhY2tncm91bmQud2hpdGV9O1xuXG4gICY6LW1vei1mb2N1c3Jpbmcge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDAgIzAwMDtcbiAgfVxuYDtcblxuU3R5bGVkU2VsZWN0SW5wdXQuZGVmYXVsdFByb3BzID0ge1xuICBhczogJ3NlbGVjdCdcbn07XG5cbmNvbnN0IFN0eWxlZFNlbGVjdFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJjphZnRlciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3R0b206IDA7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLmljb24uZGVmYXVsdH07XG4gICAgY29udGVudDogJyR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaWNvbnMuY2FyZXR9JztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtZmFtaWx5OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvbnRzLmljb259O1xuICAgIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250U2l6ZXMuc2l6ZTV9O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zcGFjZS5zbWFsbGVyfTtcbiAgICB0b3A6IDA7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZFNlbGVjdCA9ICh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IHsgbGFyZ2UgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZFNlbGVjdFdyYXBwZXIgbGFyZ2U9e2xhcmdlfT5cbiAgICAgIDxTdHlsZWRTZWxlY3RJbnB1dCB7Li4ucHJvcHN9PntjaGlsZHJlbn08L1N0eWxlZFNlbGVjdElucHV0PlxuICAgIDwvU3R5bGVkU2VsZWN0V3JhcHBlcj5cbiAgKTtcbn07XG5cblN0eWxlZFNlbGVjdC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubm9kZSxcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSlcbiAgXSkuaXNSZXF1aXJlZCxcbiAgbGFyZ2U6IFByb3BUeXBlcy5ib29sXG59O1xuXG5TdHlsZWRTZWxlY3QuZGVmYXVsdFByb3BzID0ge1xuICBsYXJnZTogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlZFNlbGVjdDtcbiJdfQ== */"));
StyledSelectInput.defaultProps = {
  as: 'select'
};
var StyledSelectWrapper = (0, _styledBase["default"])("div", {
  target: "e1xemphv1",
  label: "StyledSelectWrapper"
})("position:relative;&:after{align-items:center;bottom:0;color:", function (props) {
  return props.theme.colors.icon["default"];
}, ";content:'", function (props) {
  return props.theme.icons.caret;
}, "';display:flex;font-family:", function (props) {
  return props.theme.fonts.icon;
}, ";font-size:", function (props) {
  return props.theme.fontSizes.size5;
}, ";pointer-events:none;position:absolute;right:", function (props) {
  return props.theme.space.smaller;
}, ";top:0;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TZWxlY3QvU3R5bGVkU2VsZWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Cc0MiLCJmaWxlIjoiLi4vLi4vc3JjL1NlbGVjdC9TdHlsZWRTZWxlY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcblxuaW1wb3J0IFN0eWxlZElucHV0IGZyb20gJy4uL0lucHV0L1N0eWxlZElucHV0JztcblxuY29uc3QgU3R5bGVkU2VsZWN0SW5wdXQgPSBzdHlsZWQoU3R5bGVkSW5wdXQpYFxuICBhcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kLndoaXRlfTtcblxuICAmOi1tb3otZm9jdXNyaW5nIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAwICMwMDA7XG4gIH1cbmA7XG5cblN0eWxlZFNlbGVjdElucHV0LmRlZmF1bHRQcm9wcyA9IHtcbiAgYXM6ICdzZWxlY3QnXG59O1xuXG5jb25zdCBTdHlsZWRTZWxlY3RXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICY6YWZ0ZXIge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm90dG9tOiAwO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5pY29uLmRlZmF1bHR9O1xuICAgIGNvbnRlbnQ6ICcke3Byb3BzID0+IHByb3BzLnRoZW1lLmljb25zLmNhcmV0fSc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LWZhbWlseTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250cy5pY29ufTtcbiAgICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udFNpemVzLnNpemU1fTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3BhY2Uuc21hbGxlcn07XG4gICAgdG9wOiAwO1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRTZWxlY3QgPSAoeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCB7IGxhcmdlIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRTZWxlY3RXcmFwcGVyIGxhcmdlPXtsYXJnZX0+XG4gICAgICA8U3R5bGVkU2VsZWN0SW5wdXQgey4uLnByb3BzfT57Y2hpbGRyZW59PC9TdHlsZWRTZWxlY3RJbnB1dD5cbiAgICA8L1N0eWxlZFNlbGVjdFdyYXBwZXI+XG4gICk7XG59O1xuXG5TdHlsZWRTZWxlY3QucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLm5vZGUsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm5vZGUpXG4gIF0pLmlzUmVxdWlyZWQsXG4gIGxhcmdlOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuU3R5bGVkU2VsZWN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgbGFyZ2U6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdHlsZWRTZWxlY3Q7XG4iXX0= */"));

var StyledSelect = function StyledSelect(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  var large = props.large;
  return _react["default"].createElement(StyledSelectWrapper, {
    large: large
  }, _react["default"].createElement(StyledSelectInput, props, children));
};

StyledSelect.propTypes = {
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].arrayOf(_propTypes["default"].node)]).isRequired,
  large: _propTypes["default"].bool
};
StyledSelect.defaultProps = {
  large: false
};
var _default = StyledSelect;
exports["default"] = _default;