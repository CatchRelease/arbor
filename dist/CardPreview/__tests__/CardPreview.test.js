"use strict";

var _react = _interopRequireDefault(require("react"));

var _createWithTheme = _interopRequireDefault(require("../../../utils/createWithTheme"));

var _CardPreview = _interopRequireDefault(require("../CardPreview"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<CardPreview />', function () {
  it('renders a CardPreview properly', function () {
    var tree = (0, _createWithTheme.default)(_react.default.createElement(_CardPreview.default, {
      image: "example.gif"
    }));
    expect(tree).toMatchSnapshot();
  });
});