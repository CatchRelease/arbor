"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _createWithTheme = _interopRequireDefault(require("../../../utils/createWithTheme"));

var _Input = _interopRequireDefault(require("../Input"));

var _Paragraph = _interopRequireDefault(require("../../Paragraph"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Input />', function () {
  it('renders an Input correctly', function () {
    var tree = (0, _createWithTheme.default)(_react.default.createElement(_Input.default, {
      label: "My Input",
      id: "example",
      type: "text"
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders a large Input correctly', function () {
    var tree = (0, _createWithTheme.default)(_react.default.createElement(_Input.default, {
      large: true,
      label: "My Input",
      id: "example",
      type: "text"
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders an Input with a caption correctly', function () {
    var tree = (0, _createWithTheme.default)(_react.default.createElement(_Input.default, {
      label: "My Input",
      id: "example",
      type: "text",
      caption: "I am a caption"
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('associates label with input', function () {
    var input = (0, _enzyme.shallow)(_react.default.createElement(_Input.default, {
      type: "text",
      id: "example"
    }));
    expect(input.find('Label').props().htmlFor).toEqual('example');
  });
  describe('caption exists', function () {
    it('renders the caption', function () {
      var input = (0, _enzyme.shallow)(_react.default.createElement(_Input.default, {
        caption: "My Caption",
        id: "example"
      }));
      expect(input.find(_Paragraph.default.span).props().children).toEqual('My Caption');
    });
  });
  describe('caption does not exist', function () {
    it('does not render the caption', function () {
      var input = (0, _enzyme.shallow)(_react.default.createElement(_Input.default, {
        id: "example"
      }));
      expect(input.find(_Paragraph.default.span).length).toBe(0);
    });
  });
});