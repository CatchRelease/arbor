"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var withComponent = function withComponent(srcComponent, destComponent) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      defaultProps = _ref.defaultProps,
      propTypes = _ref.propTypes;

  var component = srcComponent.withComponent(destComponent, {
    target: "e14y4oj90",
    label: "component"
  }); // eslint-disable-line arbor/use-create-with-component

  component.defaultProps = _objectSpread({}, srcComponent.defaultProps, defaultProps);
  component.propTypes = _objectSpread({}, srcComponent.propTypes, propTypes);
  return component;
};

var _default = withComponent;
exports.default = _default;