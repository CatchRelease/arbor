"use strict";

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("../../Button"));

var _Heading = _interopRequireDefault(require("../../Heading"));

var _Header = _interopRequireDefault(require("../Header"));

var _createWithTheme = _interopRequireDefault(require("../../../utils/createWithTheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Header />', function () {
  it('renders with heading and no buttons', function () {
    var tree = (0, _createWithTheme.default)(_react.default.createElement(_Header.default, null, _react.default.createElement(_Heading.default.h1, null, "My Heading")));
    expect(tree).toMatchSnapshot();
  });
  it('renders with heading and a button', function () {
    var tree = (0, _createWithTheme.default)(_react.default.createElement(_Header.default, null, _react.default.createElement(_Heading.default.h1, null, "My Heading"), _react.default.createElement(_Button.default, {
      variant: "primary"
    }, "Primary")));
    expect(tree).toMatchSnapshot();
  });
  it('renders with heaeding and multiple buttons', function () {
    var tree = (0, _createWithTheme.default)(_react.default.createElement(_Header.default, null, _react.default.createElement(_Heading.default.h1, null, "My Heading"), _react.default.createElement(_Button.default, {
      variant: "secondary"
    }, "Secondary"), _react.default.createElement(_Button.default, {
      variant: "primary"
    }, "Primary")));
    expect(tree).toMatchSnapshot();
  });
});