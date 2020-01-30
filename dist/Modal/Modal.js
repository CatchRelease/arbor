"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Modal = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactModal = _interopRequireDefault(require("react-modal"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@emotion/core");

var _emotionTheming = require("emotion-theming");

var _buildModalCss = _interopRequireDefault(require("./buildModalCss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
  return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_core.Global, {
    styles: combinedModalCss
  }), _react["default"].createElement(_reactModal["default"], _extends({
    overlayClassName: "ArborModalOverlay",
    className: "ArborModal"
  }, props), children));
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

var _default = (0, _emotionTheming.withTheme)(Modal);

exports["default"] = _default;