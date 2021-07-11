"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "brandFont", {
  enumerable: true,
  get: function get() {
    return _brandFont["default"];
  }
});
Object.defineProperty(exports, "fontWeights", {
  enumerable: true,
  get: function get() {
    return _fontWeights["default"];
  }
});
Object.defineProperty(exports, "FontWeight", {
  enumerable: true,
  get: function get() {
    return _fontWeights.FontWeight;
  }
});
Object.defineProperty(exports, "fonts", {
  enumerable: true,
  get: function get() {
    return _fonts["default"];
  }
});
Object.defineProperty(exports, "sizes", {
  enumerable: true,
  get: function get() {
    return _sizes["default"];
  }
});
Object.defineProperty(exports, "FontSize", {
  enumerable: true,
  get: function get() {
    return _sizes.FontSize;
  }
});

var _brandFont = _interopRequireDefault(require("./brandFont"));

var _fontWeights = _interopRequireWildcard(require("./fontWeights"));

var _fonts = _interopRequireDefault(require("./fonts"));

var _sizes = _interopRequireWildcard(require("./sizes"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }