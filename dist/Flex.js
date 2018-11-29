'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _styled = _interopRequireDefault(require('@emotion/styled'));

var _styledSystem = require('styled-system');

var _Box = _interopRequireDefault(require('./Box'));

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

var Flex =
  /*#__PURE__*/
  (0, _styled.default)(_Box.default, {
    label: 'Flex',
    target: 'e1654vxx0'
  })(
    'display:flex;',
    _styledSystem.alignSelf,
    ';',
    _styledSystem.alignItems,
    ';',
    _styledSystem.justifyContent,
    ';',
    _styledSystem.flexDirection,
    ';',
    _styledSystem.flex,
    ';/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9GbGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVd3QiIsImZpbGUiOiIuLi9zcmMvRmxleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7XG4gIGFsaWduU2VsZixcbiAgYWxpZ25JdGVtcyxcbiAganVzdGlmeUNvbnRlbnQsXG4gIGZsZXhEaXJlY3Rpb24sXG4gIGZsZXhcbn0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5cbmltcG9ydCBCb3ggZnJvbSAnLi9Cb3gnO1xuXG5jb25zdCBGbGV4ID0gc3R5bGVkKEJveClgXG4gIGRpc3BsYXk6IGZsZXg7XG4gICR7YWxpZ25TZWxmfTtcbiAgJHthbGlnbkl0ZW1zfTtcbiAgJHtqdXN0aWZ5Q29udGVudH07XG4gICR7ZmxleERpcmVjdGlvbn07XG4gICR7ZmxleH07XG5gO1xuXG5GbGV4LnByb3BUeXBlcyA9IHtcbiAgLi4uYWxpZ25TZWxmLnByb3BUeXBlcyxcbiAgLi4uYWxpZ25JdGVtcy5wcm9wVHlwZXMsXG4gIC4uLmp1c3RpZnlDb250ZW50LnByb3BUeXBlcyxcbiAgLi4uZmxleERpcmVjdGlvbi5wcm9wVHlwZXMsXG4gIC4uLmZsZXgucHJvcFR5cGVzXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGbGV4O1xuIl19 */'
  );
Flex.propTypes = _objectSpread(
  {},
  _styledSystem.alignSelf.propTypes,
  _styledSystem.alignItems.propTypes,
  _styledSystem.justifyContent.propTypes,
  _styledSystem.flexDirection.propTypes,
  _styledSystem.flex.propTypes
);
var _default = Flex;
exports.default = _default;
