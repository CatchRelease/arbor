'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _styled = _interopRequireDefault(require('@emotion/styled'));

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }
    ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var Box =
  /*#__PURE__*/
  (0, _styled.default)('div', {
    label: 'Box',
    target: 'ee1vgs60'
  })(
    'box-sizing:border-box;',
    _styledSystem.boxShadow,
    ';',
    _styledSystem.color,
    ';',
    _styledSystem.height,
    ';',
    _styledSystem.maxWidth,
    ';',
    _styledSystem.space,
    ';',
    _styledSystem.textAlign,
    ';',
    _styledSystem.width,
    ';/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Cb3guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV3NCIiwiZmlsZSI6Ii4uL3NyYy9Cb3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQge1xuICBib3hTaGFkb3csXG4gIGNvbG9yLFxuICBzcGFjZSxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgbWF4V2lkdGgsXG4gIHRleHRBbGlnblxufSBmcm9tICdzdHlsZWQtc3lzdGVtJztcblxuY29uc3QgQm94ID0gc3R5bGVkLmRpdmBcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgJHtib3hTaGFkb3d9O1xuICAke2NvbG9yfTtcbiAgJHtoZWlnaHR9O1xuICAke21heFdpZHRofTtcbiAgJHtzcGFjZX07XG4gICR7dGV4dEFsaWdufTtcbiAgJHt3aWR0aH07XG5gO1xuXG5Cb3gucHJvcFR5cGVzID0ge1xuICAuLi5ib3hTaGFkb3cucHJvcFR5cGVzLFxuICAuLi5jb2xvci5wcm9wVHlwZXMsXG4gIC4uLmhlaWdodC5wcm9wVHlwZXMsXG4gIC4uLm1heFdpZHRoLnByb3BUeXBlcyxcbiAgLi4uc3BhY2UucHJvcFR5cGVzLFxuICAuLi50ZXh0QWxpZ24ucHJvcFR5cGVzLFxuICAuLi53aWR0aC5wcm9wVHlwZXNcbn07XG5cbkJveC5zZWN0aW9uID0gQm94LndpdGhDb21wb25lbnQoJ3NlY3Rpb24nKTtcblxuZXhwb3J0IGRlZmF1bHQgQm94O1xuIl19 */'
  );
Box.propTypes = _objectSpread(
  {},
  _styledSystem.boxShadow.propTypes,
  _styledSystem.color.propTypes,
  _styledSystem.height.propTypes,
  _styledSystem.maxWidth.propTypes,
  _styledSystem.space.propTypes,
  _styledSystem.textAlign.propTypes,
  _styledSystem.width.propTypes
);
Box.section = Box.withComponent('section', {
  target: 'ee1vgs61'
});
var _default = Box;
exports.default = _default;
