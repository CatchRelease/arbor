"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createWithTheme = _interopRequireDefault(require("../../../utils/createWithTheme"));

var _intents = _interopRequireDefault(require("../intents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var noop = function noop() {
  return null;
};

var behavesLikeAnAlert = function behavesLikeAnAlert(Component) {
  var render = function render() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0, _createWithTheme["default"])(_react["default"].createElement(Component, _extends({
      message: "Hey look, an alert!"
    }, props)));
  };

  [undefined].concat(_toConsumableArray(_intents["default"])).forEach(function (intent) {
    var readableIntent = intent || 'no';
    it("property renders a banner alert with ".concat(readableIntent, " intent"), function () {
      var alert = render({
        intent: intent
      });
      expect(alert).toMatchSnapshot();
    });
    context('with details', function () {
      it("property renders a banner alert, with ".concat(readableIntent, " intent, with details"), function () {
        var alert = render({
          details: 'Here are some alert details',
          intent: intent
        });
        expect(alert).toMatchSnapshot();
      });
    });
    context('with onClose', function () {
      it("property renders a banner alert, with ".concat(readableIntent, " intent, with an on close"), function () {
        var alert = render({
          intent: intent,
          onClose: noop
        });
        expect(alert).toMatchSnapshot();
      });
    });
  });
};

var _default = behavesLikeAnAlert;
exports["default"] = _default;