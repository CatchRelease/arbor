"use strict";

var _react = _interopRequireDefault(require("react"));

var _createWithTheme = _interopRequireDefault(require("../../../utils/createWithTheme"));

var _CardActions = _interopRequireDefault(require("../CardActions"));

var _Icon = _interopRequireDefault(require("../../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<CardActions', function () {
  it('renders the CardActions component properly', function () {
    var tree = (0, _createWithTheme.default)(_react.default.createElement(_CardActions.default, null, _react.default.createElement(_Icon.default, {
      name: "download"
    }), _react.default.createElement(_Icon.default, {
      name: "chat-bubble-outline"
    })));
    expect(tree).toMatchSnapshot();
  });
});