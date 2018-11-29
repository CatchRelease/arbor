'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _core = require('@emotion/core');

var _styled = _interopRequireDefault(require('@emotion/styled'));

var _Box = _interopRequireDefault(require('./Box'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var spaceStyles = function spaceStyles(_ref) {
  var theme = _ref.theme;
  return (
    /*#__PURE__*/
    (0, _core.css)(
      'padding:',
      theme.space.smaller,
      ' ',
      theme.space.regular,
      ';margin:',
      theme.space.smaller,
      ' 0;/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DYXJkUm93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlzQyIsImZpbGUiOiIuLi9zcmMvQ2FyZFJvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IEJveCBmcm9tICcuL0JveCc7XG5cbmNvbnN0IHNwYWNlU3R5bGVzID0gKHsgdGhlbWUgfSkgPT4gY3NzYFxuICBwYWRkaW5nOiAke3RoZW1lLnNwYWNlLnNtYWxsZXJ9ICR7dGhlbWUuc3BhY2UucmVndWxhcn07XG4gIG1hcmdpbjogJHt0aGVtZS5zcGFjZS5zbWFsbGVyfSAwO1xuYDtcblxuY29uc3QgQ2FyZFJvdyA9IHN0eWxlZChCb3gud2l0aENvbXBvbmVudCgnZGl2JykpYFxuICAke3NwYWNlU3R5bGVzfTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRSb3c7XG4iXX0= */label:spaceStyles;'
    )
  );
};

var CardRow =
  /*#__PURE__*/
  (0, _styled.default)(
    _Box.default.withComponent('div', {
      target: 'emr22xw1'
    }),
    {
      label: 'CardRow',
      target: 'emr22xw0'
    }
  )(
    spaceStyles,
    ';/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DYXJkUm93LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNnRCIsImZpbGUiOiIuLi9zcmMvQ2FyZFJvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IEJveCBmcm9tICcuL0JveCc7XG5cbmNvbnN0IHNwYWNlU3R5bGVzID0gKHsgdGhlbWUgfSkgPT4gY3NzYFxuICBwYWRkaW5nOiAke3RoZW1lLnNwYWNlLnNtYWxsZXJ9ICR7dGhlbWUuc3BhY2UucmVndWxhcn07XG4gIG1hcmdpbjogJHt0aGVtZS5zcGFjZS5zbWFsbGVyfSAwO1xuYDtcblxuY29uc3QgQ2FyZFJvdyA9IHN0eWxlZChCb3gud2l0aENvbXBvbmVudCgnZGl2JykpYFxuICAke3NwYWNlU3R5bGVzfTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRSb3c7XG4iXX0= */'
  );
var _default = CardRow;
exports.default = _default;
