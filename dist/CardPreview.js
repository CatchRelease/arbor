'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _styled = _interopRequireDefault(require('@emotion/styled'));

var _propTypes = _interopRequireDefault(require('prop-types'));

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

var CardPreview =
  /*#__PURE__*/
  (0, _styled.default)(
    _Box.default.withComponent('div', {
      target: 'e1fysj6e1'
    }),
    {
      label: 'CardPreview',
      target: 'e1fysj6e0'
    }
  )(
    'background:url(',
    function(props) {
      return props.image;
    },
    ') center center no-repeat ',
    function(props) {
      return props.theme.colors.black;
    },
    ';background-size:contain;',
    _styledSystem.ratio,
    ';/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DYXJkUHJldmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNb0QiLCJmaWxlIjoiLi4vc3JjL0NhcmRQcmV2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHJhdGlvIH0gZnJvbSAnc3R5bGVkLXN5c3RlbSc7XG5cbmltcG9ydCBCb3ggZnJvbSAnLi9Cb3gnO1xuXG5jb25zdCBDYXJkUHJldmlldyA9IHN0eWxlZChCb3gud2l0aENvbXBvbmVudCgnZGl2JykpYFxuICBiYWNrZ3JvdW5kOiB1cmwoJHtwcm9wcyA9PiBwcm9wcy5pbWFnZX0pIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0XG4gICAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmxhY2t9O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICR7cmF0aW99O1xuYDtcblxuQ2FyZFByZXZpZXcucHJvcFR5cGVzID0ge1xuICBpbWFnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAuLi5yYXRpby5wcm9wVHlwZVxufTtcblxuQ2FyZFByZXZpZXcuZGVmYXVsdFByb3BzID0ge1xuICByYXRpbzogOSAvIDE2XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkUHJldmlldztcbiJdfQ== */'
  );
CardPreview.propTypes = _objectSpread(
  {
    image: _propTypes.default.string.isRequired
  },
  _styledSystem.ratio.propType
);
CardPreview.defaultProps = {
  ratio: 9 / 16
};
var _default = CardPreview;
exports.default = _default;
