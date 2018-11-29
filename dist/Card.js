'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _styled = _interopRequireDefault(require('@emotion/styled'));

var _Box = _interopRequireDefault(require('./Box'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Card =
  /*#__PURE__*/
  (0, _styled.default)(
    _Box.default.withComponent('div', {
      target: 'e1e4kr3g1'
    }),
    {
      label: 'Card',
      target: 'e1e4kr3g0'
    }
  )(
    'border-radius:',
    function(props) {
      return props.theme.borderRadius.large;
    },
    ';border:1px solid ',
    function(props) {
      return props.theme.colors.grey20;
    },
    ';width:100%;/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DYXJkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUc2QyIsImZpbGUiOiIuLi9zcmMvQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBCb3ggZnJvbSAnLi9Cb3gnO1xuXG5jb25zdCBDYXJkID0gc3R5bGVkKEJveC53aXRoQ29tcG9uZW50KCdkaXYnKSlgXG4gIGJvcmRlci1yYWRpdXM6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYm9yZGVyUmFkaXVzLmxhcmdlfTtcbiAgYm9yZGVyOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMuZ3JleTIwfTtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIl19 */'
  );
var _default = Card;
exports.default = _default;
