"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _createWithTheme = _interopRequireDefault(require("../../../utils/createWithTheme"));

var _Button = _interopRequireDefault(require("../Button"));

var _Icon = _interopRequireDefault(require("../../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Button />', function () {
  describe('Variants', function () {
    ['primary', 'secondary', 'minimal'].forEach(function (variant) {
      it("properly renders a ".concat(variant, " button"), function () {
        var button = (0, _createWithTheme.default)(_react.default.createElement(_Button.default, {
          variant: variant
        }, "Button Label"));
        expect(button).toMatchSnapshot();
      });
      it("properly renders a disabled ".concat(variant, " button"), function () {
        var button = (0, _createWithTheme.default)(_react.default.createElement(_Button.default, {
          disabled: true,
          variant: variant
        }, "Button Label"));
        expect(button).toMatchSnapshot();
      });
      it("applies a class for the ".concat(variant, " button"), function () {
        var button = (0, _enzyme.shallow)(_react.default.createElement(_Button.default, {
          variant: variant
        }, "Button Label"));
        expect(button).toHaveClassName("button--".concat(variant));
      });
    });
  });
  describe('Sizes', function () {
    ['small', 'medium', 'large', 'jumbo'].forEach(function (size) {
      it("properly renders a ".concat(size, " sized button"), function () {
        var button = (0, _createWithTheme.default)(_react.default.createElement(_Button.default, {
          size: size
        }, "Button Label"));
        expect(button).toMatchSnapshot();
      });
      describe('iconStart', function () {
        it('properly renders a button with an iconStart', function () {
          var icon = _react.default.createElement(_Icon.default, {
            name: "cr-logo"
          });

          var button = (0, _createWithTheme.default)(_react.default.createElement(_Button.default, {
            size: size,
            iconStart: icon
          }, "Button with Icon"));
          expect(button).toMatchSnapshot();
        });
      });
      describe('iconEnd', function () {
        it('properly renders a button with an iconEnd', function () {
          var icon = _react.default.createElement(_Icon.default, {
            name: "cr-logo"
          });

          var button = (0, _createWithTheme.default)(_react.default.createElement(_Button.default, {
            size: size,
            iconEnd: icon
          }, "Button with Icon"));
          expect(button).toMatchSnapshot();
        });
      });
      describe('iconStart and iconEnd', function () {
        it('properly renders a button with an iconStart and an iconEdn', function () {
          var iconStart = _react.default.createElement(_Icon.default, {
            name: "cr-logo"
          });

          var iconEnd = _react.default.createElement(_Icon.default, {
            name: "download"
          });

          var button = (0, _createWithTheme.default)(_react.default.createElement(_Button.default, {
            size: size,
            iconStart: iconStart,
            iconEnd: iconEnd
          }, "Button with Icon"));
          expect(button).toMatchSnapshot();
        });
      });
    });
  });
  describe('fullWidth', function () {
    it('properly renders a fullWidth button', function () {
      var button = (0, _createWithTheme.default)(_react.default.createElement(_Button.default, {
        fullWidth: true
      }, "Full Width"));
      expect(button).toMatchSnapshot();
    });
  });
});