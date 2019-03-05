"use strict";

var _Box = _interopRequireDefault(require("../../Box"));

var _createWithComponent = _interopRequireDefault(require("../createWithComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('createWithComponent', function () {
  var createComponent = function createComponent(options) {
    return Object.assign(_Box.default, options);
  };

  it('returns a component with default props from the source component', function () {
    var srcComponent = createComponent({
      defaultProps: {
        foo: 'bar'
      }
    });
    var component = (0, _createWithComponent.default)(srcComponent, 'header');
    expect(component.defaultProps.foo).toEqual('bar');
  });
  it('returns a component with prop types from the source component', function () {
    var srcComponent = createComponent({
      propTypes: {
        foo: 'bar'
      }
    });
    var component = (0, _createWithComponent.default)(srcComponent, 'header');
    expect(component.propTypes.foo).toEqual('bar');
  });
  context('with options argument', function () {
    context('defaultProps', function () {
      it('assigns the default props to the new component', function () {
        var srcComponent = createComponent({
          defaultProps: {
            foo: 'bar'
          }
        });
        var defaultProps = {
          baz: 'qux'
        };
        var component = (0, _createWithComponent.default)(srcComponent, 'header', {
          defaultProps: defaultProps
        });
        expect(component.defaultProps.baz).toEqual('qux');
      });
      it('overwrites source component default props with passed default props', function () {
        var srcComponent = createComponent({
          defaultProps: {
            foo: 'bar'
          }
        });
        var defaultProps = {
          foo: 'baz'
        };
        var component = (0, _createWithComponent.default)(srcComponent, 'header', {
          defaultProps: defaultProps
        });
        expect(component.defaultProps.foo).toEqual('baz');
      });
    });
    context('propTypes', function () {
      it('assigns the propTypes to the new component', function () {
        var srcComponent = createComponent({
          propTypes: {
            foo: 'bar'
          }
        });
        var propTypes = {
          baz: 'qux'
        };
        var component = (0, _createWithComponent.default)(srcComponent, 'header', {
          propTypes: propTypes
        });
        expect(component.propTypes.baz).toEqual('qux');
      });
      it('overwrites source component prop types with passed default props', function () {
        var srcComponent = createComponent({
          propTypes: {
            foo: 'bar'
          }
        });
        var propTypes = {
          foo: 'baz'
        };
        var component = (0, _createWithComponent.default)(srcComponent, 'header', {
          propTypes: propTypes
        });
        expect(component.propTypes.foo).toEqual('baz');
      });
    });
  });
});