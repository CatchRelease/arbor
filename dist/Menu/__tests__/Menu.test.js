"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _constants = require("../../constants");

var _Menu = _interopRequireDefault(require("../Menu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('<Menu />', function () {
  var baseProps = {
    menuItems: [{
      baseColor: 'grey',
      label: 'Ready to Clear',
      name: 'clearance_state',
      value: 'ready_to_clear'
    }]
  };

  function shallowWithProps() {
    var additionalProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var props = Object.assign({}, baseProps, additionalProps);
    return (0, _enzyme.shallow)(_react.default.createElement(_Menu.default, _objectSpread({}, props)));
  }

  describe('children', function () {
    it('renders each menuItem as a MenuItem', function () {
      var menuItems = [{
        baseColor: 'grey',
        label: 'Ready to Clear',
        name: 'clearance_state',
        value: 'ready_to_clear'
      }, {
        baseColor: 'green',
        label: 'License Acquired',
        name: 'clearance_state',
        value: 'license_acquired'
      }];
      var menu = shallowWithProps({
        menuItems: menuItems
      });
      expect(menu.find('MenuItem').map(function (menuItem) {
        return menuItem.props().label;
      })).toEqual(['Ready to Clear', 'License Acquired']);
    });
    it('generates an id for menu item', function () {
      var menuItems = [{
        baseColor: 'grey',
        label: 'Ready to Clear',
        name: 'clearance_state',
        value: 'ready_to_clear'
      }];
      var menu = shallowWithProps({
        menuItems: menuItems
      });
      expect(menu.find('MenuItem').first().props().id).toEqual('menu-item_clearance_state_ready_to_clear');
    });
    it('properly sets a MenuItem as selected', function () {
      var menuItems = [{
        baseColor: 'grey',
        label: 'Ready to Clear',
        name: 'clearance_state',
        value: 'ready_to_clear'
      }];
      var menu = shallowWithProps({
        menuItems: menuItems,
        selected: 'ready_to_clear'
      });
      expect(menu.find('MenuItem').props().selected).toBe(true);
    });
    it('properly sets other MenuItems as not selected', function () {
      var menuItems = [{
        baseColor: 'green',
        label: 'License Acquired',
        name: 'clearance_state',
        value: 'license_acquired'
      }];
      var menu = shallowWithProps({
        menuItems: menuItems,
        selected: 'ready_to_clear'
      });
      expect(menu.find('MenuItem').props().selected).toBe(false);
    });
    it('sets aria-activedescendant to focused menu item id', function () {
      var menuItems = [{
        baseColor: 'grey',
        label: 'Ready to Clear',
        name: 'clearance_state',
        value: 'ready_to_clear'
      }, {
        baseColor: 'green',
        label: 'License Acquired',
        name: 'clearance_state',
        value: 'license_acquired'
      }];
      var menu = shallowWithProps({
        menuItems: menuItems
      });
      menu.setState({
        currentlyFocused: 1
      });
      expect(menu.props()['aria-activedescendant']).toEqual('menu-item_clearance_state_license_acquired');
    });
    it('properly flags the focused menu item', function () {
      var menuItems = [{
        baseColor: 'grey',
        label: 'Ready to Clear',
        name: 'clearance_state',
        value: 'ready_to_clear'
      }];
      var menu = shallowWithProps({
        menuItems: menuItems
      });
      menu.setState({
        currentlyFocused: 0
      });
      expect(menu.find('MenuItem').props().focused).toBe(true);
    });
    it('does not flag unfocused menu items as focused', function () {
      var menuItems = [{
        baseColor: 'grey',
        label: 'Ready to Clear',
        name: 'clearance_state',
        value: 'ready_to_clear'
      }];
      var menu = shallowWithProps({
        menuItems: menuItems
      });
      menu.setState({
        currentlyFocused: 1
      });
      expect(menu.find('MenuItem').props().focused).toBe(false);
    });
  });
  describe('onMenuItemSelect', function () {
    it('updates selected state', function () {
      var menu = shallowWithProps();
      menu.instance().onMenuItemSelect('ready_to_clear');
      expect(menu.state().selected).toEqual('ready_to_clear');
    });
    it('calls the onChange callback', function () {
      var onChange = jest.fn();
      var menu = shallowWithProps({
        onChange: onChange
      });
      menu.instance().onMenuItemSelect('ready_to_clear');
      expect(onChange).toHaveBeenCalledWith('ready_to_clear');
    });
  });
  describe('initial state', function () {
    it('sets selected to null by default', function () {
      var menu = shallowWithProps();
      expect(menu.state().selected).toBe(undefined);
    });
    it('sets initial selected item if specified', function () {
      var menu = shallowWithProps({
        selected: 'ready_to_clear'
      });
      expect(menu.state().selected).toEqual('ready_to_clear');
    });
  });
  describe('componentDidMount', function () {
    it('attaches an event listener for keydown events', function () {
      document.addEventListener = jest.fn();
      var menu = shallowWithProps();
      menu.instance().componentDidMount();
      expect(document.addEventListener).toHaveBeenCalledWith('keydown', menu.instance().onKeyDown, true);
    });
    describe('componentWillUnmount', function () {
      document.removeEventListener = jest.fn();
      var menu = shallowWithProps();
      menu.instance().componentWillUnmount();
      expect(document.removeEventListener).toHaveBeenCalledWith('keydown', menu.instance().onKeyDown, true);
    });
  });
  describe('onKeyDown', function () {
    context('arrow down', function () {
      context('nothing is focused', function () {
        it('focuses the first menu item', function () {
          var menuItems = [{
            baseColor: 'grey',
            label: 'Ready to Clear',
            name: 'clearance_state',
            value: 'ready_to_clear'
          }];
          var menu = shallowWithProps({
            menuItems: menuItems
          });
          menu.instance().onKeyDown({
            key: _constants.ARROW_DOWN
          });
          expect(menu.state().currentlyFocused).toBe(0);
        });
      });
      context('an item is already focused', function () {
        context('a next item exists', function () {
          it('focuses the next item', function () {
            var menuItems = [{
              baseColor: 'grey',
              label: 'Ready to Clear',
              name: 'clearance_state',
              value: 'ready_to_clear'
            }, {
              baseColor: 'green',
              label: 'License Acquired',
              name: 'clearance_state',
              value: 'license_acquired'
            }];
            var menu = shallowWithProps({
              menuItems: menuItems
            });
            menu.setState({
              currentlyFocused: 0
            });
            menu.instance().onKeyDown({
              key: _constants.ARROW_DOWN
            });
            expect(menu.state().currentlyFocused).toBe(1);
          });
        });
        context('focused item is last menu item', function () {
          it('does not change the focused menu item', function () {
            var menuItems = [{
              baseColor: 'grey',
              label: 'Ready to Clear',
              name: 'clearance_state',
              value: 'ready_to_clear'
            }];
            var menu = shallowWithProps({
              menuItems: menuItems
            });
            menu.setState({
              currentlyFocused: 0
            });
            menu.instance().onKeyDown({
              key: _constants.ARROW_DOWN
            });
            expect(menu.state().currentlyFocused).toBe(0);
          });
        });
      });
    });
    describe('arrow up', function () {
      context('nothing is focused', function () {
        it('focuses the first menu item', function () {
          var menuItems = [{
            baseColor: 'grey',
            label: 'Ready to Clear',
            name: 'clearance_state',
            value: 'ready_to_clear'
          }];
          var menu = shallowWithProps({
            menuItems: menuItems
          });
          menu.instance().onKeyDown({
            key: _constants.ARROW_UP
          });
          expect(menu.state().currentlyFocused).toBe(0);
        });
      });
      context('already focusing first item', function () {
        it('does not change the focus', function () {
          var menuItems = [{
            baseColor: 'grey',
            label: 'Ready to Clear',
            name: 'clearance_state',
            value: 'ready_to_clear'
          }];
          var menu = shallowWithProps({
            menuItems: menuItems
          });
          menu.setState({
            currentlyFocused: 0
          });
          menu.instance().onKeyDown({
            key: _constants.ARROW_UP
          });
          expect(menu.state().currentlyFocused).toBe(0);
        });
      });
      context('previous item exists to focus', function () {
        it('focuses the previous item', function () {
          var menuItems = [{
            baseColor: 'grey',
            label: 'Ready to Clear',
            name: 'clearance_state',
            value: 'ready_to_clear'
          }, {
            baseColor: 'green',
            label: 'License Acquired',
            name: 'clearance_state',
            value: 'license_acquired'
          }];
          var menu = shallowWithProps({
            menuItems: menuItems
          });
          menu.setState({
            currentlyFocused: 1
          });
          menu.instance().onKeyDown({
            key: _constants.ARROW_UP
          });
          expect(menu.state().currentlyFocused).toBe(0);
        });
      });
    });
    describe('Home key', function () {
      it('focuses the first item', function () {
        var menuItems = [{
          baseColor: 'grey',
          label: 'Ready to Clear',
          name: 'clearance_state',
          value: 'ready_to_clear'
        }, {
          baseColor: 'blue',
          label: 'Clearance Requested',
          name: 'clearance_state',
          value: 'clearance_requested'
        }, {
          baseColor: 'green',
          label: 'License Acquired',
          name: 'clearance_state',
          value: 'license_acquired'
        }];
        var menu = shallowWithProps({
          menuItems: menuItems
        });
        menu.setState({
          currentlyFocused: 2
        });
        menu.instance().onKeyDown({
          key: _constants.HOME_KEY
        });
        expect(menu.state().currentlyFocused).toBe(0);
      });
    });
    describe('End key', function () {
      it('focuses the first item', function () {
        var menuItems = [{
          baseColor: 'grey',
          label: 'Ready to Clear',
          name: 'clearance_state',
          value: 'ready_to_clear'
        }, {
          baseColor: 'blue',
          label: 'Clearance Requested',
          name: 'clearance_state',
          value: 'clearance_requested'
        }, {
          baseColor: 'green',
          label: 'License Acquired',
          name: 'clearance_state',
          value: 'license_acquired'
        }];
        var menu = shallowWithProps({
          menuItems: menuItems
        });
        menu.setState({
          currentlyFocused: 0
        });
        menu.instance().onKeyDown({
          key: _constants.END_KEY
        });
        expect(menu.state().currentlyFocused).toBe(2);
      });
    });
  });
});