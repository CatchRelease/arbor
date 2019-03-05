"use strict";

var _react = _interopRequireDefault(require("react"));

var _createWithTheme = _interopRequireDefault(require("../../../utils/createWithTheme"));

var _Checkbox = _interopRequireDefault(require("../Checkbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('<Checkbox />', function () {
  var baseProps = {
    id: 'example',
    name: 'example',
    label: 'My Checkbox',
    value: '1'
  };

  var createWithProps = function createWithProps(additionalProps) {
    var props = Object.assign({}, baseProps, additionalProps);
    return (0, _createWithTheme.default)(_react.default.createElement(_Checkbox.default, _objectSpread({}, props)));
  };

  it('properly renders a checkbox', function () {
    var tree = createWithProps();
    expect(tree).toMatchSnapshot();
  });
  it('properly renders a checked checkbox', function () {
    var tree = createWithProps({
      checked: true
    });
    expect(tree).toMatchSnapshot();
  });
  it('properly renders an indeterminate checkbox', function () {
    var tree = createWithProps({
      indeterminate: true
    });
    expect(tree).toMatchSnapshot();
  });
  it('properly renders a checked and indeterminate checkbox', function () {
    var tree = createWithProps({
      indeterminate: true,
      checked: true
    });
    expect(tree).toMatchSnapshot();
  });
  it('properly renders a disabled checkbox', function () {
    var tree = createWithProps({
      disabled: true
    });
    expect(tree).toMatchSnapshot();
  });
  it('properly renders a disabled indeterminate checkbox', function () {
    var tree = createWithProps({
      disabled: true,
      indeterminate: true
    });
    expect(tree).toMatchSnapshot();
  });
  it('properly renders a checkbox with an icon', function () {
    var tree = createWithProps({
      icon: 'cr-logo'
    });
    expect(tree).toMatchSnapshot();
  });
});