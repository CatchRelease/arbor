"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _mountWithTheme = _interopRequireDefault(require("../../../utils/mountWithTheme"));

var _Button = _interopRequireDefault(require("../../Button"));

var _ = _interopRequireDefault(require(".."));

var _Menu = _interopRequireDefault(require("../../Menu"));

var _Popover = _interopRequireDefault(require("../../Popover"));

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('<Dropdown />', function () {
  var baseProps = {
    menuItems: [{
      baseColor: 'grey',
      label: 'Ready to Clear',
      name: 'clearance_state',
      value: 'ready_to_clear'
    }]
  };

  function mountWithProps() {
    var additionalProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var props = Object.assign({}, baseProps, additionalProps);
    return (0, _mountWithTheme.default)(_react.default.createElement(_.default, _objectSpread({}, props), "Click Me"));
  }

  describe('children', function () {
    it('renders a Popover', function () {
      var dropdown = mountWithProps();
      var popover = dropdown.find(_Popover.default);
      expect(popover).toExist();
    });
    describe('Menu', function () {
      it('renders a Menu', function () {
        var dropdown = mountWithProps();
        var instance = dropdown.instance();
        var popover = dropdown.find(_Popover.default);
        var menu = (0, _enzyme.shallow)(_react.default.createElement("div", null, popover.props().content)).find(_Menu.default);
        expect(menu).toExist();
        expect(menu).toHaveProp({
          menuItems: baseProps.menuItems,
          onChange: instance.onChange,
          selected: undefined
        });
      });
      it('sets initial selected item', function () {
        var dropdown = mountWithProps({
          selected: 'ready_to_clear'
        });
        var popover = dropdown.find(_Popover.default);
        var menu = (0, _enzyme.shallow)(_react.default.createElement("div", null, popover.props().content)).find(_Menu.default);
        expect(menu).toHaveProp({
          selected: 'ready_to_clear'
        });
      });
    });
    it('renders a trigger', function () {
      var dropdown = mountWithProps();
      expect(dropdown.find(_Button.default)).toExist();
      expect(dropdown).toHaveProp({
        children: dropdown.props().children
      });
    });
  });
  describe('onChange', function () {
    it('calls the onChange callback', function () {
      var onChange = jest.fn();
      var dropdown = mountWithProps({
        onChange: onChange
      });
      dropdown.instance().onChange('ready_to_clear');
      expect(onChange).toHaveBeenCalledWith('ready_to_clear');
    });
    it('closes the popover', function () {
      var dropdown = mountWithProps();
      var instance = dropdown.instance();
      var popoverCloseSpy = jest.spyOn(instance.popover.current, 'close');
      instance.onChange('ready_to_clear');
      expect(popoverCloseSpy).toHaveBeenCalledTimes(1);
    });
  });
  describe('onOpen', function () {
    it('focus the first item', function () {
      var dropdown = mountWithProps();
      var instance = dropdown.instance(); // open the popover to render the menu

      instance.popover.current.open();
      var focusMenuItemSpy = jest.spyOn(instance.menu.current, 'focusMenuItem');
      instance.onOpen();
      expect(focusMenuItemSpy).toHaveBeenCalledTimes(1);
      expect(focusMenuItemSpy).toHaveBeenLastCalledWith(0);
    });
  });
  describe('onKeyDown', function () {
    context('arrow down', function () {
      var activeElementSpy;
      var dropdown;
      beforeEach(function () {
        dropdown = mountWithProps();
        activeElementSpy = jest.spyOn(document, 'activeElement', 'get');
      });
      context('button trigger not focused', function () {
        beforeEach(function () {
          activeElementSpy.mockReturnValue(null);
        });
        it('does not open popover', function () {
          var instance = dropdown.instance();
          var popoverOpenSpy = jest.spyOn(instance.popover.current, 'open');
          instance.onKeyDown({
            key: _constants.ARROW_DOWN,
            preventDefault: function preventDefault() {
              return null;
            }
          });
          expect(popoverOpenSpy).not.toHaveBeenCalled();
        });
      });
      context('button trigger focused', function () {
        beforeEach(function () {
          var buttonDOMNode = dropdown.find('button').getDOMNode();
          activeElementSpy.mockReturnValue(buttonDOMNode);
        });
        it('opens popover', function () {
          var instance = dropdown.instance();
          var popoverOpenSpy = jest.spyOn(instance.popover.current, 'open');
          instance.onKeyDown({
            key: _constants.ARROW_DOWN,
            preventDefault: function preventDefault() {
              return null;
            }
          });
          expect(popoverOpenSpy).toHaveBeenCalledTimes(1);
          expect(popoverOpenSpy).toHaveBeenLastCalledWith(instance.onOpen);
        });
      });
    });
  });
});