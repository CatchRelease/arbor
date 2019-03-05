"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _mountWithTheme = _interopRequireDefault(require("../../../utils/mountWithTheme"));

var _Popover = _interopRequireDefault(require("../Popover"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mountNode = document.createElement('div');
document.body.appendChild(mountNode);

var mount = function mount(element) {
  return (0, _mountWithTheme.default)(element, {
    attachTo: mountNode
  });
};

var simulateClick = function simulateClick(node) {
  var clickEvent = new window.MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
  });
  node.dispatchEvent(clickEvent);
};

describe('<Popover />', function () {
  var renderPopover = function renderPopover() {
    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello World';
    return (0, _enzyme.shallow)(_react.default.createElement(_Popover.default, {
      content: content
    }, _react.default.createElement("button", {
      type: "button"
    }, "Trigger")));
  };

  it('is closed by default', function () {
    var popover = renderPopover();
    expect(popover.state().isOpen).toBe(false);
  });
  describe('outside clicks', function () {
    describe('clicking outisde of the popover', function () {
      it('closes the popover', function () {
        var popover = renderPopover();
        popover.setState({
          isOpen: true
        });
        var wrapper = mount(_react.default.createElement("div", null, _react.default.createElement("div", {
          id: "outside"
        }, "Outside of the popover"), popover));
        var outsideNode = wrapper.find('#outside').getDOMNode();
        simulateClick(outsideNode);
        expect(popover.state().isOpen).toBe(false);
      });
    });
    describe('clicking inside the popover', function () {
      it('does not cloes the popover', function () {
        var popover = renderPopover(_react.default.createElement("button", {
          type: "submit"
        }, "Inside the popover"));
        popover.setState({
          isOpen: true
        });
        var wrapper = mount(_react.default.createElement("div", null, _react.default.createElement("div", {
          id: "outside"
        }, "Outside of the popover"), popover));
        var node = wrapper.find('button').filterWhere(function (button) {
          return button.props().children === 'Inside the popover';
        }).getDOMNode();
        simulateClick(node);
        expect(popover.state().isOpen).toBe(true);
      });
    });
  });
  describe('pressing escape', function () {
    it('closes the popover', function () {
      var popover = renderPopover(_react.default.createElement("button", {
        type: "submit"
      }, "Inside the popover"));
      popover.setState({
        isOpen: true
      });
      var wrapper = mount(_react.default.createElement("div", null, _react.default.createElement("div", {
        id: "outside"
      }, "Outside of the popover"), popover));
      var node = wrapper.find('button').filterWhere(function (button) {
        return button.props().children === 'Inside the popover';
      }).getDOMNode();
      var event = new window.KeyboardEvent('keypress', {
        key: 'Escape'
      });
      node.dispatchEvent(event);
      expect(popover.state().isOpen).toBe(false);
    });
  });
  describe('Trigger', function () {
    describe('onClick', function () {
      context('popover is closed', function () {
        it('opens the popover', function () {
          var popover = (0, _enzyme.shallow)(_react.default.createElement(_Popover.default, {
            content: "Hello World"
          }, _react.default.createElement("button", {
            type: "button"
          }, "Popover")));
          popover.find('button').simulate('click');
          expect(popover.state().isOpen).toBe(true);
        });
      });
      context('popover is open', function () {
        it('closes the popover', function () {
          var popover = (0, _enzyme.shallow)(_react.default.createElement(_Popover.default, {
            content: "Hello World"
          }, _react.default.createElement("button", {
            type: "button"
          }, "Popover")));
          popover.setState({
            isOpen: true
          });
          popover.find('button').simulate('click');
          expect(popover.state().isOpen).toBe(false);
        });
      });
    });
  });
  describe('open', function () {
    var onOpenSpy;
    var popover;
    beforeEach(function () {
      onOpenSpy = jest.fn();
      popover = (0, _enzyme.shallow)(_react.default.createElement(_Popover.default, {
        content: "Hello World",
        onOpen: onOpenSpy
      }, _react.default.createElement("button", {
        type: "button"
      }, "Popover")));
    });
    context('not yet opened', function () {
      beforeEach(function () {
        popover.setState({
          isOpen: false
        });
      });
      it('opens the popover', function () {
        popover.instance().open();
        expect(popover).toHaveState('isOpen', true);
      });
      it('calls the onOpen prop', function () {
        popover.instance().open();
        expect(onOpenSpy).toHaveBeenCalledTimes(1);
      });
      it('calls the provided callback', function () {
        var callbackSpy = jest.fn();
        popover.instance().open(callbackSpy);
        expect(callbackSpy).toHaveBeenCalledTimes(1);
      });
    });
    context('already opened', function () {
      beforeEach(function () {
        popover.setState({
          isOpen: true
        });
      });
      it('does not call the onOpen prop', function () {
        popover.instance().open();
        expect(onOpenSpy).not.toHaveBeenCalled();
      });
      it('does not call the provided callback', function () {
        var callbackSpy = jest.fn();
        popover.instance().open(callbackSpy);
        expect(callbackSpy).not.toHaveBeenCalled();
      });
    });
  });
  describe('close', function () {
    it('calls the onClose callback if provided', function () {
      var onCloseSpy = jest.fn();
      var popover = (0, _enzyme.shallow)(_react.default.createElement(_Popover.default, {
        content: "Hello World",
        onClose: onCloseSpy
      }, _react.default.createElement("button", {
        type: "button"
      }, "Popover")));
      popover.setState({
        isOpen: true
      });
      popover.instance().close();
      expect(onCloseSpy).toHaveBeenCalled();
    });
  });
});