"use strict";

var _react = _interopRequireDefault(require("react"));

var _createWithTheme = _interopRequireDefault(require("../../../utils/createWithTheme"));

var _Link = _interopRequireDefault(require("../Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Link />', function () {
  describe('Variants', function () {
    ['default', 'muted'].forEach(function (variant) {
      it("properly renders a ".concat(variant, " Link"), function () {
        var link = (0, _createWithTheme.default)(_react.default.createElement(_Link.default, {
          href: "#test",
          variant: variant
        }, "Link"));
        expect(link).toMatchSnapshot();
      });
    });
  });
});