"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Modal = void 0;

var _reactModal = _interopRequireDefault(require("react-modal"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = require("@emotion/react");

var _buildModalCss = _interopRequireDefault(require("./buildModalCss"));

var _jsxRuntime = require("@emotion/react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Modal = function Modal(_ref) {
  var children = _ref.children,
      modalCss = _ref.modalCss,
      overlayCss = _ref.overlayCss,
      theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ["children", "modalCss", "overlayCss", "theme"]);

  var combinedModalCss = (0, _buildModalCss["default"])({
    theme: theme,
    modalCss: modalCss,
    overlayCss: overlayCss
  });
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsx)(_react.Global, {
      styles: combinedModalCss
    }), (0, _jsxRuntime.jsx)(_reactModal["default"], _objectSpread(_objectSpread({
      overlayClassName: "ArborModalOverlay",
      className: "ArborModal"
    }, props), {}, {
      children: children
    }))]
  });
};

exports.Modal = Modal;
Modal.propTypes = {
  /**
   * Content to be displayed with the modal
   */
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].arrayOf(_propTypes["default"].node)]).isRequired,

  /**
   * Optional overrides of the modal css. This will be injected via emotion's
   * Global style component.
   */
  modalCss: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),

  /**
   * Optional overrides to the overlay CSS. This will be injected via emotion's
   * Global style component.
   */
  overlayCss: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func])
};
Modal.defaultProps = {
  modalCss: {},
  overlayCss: {}
};

var _default = (0, _react.withTheme)(Modal);

exports["default"] = _default;