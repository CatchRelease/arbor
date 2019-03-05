"use strict";

var _react = _interopRequireDefault(require("react"));

var _mountWithTheme = _interopRequireDefault(require("../../../utils/mountWithTheme"));

var _Tooltip = _interopRequireDefault(require("../Tooltip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Tooltip />', function () {
  it('properly renders a tooltip', function () {
    var tree = (0, _mountWithTheme.default)(_react.default.createElement(_Tooltip.default, {
      text: "Hello World"
    }, _react.default.createElement("p", null, "I have a tooltip")));
    expect(tree).toMatchSnapshot();
  });
});