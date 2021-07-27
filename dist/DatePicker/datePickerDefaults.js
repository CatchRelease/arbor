"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var DatePickerNavbar_1 = __importDefault(require("./DatePickerNavbar"));
var dayPickerDefaults = {
    navbarElement: DatePickerNavbar_1["default"],
    showOutsideDays: true,
    weekdaysShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
};
exports["default"] = dayPickerDefaults;
