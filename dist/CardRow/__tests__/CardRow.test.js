"use strict";

var _react = _interopRequireDefault(require("react"));

var _createWithTheme = _interopRequireDefault(require("../../../utils/createWithTheme"));

var _CardRow = _interopRequireDefault(require("../CardRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<CardRow />', function () {
  it('renders a CardRow properly', function () {
    var tree = (0, _createWithTheme.default)(_react.default.createElement(_CardRow.default, null));
    expect(tree).toMatchSnapshot();
  });
});