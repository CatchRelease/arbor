"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DatePickerNavbar_1 = __importDefault(require("./DatePickerNavbar"));
const dayPickerDefaults = {
    navbarElement: DatePickerNavbar_1.default,
    showOutsideDays: true,
    weekdaysShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
};
exports.default = dayPickerDefaults;
