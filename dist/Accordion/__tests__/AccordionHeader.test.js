"use strict";

var _react = _interopRequireDefault(require("react"));

var _createWithTheme = _interopRequireDefault(require("../../../utils/createWithTheme"));

var _AccordionHeader = _interopRequireDefault(require("../AccordionHeader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('<AccordionHeader />', function () {
  var baseProps = {
    isOpen: false,
    panelId: 'my-accordion-1',
    text: 'My Heading'
  };

  var createTree = function createTree() {
    var additionalProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return (0, _createWithTheme.default)(_react.default.createElement(_AccordionHeader.default, _objectSpread({}, baseProps, additionalProps)));
  };

  it('properly renders an accordion header', function () {
    var tree = createTree();
    expect(tree).toMatchSnapshot();
  });
  it('renders with a note', function () {
    var tree = createTree({
      note: 'My Accordion Section Note'
    });
    expect(tree).toMatchSnapshot();
  });
  it('renders with the panel visible', function () {
    var tree = createTree({
      isOpen: true
    });
    expect(tree).toMatchSnapshot();
  });
  it('renders with an on click', function () {
    var tree = createTree({
      onClick: jest.fn()
    });
    expect(tree).toMatchSnapshot();
  });
});