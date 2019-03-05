"use strict";

var _react = _interopRequireDefault(require("react"));

var _mountWithTheme = _interopRequireDefault(require("../../../utils/mountWithTheme"));

var _createWithTheme = _interopRequireDefault(require("../../../utils/createWithTheme"));

var _constants = require("../../constants");

var _MenuItem = _interopRequireDefault(require("../MenuItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('<MenuItem />', function () {
  var noop = function noop() {
    return null;
  };

  var baseProps = {
    label: 'Ready to Clear',
    baseColor: 'grey',
    name: 'clearance_state',
    value: 'ready_to_clear',
    id: 'menu-item_clearance_state_ready_to_clear'
  };

  function createWithProps(additionalProps) {
    var props = Object.assign({}, baseProps, additionalProps);
    return (0, _createWithTheme.default)(_react.default.createElement(_MenuItem.default, _objectSpread({}, props)));
  }

  function mountWithProps(additionalProps) {
    var props = Object.assign({}, baseProps, additionalProps);
    return (0, _mountWithTheme.default)(_react.default.createElement(_MenuItem.default, _objectSpread({}, props)));
  }

  it('renders a MenuItem properly', function () {
    var menuItem = createWithProps();
    expect(menuItem).toMatchSnapshot();
  });
  it('renders a selected MenuItem properly', function () {
    var menuItem = createWithProps({
      selected: true
    });
    expect(menuItem).toMatchSnapshot();
  });
  describe('onClick', function () {
    it('calls the onSelect callback with the value', function () {
      var onSelect = jest.fn();
      var value = 'ready_to_clear';
      var menuItem = mountWithProps({
        onSelect: onSelect,
        value: value
      });
      menuItem.simulate('click');
      expect(onSelect).toHaveBeenCalledWith(value);
    });
  });
  describe('keydown', function () {
    var value = 'ready_to_clear';

    var behavesLikeKeyboardSelector = function behavesLikeKeyboardSelector(key) {
      context('menu item is focused', function () {
        it('calls the onSelect callback', function () {
          var onSelect = jest.fn();
          var menu = mountWithProps({
            onSelect: onSelect,
            value: value,
            focused: true
          });
          menu.instance().onKeyDown({
            key: key,
            preventDefault: noop
          });
          expect(onSelect).toHaveBeenCalledWith(value);
        });
        it('prevents the default keydown event', function () {
          var menu = mountWithProps({
            focused: true
          });
          var preventDefault = jest.fn();
          menu.instance().onKeyDown({
            key: key,
            preventDefault: preventDefault
          });
          expect(preventDefault).toHaveBeenCalled();
        });
      });
      context('menu item is not focused', function () {
        it('does not call the onSelect callback', function () {
          var onSelect = jest.fn();
          var menu = mountWithProps({
            onSelect: onSelect,
            value: value,
            focused: false
          });
          menu.instance().onKeyDown({
            key: key
          });
          expect(onSelect).not.toHaveBeenCalled();
        });
      });
    };

    context('Enter key', function () {
      behavesLikeKeyboardSelector(_constants.ENTER_KEY);
    });
    context('Spacebar', function () {
      behavesLikeKeyboardSelector(_constants.SPACEBAR);
    });
    context('Other key than Enter or space', function () {
      context('menu item is focused', function () {
        it('does not call the onSelect callback', function () {
          var onSelect = jest.fn();
          var menu = mountWithProps({
            onSelect: onSelect,
            value: value,
            focused: true
          });
          menu.instance().onKeyDown({
            key: 'ArrowDown'
          });
          expect(onSelect).not.toHaveBeenCalled();
        });
      });
    });
  });
});