"use strict";

var _react = _interopRequireDefault(require("react"));

var _createWithTheme = _interopRequireDefault(require("../../../utils/createWithTheme"));

var _Heading = _interopRequireDefault(require("../Heading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(function (variant) {
  test("renders a ".concat(variant), function () {
    var Variant = _Heading.default[variant];
    var tree = (0, _createWithTheme.default)(_react.default.createElement(Variant, null, "Hello World"));
    expect(tree).toMatchSnapshot();
  });
});