"use strict";

var _react = _interopRequireDefault(require("react"));

var _emotionTheming = require("emotion-theming");

var _createWithTheme = _interopRequireDefault(require("../../../utils/createWithTheme"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Icon />', function () {
  it('renders an icon properly', function () {
    var tree = (0, _createWithTheme.default)(_react.default.createElement(_Icon.default, {
      name: "my-icon"
    }));
    expect(tree).toMatchSnapshot();
  });
  it('applies a class based off the icon name using the theme prefix', function () {
    var customTheme = {
      iconFontPrefix: 'super'
    };
    var icon = (0, _createWithTheme.default)(_react.default.createElement(_emotionTheming.ThemeProvider, {
      theme: customTheme
    }, _react.default.createElement(_Icon.default, {
      name: "example-icon"
    })));
    expect(icon).toMatchSnapshot();
  });
  it('applies a class of just the icon font prefix', function () {
    var customTheme = {
      iconFontPrefix: 'super'
    };
    var icon = (0, _createWithTheme.default)(_react.default.createElement(_emotionTheming.ThemeProvider, {
      theme: customTheme
    }, _react.default.createElement(_Icon.default, {
      name: "example-icon"
    })));
    expect(icon).toMatchSnapshot();
  });
  ['90', '180', '270'].forEach(function (rotation) {
    it("supports ".concat(rotation, " degree rotation"), function () {
      var tree = (0, _createWithTheme.default)(_react.default.createElement(_Icon.default, {
        rotation: rotation,
        name: 'my-icon'
      }));
      expect(tree).toMatchSnapshot();
    });
  });
});