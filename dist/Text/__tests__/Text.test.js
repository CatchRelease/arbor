"use strict";

var _react = _interopRequireDefault(require("react"));

var _createWithTheme = _interopRequireDefault(require("../../../utils/createWithTheme"));

var _Text = _interopRequireDefault(require("../Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Text />', function () {
  it('properly renders a Text component', function () {
    var tree = (0, _createWithTheme.default)(_react.default.createElement(_Text.default, null, "The quick brown fox jumps over the lazy dog"));
    expect(tree).toMatchSnapshot();
  });
});