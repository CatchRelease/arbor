"use strict";

var _colorForString = _interopRequireDefault(require("../colorForString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('colorForString', function () {
  var colors = ['blue', 'green', 'red'];
  it('returns a color from a color set based on a given string', function () {
    expect((0, _colorForString.default)('Batman', colors)).toEqual('green');
    expect((0, _colorForString.default)('Batmao', colors)).toEqual('red');
    expect((0, _colorForString.default)('Batmap', colors)).toEqual('blue');
  });
  it('always returns the same color for a given string', function () {
    var string = 'Batman';
    expect((0, _colorForString.default)(string, colors)).toEqual((0, _colorForString.default)(string, colors));
  });
});