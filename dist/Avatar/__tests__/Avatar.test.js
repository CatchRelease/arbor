"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Avatar = _interopRequireDefault(require("../Avatar"));

var _colorForString = _interopRequireDefault(require("../../utils/colorForString"));

var _createWithTheme = _interopRequireDefault(require("../../../utils/createWithTheme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('../../utils/colorForString.js');
describe('<Avatar />', function () {
  it('renders properly', function () {
    var tree = (0, _createWithTheme.default)(_react.default.createElement(_Avatar.default, {
      name: "Bruce Wayne"
    }));
    expect(tree).toMatchSnapshot();
  });
  describe('initials', function () {
    it('renders capital letters for initials', function () {
      var avatar = (0, _enzyme.shallow)(_react.default.createElement(_Avatar.default, {
        name: "bruce wayne"
      }));
      expect(avatar).toHaveText('BW');
    });
    context('single word provided for name', function () {
      it('renders the first letter of the word', function () {
        var avatar = (0, _enzyme.shallow)(_react.default.createElement(_Avatar.default, {
          name: "Batman"
        }));
        expect(avatar).toHaveText('B');
      });
    });
    context('multiple words provided for name', function () {
      it('renders the first letter of each word', function () {
        var avatar = (0, _enzyme.shallow)(_react.default.createElement(_Avatar.default, {
          name: "Alfred Thaddeus Crane Pennyworth"
        }));
        expect(avatar).toHaveText('AP');
      });
    });
  });
  describe('background color', function () {
    it('is calculated by the name property', function () {
      _colorForString.default.mockReturnValue('blue');

      var avatar = (0, _enzyme.shallow)(_react.default.createElement(_Avatar.default, {
        name: "Batman"
      }));
      expect(avatar.find('Flex')).toHaveProp({
        bg: 'blue'
      });
    });
  });
});