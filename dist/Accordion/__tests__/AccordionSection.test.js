"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _createWithTheme = _interopRequireDefault(require("../../../utils/createWithTheme"));

var _AccordionSection = _interopRequireDefault(require("../AccordionSection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('<AccordionSection />', function () {
  var baseProps = {
    children: _react.default.createElement("p", null, "Hello World"),
    header: 'My Accordion',
    panelId: 'my-accordion-1'
  };

  var controlledProps = _objectSpread({
    isOpen: false
  }, baseProps);

  var renderControlled = function renderControlled(additionalProps) {
    var props = Object.assign({}, controlledProps, additionalProps);
    return (0, _enzyme.shallow)(_react.default.createElement(_AccordionSection.default, _objectSpread({}, props)));
  };

  var renderWithState = function renderWithState() {
    var props = arguments.length === 1 ? baseProps : Object.assign({}, baseProps, arguments.length <= 0 ? undefined : arguments[0]);
    var state = arguments.length === 1 ? arguments.length <= 0 ? undefined : arguments[0] : arguments.length <= 1 ? undefined : arguments[1];
    var rendered = (0, _enzyme.shallow)(_react.default.createElement(_AccordionSection.default, _objectSpread({}, props)));
    rendered.setState(state);
    return rendered;
  };

  describe('render', function () {
    var createTree = function createTree() {
      var additionalProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return (0, _createWithTheme.default)(_react.default.createElement(_AccordionSection.default, _objectSpread({}, baseProps, additionalProps)));
    };

    context('accordion is open', function () {
      it('renders with the panel visible', function () {
        var tree = createTree({
          isOpen: true
        });
        expect(tree).toMatchSnapshot();
      });
    });
    context('accordion is closed', function () {
      it('renders with the panel hidden', function () {
        var tree = createTree({
          isOpen: false
        });
        expect(tree).toMatchSnapshot();
      });
    });
  });
  it('has a default state', function () {
    var section = renderControlled();
    expect(section).toHaveState({
      isOpen: false
    });
  });
  describe('Children', function () {
    describe('AccordionHeader', function () {
      it('renders an AccordionHeader', function () {
        var section = renderControlled();
        expect(section.find('AccordionHeader')).toExist();
      });
      it('passes a note to the accordion header', function () {
        var headerNote = 'cordions are fun';
        var section = renderControlled({
          headerNote: headerNote
        });
        expect(section.find('AccordionHeader')).toHaveProp({
          note: headerNote
        });
      });
      it('passes a header to the accordion header', function () {
        var header = 'Accordion header';
        var section = renderControlled({
          header: header
        });
        expect(section.find('AccordionHeader')).toHaveProp({
          text: header
        });
      });
    });
    context('Controlled accordion', function () {
      context('accordion is open', function () {
        it('opens the accordion', function () {
          var section = renderControlled({
            isOpen: true
          });
          expect(section.find('AccordionPanel')).toHaveProp({
            isOpen: true
          });
        });
      });
      context('accordion is closed', function () {
        it('does not render the accordion body', function () {
          var section = renderControlled({
            isOpen: false
          });
          expect(section.find('AccordionPanel')).toHaveProp({
            isOpen: false
          });
        });
      });
    });
    context('Uncontrolled accordion', function () {
      context('accordion is open', function () {
        it('renders the accordion body', function () {
          var section = renderWithState({
            isOpen: true
          });
          expect(section.find('AccordionPanel')).toHaveProp({
            isOpen: true
          });
        });
      });
      context('accordion is closed', function () {
        it('does not render the accordion body', function () {
          var section = renderWithState({
            isOpen: false
          });
          expect(section.find('AccordionPanel')).toHaveProp({
            isOpen: false
          });
        });
      });
    });
  });
  describe('event handlers', function () {
    describe('accordion header onClick', function () {
      context('uncontrolled accordion', function () {
        context('accordion is closed', function () {
          it('opens the accordion', function () {
            var section = renderWithState({
              isOpen: false
            });
            section.find('AccordionHeader').simulate('click');
            expect(section).toHaveState({
              isOpen: true
            });
          });
        });
        context('accordion is open', function () {
          it('closes the accordion', function () {
            var section = renderWithState({
              isOpen: true
            });
            section.find('AccordionHeader').simulate('click');
            expect(section).toHaveState({
              isOpen: false
            });
          });
        });
      });
      context('controlled accordion', function () {
        it('does not change the accordion state', function () {
          var section = renderWithState({
            isOpen: false
          }, {
            isOpen: true
          });
          section.find('AccordionHeader').simulate('click');
          expect(section).toHaveState({
            isOpen: true
          });
        });
        it('calls the onHeaderClick prop', function () {
          var onHeaderClick = jest.fn();
          var section = renderWithState({
            isOpen: false,
            onHeaderClick: onHeaderClick
          }, {
            isOpen: true
          });
          section.find('AccordionHeader').simulate('click');
          expect(onHeaderClick).toHaveBeenCalled();
        });
      });
    });
  });
});