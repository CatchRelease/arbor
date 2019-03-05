"use strict";

var _react = _interopRequireDefault(require("react"));

var _createWithTheme = _interopRequireDefault(require("../../../utils/createWithTheme"));

var _Card = _interopRequireDefault(require("../Card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Card />', function () {
  it('renders a Card properly', function () {
    var tree = (0, _createWithTheme.default)(_react.default.createElement(_Card.default, null));
    expect(tree).toMatchSnapshot();
  });
});