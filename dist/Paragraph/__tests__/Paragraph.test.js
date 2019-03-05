"use strict";

var _react = _interopRequireDefault(require("react"));

var _jestEmotion = require("jest-emotion");

var _createWithTheme = _interopRequireDefault(require("../../../utils/createWithTheme"));

var _Paragraph = _interopRequireDefault(require("../Paragraph"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

expect.extend(_jestEmotion.matchers);
describe('<Paragraph />', function () {
  describe('props', function () {
    describe('variant', function () {
      ['ui', 'longForm', 'tiny'].forEach(function (variant) {
        it("renders a ".concat(variant, " variant"), function () {
          var tree = (0, _createWithTheme.default)(_react.default.createElement(_Paragraph.default, {
            variant: variant
          }, "Hello World"));
          expect(tree).toMatchSnapshot();
        });
      });
    });
  });
});