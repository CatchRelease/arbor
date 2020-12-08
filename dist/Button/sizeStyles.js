"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("@emotion/react");

var _polished = require("polished");

var buttonStyles = function buttonStyles(rawHeight, textFontSize, iconFontSize) {
  var height = (0, _polished.rem)("".concat(rawHeight, "px"));
  var padding = (0, _polished.rem)("".concat(rawHeight * 0.5, "px"));
  return /*#__PURE__*/(0, _react.css)("font-size:", textFontSize, ";height:", height, ";padding:0 ", padding, ";i{width:", height, ";font-size:", iconFontSize, ";&:first-child{margin-left:-", padding, ";}&:last-child{margin-right:-", padding, ";}};label:buttonStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b24vc2l6ZVN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPWSIsImZpbGUiOiIuLi8uLi9zcmMvQnV0dG9uL3NpemVTdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgeyByZW0gfSBmcm9tICdwb2xpc2hlZCc7XG5cbmNvbnN0IGJ1dHRvblN0eWxlcyA9IChyYXdIZWlnaHQsIHRleHRGb250U2l6ZSwgaWNvbkZvbnRTaXplKSA9PiB7XG4gIGNvbnN0IGhlaWdodCA9IHJlbShgJHtyYXdIZWlnaHR9cHhgKTtcbiAgY29uc3QgcGFkZGluZyA9IHJlbShgJHtyYXdIZWlnaHQgKiAwLjV9cHhgKTtcblxuICByZXR1cm4gY3NzYFxuICAgIGZvbnQtc2l6ZTogJHt0ZXh0Rm9udFNpemV9O1xuICAgIGhlaWdodDogJHtoZWlnaHR9O1xuICAgIHBhZGRpbmc6IDAgJHtwYWRkaW5nfTtcblxuICAgIGkge1xuICAgICAgd2lkdGg6ICR7aGVpZ2h0fTtcbiAgICAgIGZvbnQtc2l6ZTogJHtpY29uRm9udFNpemV9O1xuXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0ke3BhZGRpbmd9O1xuICAgICAgfVxuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IC0ke3BhZGRpbmd9O1xuICAgICAgfVxuICAgIH1cbiAgYDtcbn07XG5cbmNvbnN0IHNpemVTdHlsZXMgPSAoeyB0aGVtZSwgc2l6ZSwgZm9udFNpemUgfSkgPT4ge1xuICBjb25zdCB7IHNpemUxLCBzaXplMiwgc2l6ZTMsIHNpemU0LCBzaXplNSB9ID0gdGhlbWUuZm9udFNpemVzO1xuICBjb25zdCBmb250U2l6ZU92ZXJyaWRlID0gdGhlbWUuZm9udFNpemVzW2ZvbnRTaXplXVxuICAgID8gdGhlbWUuZm9udFNpemVzW2ZvbnRTaXplXVxuICAgIDogZm9udFNpemU7XG5cbiAgc3dpdGNoIChzaXplKSB7XG4gICAgY2FzZSAnc21hbGwnOlxuICAgICAgcmV0dXJuIGNzc2BcbiAgICAgICAgJHtidXR0b25TdHlsZXMoMjQsIGZvbnRTaXplID8gZm9udFNpemVPdmVycmlkZSA6IHNpemUyLCBzaXplMSl9O1xuICAgICAgYDtcbiAgICBjYXNlICdtZWRpdW0nOlxuICAgICAgcmV0dXJuIGNzc2BcbiAgICAgICAgJHtidXR0b25TdHlsZXMoMzIsIGZvbnRTaXplID8gZm9udFNpemVPdmVycmlkZSA6IHNpemUzLCBzaXplMil9O1xuICAgICAgYDtcbiAgICBjYXNlICdsYXJnZSc6XG4gICAgICByZXR1cm4gY3NzYFxuICAgICAgICAke2J1dHRvblN0eWxlcyg0MCwgZm9udFNpemUgPyBmb250U2l6ZU92ZXJyaWRlIDogc2l6ZTQsIHNpemU0KX07XG4gICAgICBgO1xuICAgIGNhc2UgJ2p1bWJvJzpcbiAgICAgIHJldHVybiBjc3NgXG4gICAgICAgICR7YnV0dG9uU3R5bGVzKDQ4LCBmb250U2l6ZSA/IGZvbnRTaXplT3ZlcnJpZGUgOiBzaXplNCwgc2l6ZTUpfTtcbiAgICAgIGA7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAnJztcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2l6ZVN0eWxlcztcbiJdfQ== */"));
};

var sizeStyles = function sizeStyles(_ref) {
  var theme = _ref.theme,
      size = _ref.size,
      fontSize = _ref.fontSize;
  var _theme$fontSizes = theme.fontSizes,
      size1 = _theme$fontSizes.size1,
      size2 = _theme$fontSizes.size2,
      size3 = _theme$fontSizes.size3,
      size4 = _theme$fontSizes.size4,
      size5 = _theme$fontSizes.size5;
  var fontSizeOverride = theme.fontSizes[fontSize] ? theme.fontSizes[fontSize] : fontSize;

  switch (size) {
    case 'small':
      return /*#__PURE__*/(0, _react.css)(buttonStyles(24, fontSize ? fontSizeOverride : size2, size1), ";;label:sizeStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b24vc2l6ZVN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ2dCIiwiZmlsZSI6Ii4uLy4uL3NyYy9CdXR0b24vc2l6ZVN0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCB7IHJlbSB9IGZyb20gJ3BvbGlzaGVkJztcblxuY29uc3QgYnV0dG9uU3R5bGVzID0gKHJhd0hlaWdodCwgdGV4dEZvbnRTaXplLCBpY29uRm9udFNpemUpID0+IHtcbiAgY29uc3QgaGVpZ2h0ID0gcmVtKGAke3Jhd0hlaWdodH1weGApO1xuICBjb25zdCBwYWRkaW5nID0gcmVtKGAke3Jhd0hlaWdodCAqIDAuNX1weGApO1xuXG4gIHJldHVybiBjc3NgXG4gICAgZm9udC1zaXplOiAke3RleHRGb250U2l6ZX07XG4gICAgaGVpZ2h0OiAke2hlaWdodH07XG4gICAgcGFkZGluZzogMCAke3BhZGRpbmd9O1xuXG4gICAgaSB7XG4gICAgICB3aWR0aDogJHtoZWlnaHR9O1xuICAgICAgZm9udC1zaXplOiAke2ljb25Gb250U2l6ZX07XG5cbiAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tbGVmdDogLSR7cGFkZGluZ307XG4gICAgICB9XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLSR7cGFkZGluZ307XG4gICAgICB9XG4gICAgfVxuICBgO1xufTtcblxuY29uc3Qgc2l6ZVN0eWxlcyA9ICh7IHRoZW1lLCBzaXplLCBmb250U2l6ZSB9KSA9PiB7XG4gIGNvbnN0IHsgc2l6ZTEsIHNpemUyLCBzaXplMywgc2l6ZTQsIHNpemU1IH0gPSB0aGVtZS5mb250U2l6ZXM7XG4gIGNvbnN0IGZvbnRTaXplT3ZlcnJpZGUgPSB0aGVtZS5mb250U2l6ZXNbZm9udFNpemVdXG4gICAgPyB0aGVtZS5mb250U2l6ZXNbZm9udFNpemVdXG4gICAgOiBmb250U2l6ZTtcblxuICBzd2l0Y2ggKHNpemUpIHtcbiAgICBjYXNlICdzbWFsbCc6XG4gICAgICByZXR1cm4gY3NzYFxuICAgICAgICAke2J1dHRvblN0eWxlcygyNCwgZm9udFNpemUgPyBmb250U2l6ZU92ZXJyaWRlIDogc2l6ZTIsIHNpemUxKX07XG4gICAgICBgO1xuICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICByZXR1cm4gY3NzYFxuICAgICAgICAke2J1dHRvblN0eWxlcygzMiwgZm9udFNpemUgPyBmb250U2l6ZU92ZXJyaWRlIDogc2l6ZTMsIHNpemUyKX07XG4gICAgICBgO1xuICAgIGNhc2UgJ2xhcmdlJzpcbiAgICAgIHJldHVybiBjc3NgXG4gICAgICAgICR7YnV0dG9uU3R5bGVzKDQwLCBmb250U2l6ZSA/IGZvbnRTaXplT3ZlcnJpZGUgOiBzaXplNCwgc2l6ZTQpfTtcbiAgICAgIGA7XG4gICAgY2FzZSAnanVtYm8nOlxuICAgICAgcmV0dXJuIGNzc2BcbiAgICAgICAgJHtidXR0b25TdHlsZXMoNDgsIGZvbnRTaXplID8gZm9udFNpemVPdmVycmlkZSA6IHNpemU0LCBzaXplNSl9O1xuICAgICAgYDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaXplU3R5bGVzO1xuIl19 */"));

    case 'medium':
      return /*#__PURE__*/(0, _react.css)(buttonStyles(32, fontSize ? fontSizeOverride : size3, size2), ";;label:sizeStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b24vc2l6ZVN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q2dCIiwiZmlsZSI6Ii4uLy4uL3NyYy9CdXR0b24vc2l6ZVN0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCB7IHJlbSB9IGZyb20gJ3BvbGlzaGVkJztcblxuY29uc3QgYnV0dG9uU3R5bGVzID0gKHJhd0hlaWdodCwgdGV4dEZvbnRTaXplLCBpY29uRm9udFNpemUpID0+IHtcbiAgY29uc3QgaGVpZ2h0ID0gcmVtKGAke3Jhd0hlaWdodH1weGApO1xuICBjb25zdCBwYWRkaW5nID0gcmVtKGAke3Jhd0hlaWdodCAqIDAuNX1weGApO1xuXG4gIHJldHVybiBjc3NgXG4gICAgZm9udC1zaXplOiAke3RleHRGb250U2l6ZX07XG4gICAgaGVpZ2h0OiAke2hlaWdodH07XG4gICAgcGFkZGluZzogMCAke3BhZGRpbmd9O1xuXG4gICAgaSB7XG4gICAgICB3aWR0aDogJHtoZWlnaHR9O1xuICAgICAgZm9udC1zaXplOiAke2ljb25Gb250U2l6ZX07XG5cbiAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tbGVmdDogLSR7cGFkZGluZ307XG4gICAgICB9XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLSR7cGFkZGluZ307XG4gICAgICB9XG4gICAgfVxuICBgO1xufTtcblxuY29uc3Qgc2l6ZVN0eWxlcyA9ICh7IHRoZW1lLCBzaXplLCBmb250U2l6ZSB9KSA9PiB7XG4gIGNvbnN0IHsgc2l6ZTEsIHNpemUyLCBzaXplMywgc2l6ZTQsIHNpemU1IH0gPSB0aGVtZS5mb250U2l6ZXM7XG4gIGNvbnN0IGZvbnRTaXplT3ZlcnJpZGUgPSB0aGVtZS5mb250U2l6ZXNbZm9udFNpemVdXG4gICAgPyB0aGVtZS5mb250U2l6ZXNbZm9udFNpemVdXG4gICAgOiBmb250U2l6ZTtcblxuICBzd2l0Y2ggKHNpemUpIHtcbiAgICBjYXNlICdzbWFsbCc6XG4gICAgICByZXR1cm4gY3NzYFxuICAgICAgICAke2J1dHRvblN0eWxlcygyNCwgZm9udFNpemUgPyBmb250U2l6ZU92ZXJyaWRlIDogc2l6ZTIsIHNpemUxKX07XG4gICAgICBgO1xuICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICByZXR1cm4gY3NzYFxuICAgICAgICAke2J1dHRvblN0eWxlcygzMiwgZm9udFNpemUgPyBmb250U2l6ZU92ZXJyaWRlIDogc2l6ZTMsIHNpemUyKX07XG4gICAgICBgO1xuICAgIGNhc2UgJ2xhcmdlJzpcbiAgICAgIHJldHVybiBjc3NgXG4gICAgICAgICR7YnV0dG9uU3R5bGVzKDQwLCBmb250U2l6ZSA/IGZvbnRTaXplT3ZlcnJpZGUgOiBzaXplNCwgc2l6ZTQpfTtcbiAgICAgIGA7XG4gICAgY2FzZSAnanVtYm8nOlxuICAgICAgcmV0dXJuIGNzc2BcbiAgICAgICAgJHtidXR0b25TdHlsZXMoNDgsIGZvbnRTaXplID8gZm9udFNpemVPdmVycmlkZSA6IHNpemU0LCBzaXplNSl9O1xuICAgICAgYDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaXplU3R5bGVzO1xuIl19 */"));

    case 'large':
      return /*#__PURE__*/(0, _react.css)(buttonStyles(40, fontSize ? fontSizeOverride : size4, size4), ";;label:sizeStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b24vc2l6ZVN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ2dCIiwiZmlsZSI6Ii4uLy4uL3NyYy9CdXR0b24vc2l6ZVN0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCB7IHJlbSB9IGZyb20gJ3BvbGlzaGVkJztcblxuY29uc3QgYnV0dG9uU3R5bGVzID0gKHJhd0hlaWdodCwgdGV4dEZvbnRTaXplLCBpY29uRm9udFNpemUpID0+IHtcbiAgY29uc3QgaGVpZ2h0ID0gcmVtKGAke3Jhd0hlaWdodH1weGApO1xuICBjb25zdCBwYWRkaW5nID0gcmVtKGAke3Jhd0hlaWdodCAqIDAuNX1weGApO1xuXG4gIHJldHVybiBjc3NgXG4gICAgZm9udC1zaXplOiAke3RleHRGb250U2l6ZX07XG4gICAgaGVpZ2h0OiAke2hlaWdodH07XG4gICAgcGFkZGluZzogMCAke3BhZGRpbmd9O1xuXG4gICAgaSB7XG4gICAgICB3aWR0aDogJHtoZWlnaHR9O1xuICAgICAgZm9udC1zaXplOiAke2ljb25Gb250U2l6ZX07XG5cbiAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tbGVmdDogLSR7cGFkZGluZ307XG4gICAgICB9XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLSR7cGFkZGluZ307XG4gICAgICB9XG4gICAgfVxuICBgO1xufTtcblxuY29uc3Qgc2l6ZVN0eWxlcyA9ICh7IHRoZW1lLCBzaXplLCBmb250U2l6ZSB9KSA9PiB7XG4gIGNvbnN0IHsgc2l6ZTEsIHNpemUyLCBzaXplMywgc2l6ZTQsIHNpemU1IH0gPSB0aGVtZS5mb250U2l6ZXM7XG4gIGNvbnN0IGZvbnRTaXplT3ZlcnJpZGUgPSB0aGVtZS5mb250U2l6ZXNbZm9udFNpemVdXG4gICAgPyB0aGVtZS5mb250U2l6ZXNbZm9udFNpemVdXG4gICAgOiBmb250U2l6ZTtcblxuICBzd2l0Y2ggKHNpemUpIHtcbiAgICBjYXNlICdzbWFsbCc6XG4gICAgICByZXR1cm4gY3NzYFxuICAgICAgICAke2J1dHRvblN0eWxlcygyNCwgZm9udFNpemUgPyBmb250U2l6ZU92ZXJyaWRlIDogc2l6ZTIsIHNpemUxKX07XG4gICAgICBgO1xuICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICByZXR1cm4gY3NzYFxuICAgICAgICAke2J1dHRvblN0eWxlcygzMiwgZm9udFNpemUgPyBmb250U2l6ZU92ZXJyaWRlIDogc2l6ZTMsIHNpemUyKX07XG4gICAgICBgO1xuICAgIGNhc2UgJ2xhcmdlJzpcbiAgICAgIHJldHVybiBjc3NgXG4gICAgICAgICR7YnV0dG9uU3R5bGVzKDQwLCBmb250U2l6ZSA/IGZvbnRTaXplT3ZlcnJpZGUgOiBzaXplNCwgc2l6ZTQpfTtcbiAgICAgIGA7XG4gICAgY2FzZSAnanVtYm8nOlxuICAgICAgcmV0dXJuIGNzc2BcbiAgICAgICAgJHtidXR0b25TdHlsZXMoNDgsIGZvbnRTaXplID8gZm9udFNpemVPdmVycmlkZSA6IHNpemU0LCBzaXplNSl9O1xuICAgICAgYDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaXplU3R5bGVzO1xuIl19 */"));

    case 'jumbo':
      return /*#__PURE__*/(0, _react.css)(buttonStyles(48, fontSize ? fontSizeOverride : size4, size5), ";;label:sizeStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CdXR0b24vc2l6ZVN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQ2dCIiwiZmlsZSI6Ii4uLy4uL3NyYy9CdXR0b24vc2l6ZVN0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcbmltcG9ydCB7IHJlbSB9IGZyb20gJ3BvbGlzaGVkJztcblxuY29uc3QgYnV0dG9uU3R5bGVzID0gKHJhd0hlaWdodCwgdGV4dEZvbnRTaXplLCBpY29uRm9udFNpemUpID0+IHtcbiAgY29uc3QgaGVpZ2h0ID0gcmVtKGAke3Jhd0hlaWdodH1weGApO1xuICBjb25zdCBwYWRkaW5nID0gcmVtKGAke3Jhd0hlaWdodCAqIDAuNX1weGApO1xuXG4gIHJldHVybiBjc3NgXG4gICAgZm9udC1zaXplOiAke3RleHRGb250U2l6ZX07XG4gICAgaGVpZ2h0OiAke2hlaWdodH07XG4gICAgcGFkZGluZzogMCAke3BhZGRpbmd9O1xuXG4gICAgaSB7XG4gICAgICB3aWR0aDogJHtoZWlnaHR9O1xuICAgICAgZm9udC1zaXplOiAke2ljb25Gb250U2l6ZX07XG5cbiAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tbGVmdDogLSR7cGFkZGluZ307XG4gICAgICB9XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLSR7cGFkZGluZ307XG4gICAgICB9XG4gICAgfVxuICBgO1xufTtcblxuY29uc3Qgc2l6ZVN0eWxlcyA9ICh7IHRoZW1lLCBzaXplLCBmb250U2l6ZSB9KSA9PiB7XG4gIGNvbnN0IHsgc2l6ZTEsIHNpemUyLCBzaXplMywgc2l6ZTQsIHNpemU1IH0gPSB0aGVtZS5mb250U2l6ZXM7XG4gIGNvbnN0IGZvbnRTaXplT3ZlcnJpZGUgPSB0aGVtZS5mb250U2l6ZXNbZm9udFNpemVdXG4gICAgPyB0aGVtZS5mb250U2l6ZXNbZm9udFNpemVdXG4gICAgOiBmb250U2l6ZTtcblxuICBzd2l0Y2ggKHNpemUpIHtcbiAgICBjYXNlICdzbWFsbCc6XG4gICAgICByZXR1cm4gY3NzYFxuICAgICAgICAke2J1dHRvblN0eWxlcygyNCwgZm9udFNpemUgPyBmb250U2l6ZU92ZXJyaWRlIDogc2l6ZTIsIHNpemUxKX07XG4gICAgICBgO1xuICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICByZXR1cm4gY3NzYFxuICAgICAgICAke2J1dHRvblN0eWxlcygzMiwgZm9udFNpemUgPyBmb250U2l6ZU92ZXJyaWRlIDogc2l6ZTMsIHNpemUyKX07XG4gICAgICBgO1xuICAgIGNhc2UgJ2xhcmdlJzpcbiAgICAgIHJldHVybiBjc3NgXG4gICAgICAgICR7YnV0dG9uU3R5bGVzKDQwLCBmb250U2l6ZSA/IGZvbnRTaXplT3ZlcnJpZGUgOiBzaXplNCwgc2l6ZTQpfTtcbiAgICAgIGA7XG4gICAgY2FzZSAnanVtYm8nOlxuICAgICAgcmV0dXJuIGNzc2BcbiAgICAgICAgJHtidXR0b25TdHlsZXMoNDgsIGZvbnRTaXplID8gZm9udFNpemVPdmVycmlkZSA6IHNpemU0LCBzaXplNSl9O1xuICAgICAgYDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaXplU3R5bGVzO1xuIl19 */"));

    default:
      return '';
  }
};

var _default = sizeStyles;
exports["default"] = _default;