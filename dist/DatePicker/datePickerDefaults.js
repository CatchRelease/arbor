"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _DatePickerNavbar = _interopRequireDefault(require("./DatePickerNavbar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var dayPickerDefaults = {
  navbarElement: _DatePickerNavbar["default"],
  showOutsideDays: true,
  weekdaysShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
};
var _default = dayPickerDefaults;
exports["default"] = _default;