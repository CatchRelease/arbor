"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  colorForString: true,
  ratio: true,
  textTransform: true,
  textOverflow: true,
  whiteSpace: true
};
Object.defineProperty(exports, "colorForString", {
  enumerable: true,
  get: function get() {
    return _colorForString["default"];
  }
});
Object.defineProperty(exports, "ratio", {
  enumerable: true,
  get: function get() {
    return _ratio["default"];
  }
});
Object.defineProperty(exports, "textTransform", {
  enumerable: true,
  get: function get() {
    return _textTransform["default"];
  }
});
Object.defineProperty(exports, "textOverflow", {
  enumerable: true,
  get: function get() {
    return _textOverflow["default"];
  }
});
Object.defineProperty(exports, "whiteSpace", {
  enumerable: true,
  get: function get() {
    return _whiteSpace["default"];
  }
});

var _columns = require("./columns");

Object.keys(_columns).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _columns[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _columns[key];
    }
  });
});

var _colorForString = _interopRequireDefault(require("./colorForString"));

var _ratio = _interopRequireDefault(require("./ratio"));

var _textTransform = _interopRequireDefault(require("./textTransform"));

var _textOverflow = _interopRequireDefault(require("./textOverflow"));

var _whiteSpace = _interopRequireDefault(require("./whiteSpace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }