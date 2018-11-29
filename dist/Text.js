'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _core = require('@emotion/core');

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

var baseStyles = function baseStyles(_ref) {
  var theme = _ref.theme;
  return (
    /*#__PURE__*/
    (0, _core.css)(
      'font-family:',
      theme.brandFont,
      ';line-height:',
      theme.lineHeights.large,
      ';/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlxQyIsImZpbGUiOiIuLi9zcmMvVGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY29sb3IsIGZvbnRTaXplLCBzcGFjZSwgdGV4dEFsaWduIH0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5cbmNvbnN0IGJhc2VTdHlsZXMgPSAoeyB0aGVtZSB9KSA9PiBjc3NgXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lLmJyYW5kRm9udH07XG4gIGxpbmUtaGVpZ2h0OiAke3RoZW1lLmxpbmVIZWlnaHRzLmxhcmdlfTtcbmA7XG5cbmNvbnN0IFRleHQgPSBzdHlsZWQucGBcbiAgJHtjb2xvcn07XG4gICR7Zm9udFNpemV9O1xuICAke3NwYWNlfTtcbiAgJHt0ZXh0QWxpZ259O1xuICAke2Jhc2VTdHlsZXN9O1xuYDtcblxuVGV4dC5wcm9wVHlwZXMgPSB7XG4gIC4uLmNvbG9yLnByb3BUeXBlcyxcbiAgLi4uZm9udFNpemUucHJvcFR5cGVzLFxuICAuLi5zcGFjZS5wcm9wVHlwZXMsXG4gIC4uLnRleHRBbGlnbi5wcm9wVHlwZXNcbn07XG5cblRleHQucCA9IFRleHQud2l0aENvbXBvbmVudCgncCcpO1xuVGV4dC5zcGFuID0gVGV4dC53aXRoQ29tcG9uZW50KCdzcGFuJyk7XG5cbmV4cG9ydCBkZWZhdWx0IFRleHQ7XG4iXX0= */label:baseStyles;'
    )
  );
};

var Text =
  /*#__PURE__*/
  (0, _styled.default)('p', {
    label: 'Text',
    target: 'e1mey0i20'
  })(
    _styledSystem.color,
    ';',
    _styledSystem.fontSize,
    ';',
    _styledSystem.space,
    ';',
    _styledSystem.textAlign,
    ';',
    baseStyles,
    ';/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNxQiIsImZpbGUiOiIuLi9zcmMvVGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY29sb3IsIGZvbnRTaXplLCBzcGFjZSwgdGV4dEFsaWduIH0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5cbmNvbnN0IGJhc2VTdHlsZXMgPSAoeyB0aGVtZSB9KSA9PiBjc3NgXG4gIGZvbnQtZmFtaWx5OiAke3RoZW1lLmJyYW5kRm9udH07XG4gIGxpbmUtaGVpZ2h0OiAke3RoZW1lLmxpbmVIZWlnaHRzLmxhcmdlfTtcbmA7XG5cbmNvbnN0IFRleHQgPSBzdHlsZWQucGBcbiAgJHtjb2xvcn07XG4gICR7Zm9udFNpemV9O1xuICAke3NwYWNlfTtcbiAgJHt0ZXh0QWxpZ259O1xuICAke2Jhc2VTdHlsZXN9O1xuYDtcblxuVGV4dC5wcm9wVHlwZXMgPSB7XG4gIC4uLmNvbG9yLnByb3BUeXBlcyxcbiAgLi4uZm9udFNpemUucHJvcFR5cGVzLFxuICAuLi5zcGFjZS5wcm9wVHlwZXMsXG4gIC4uLnRleHRBbGlnbi5wcm9wVHlwZXNcbn07XG5cblRleHQucCA9IFRleHQud2l0aENvbXBvbmVudCgncCcpO1xuVGV4dC5zcGFuID0gVGV4dC53aXRoQ29tcG9uZW50KCdzcGFuJyk7XG5cbmV4cG9ydCBkZWZhdWx0IFRleHQ7XG4iXX0= */'
  );
Text.propTypes = _objectSpread(
  {},
  _styledSystem.color.propTypes,
  _styledSystem.fontSize.propTypes,
  _styledSystem.space.propTypes,
  _styledSystem.textAlign.propTypes
);
Text.p = Text.withComponent('p', {
  target: 'e1mey0i21'
});
Text.span = Text.withComponent('span', {
  target: 'e1mey0i22'
});
var _default = Text;
exports.default = _default;
