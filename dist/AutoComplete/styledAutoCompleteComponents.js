"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.subComponents = void 0;

var _StyledAutoComplete = _interopRequireDefault(require("./StyledAutoComplete"));

var _StyledAutoCompleteClearIndicator = _interopRequireDefault(require("./StyledAutoCompleteClearIndicator"));

var _StyledAutoCompleteContainer = _interopRequireDefault(require("./StyledAutoCompleteContainer"));

var _StyledAutoCompleteControl = _interopRequireDefault(require("./StyledAutoCompleteControl"));

var _StyledAutoCompleteDropdownIndicator = _interopRequireDefault(require("./StyledAutoCompleteDropdownIndicator"));

var _StyledAutoCompleteIndicatorsContainer = _interopRequireDefault(require("./StyledAutoCompleteIndicatorsContainer"));

var _StyledAutoCompleteInput = _interopRequireDefault(require("./StyledAutoCompleteInput"));

var _StyledAutoCompleteMenu = _interopRequireDefault(require("./StyledAutoCompleteMenu"));

var _StyledAutoCompleteMenuList = _interopRequireDefault(require("./StyledAutoCompleteMenuList"));

var _StyledAutoCompleteMultiValue = _interopRequireDefault(require("./StyledAutoCompleteMultiValue"));

var _StyledAutoCompleteNoOptionsMessage = _interopRequireDefault(require("./StyledAutoCompleteNoOptionsMessage"));

var _StyledAutoCompletePlaceholder = _interopRequireDefault(require("./StyledAutoCompletePlaceholder"));

var _StyledAutoCompleteOption = _interopRequireDefault(require("./StyledAutoCompleteOption"));

var _StyledAutoCompleteValueContainer = _interopRequireDefault(require("./StyledAutoCompleteValueContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var subComponents = {
  ClearIndicator: _StyledAutoCompleteClearIndicator["default"],
  Container: _StyledAutoCompleteContainer["default"],
  Control: _StyledAutoCompleteControl["default"],
  DropdownIndicator: _StyledAutoCompleteDropdownIndicator["default"],
  IndicatorsContainer: _StyledAutoCompleteIndicatorsContainer["default"],
  Input: _StyledAutoCompleteInput["default"],
  Menu: _StyledAutoCompleteMenu["default"],
  MenuList: _StyledAutoCompleteMenuList["default"],
  MultiValue: _StyledAutoCompleteMultiValue["default"],
  NoOptionsMessage: _StyledAutoCompleteNoOptionsMessage["default"],
  Placeholder: _StyledAutoCompletePlaceholder["default"],
  Option: _StyledAutoCompleteOption["default"],
  ValueContainer: _StyledAutoCompleteValueContainer["default"]
};
exports.subComponents = subComponents;

var _default = _objectSpread({}, subComponents, {
  StyledAutoComplete: _StyledAutoComplete["default"]
});

exports["default"] = _default;