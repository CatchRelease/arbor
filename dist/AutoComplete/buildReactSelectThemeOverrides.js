"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(_ref) {
  var _ref$colors = _ref.colors,
      intent = _ref$colors.intent,
      monochrome = _ref$colors.monochrome,
      radii = _ref.radii;
  return {
    borderRadius: radii.small,
    colors: {
      primary: intent.brand["default"],
      primary75: intent.brand.darker,
      primary50: intent.brand.dark,
      primary25: monochrome.grey10,
      danger: intent.danger["default"],
      dangerLight: intent.danger.light,
      neutral0: monochrome.white,
      neutral5: monochrome.grey20,
      neutral10: monochrome.grey40,
      neutral20: monochrome.grey40,
      neutral30: monochrome.grey40,
      neutral40: monochrome.grey40,
      neutral50: monochrome.grey50,
      neutral60: monochrome.grey60,
      neutral70: monochrome.grey70,
      neutral80: monochrome.grey80,
      neutral90: monochrome.grey90
    },
    spacing: {
      baseUnit: 0,
      controlHeight: 0,
      menuGutter: 0
    }
  };
};

exports["default"] = _default;