"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Icon = _interopRequireDefault(require("../Icon"));

var _Text = _interopRequireDefault(require("../Text"));

var _CheckboxIcon = _interopRequireDefault(require("./CheckboxIcon"));

var _CheckboxInput = _interopRequireDefault(require("./CheckboxInput"));

var _CheckboxLabel = _interopRequireDefault(require("./CheckboxLabel"));

var _StyledCheckbox = _interopRequireDefault(require("./StyledCheckbox"));

var _jsxRuntime = require("@emotion/react/jsx-runtime");

var _excluded = ["checked", "disabled", "icon", "id", "indeterminate", "isInvalid", "label", "name", "onChange", "value"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Checkbox = function Checkbox(_ref) {
  var _ref$checked = _ref.checked,
      checked = _ref$checked === void 0 ? false : _ref$checked,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      icon = _ref.icon,
      id = _ref.id,
      _ref$indeterminate = _ref.indeterminate,
      indeterminate = _ref$indeterminate === void 0 ? false : _ref$indeterminate,
      _ref$isInvalid = _ref.isInvalid,
      isInvalid = _ref$isInvalid === void 0 ? false : _ref$isInvalid,
      label = _ref.label,
      name = _ref.name,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value,
      props = _objectWithoutProperties(_ref, _excluded);

  return (0, _jsxRuntime.jsxs)(_CheckboxLabel["default"], _objectSpread(_objectSpread({
    alignItems: "center",
    my: "regular"
  }, props), {}, {
    children: [(0, _jsxRuntime.jsx)(_CheckboxInput["default"], {
      id: id,
      type: "checkbox",
      name: name,
      value: value,
      checked: checked || indeterminate,
      onChange: onChange,
      disabled: disabled,
      "aria-invalid": isInvalid
    }), (0, _jsxRuntime.jsx)(_StyledCheckbox["default"], {
      disabled: disabled,
      checked: checked,
      indeterminate: indeterminate,
      children: (0, _jsxRuntime.jsx)(_CheckboxIcon["default"], {
        checked: checked,
        indeterminate: indeterminate
      })
    }), icon && (0, _jsxRuntime.jsx)(_Icon["default"], {
      fontSize: "24px",
      name: icon,
      color: disabled ? 'icon.disabled' : 'icon.default',
      ml: "smaller"
    }), (0, _jsxRuntime.jsx)(_Text["default"], {
      as: "span",
      fontSize: "size4",
      color: disabled ? 'text.disabled' : 'text.default',
      ml: icon ? 'smallest' : 'smaller',
      children: label
    })]
  }));
};

var _default = Checkbox;
exports["default"] = _default;