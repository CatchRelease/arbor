'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _styled = _interopRequireDefault(require('@emotion/styled'));

var _propTypes = _interopRequireDefault(require('prop-types'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Label =
  /*#__PURE__*/
  (0, _styled.default)('label', {
    label: 'Label',
    target: 'e2i3bnd0'
  })(
    'color:',
    function(props) {
      return props.theme.colors.grey80;
    },
    ';display:block;font-family:',
    function(props) {
      return props.theme.brandFont;
    },
    ';font-size:',
    function(props) {
      return props.theme.fontSizes.size2;
    },
    ';line-height:',
    function(props) {
      return props.theme.lineHeights.large;
    },
    ';/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9MYWJlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHMEIiLCJmaWxlIjoiLi4vc3JjL0xhYmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ncmV5ODB9O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1mYW1pbHk6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJhbmRGb250fTtcbiAgZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvbnRTaXplcy5zaXplMn07XG4gIGxpbmUtaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxpbmVIZWlnaHRzLmxhcmdlfTtcbmA7XG5cbkxhYmVsLnByb3BUeXBlcyA9IHtcbiAgaHRtbEZvcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYWJlbDtcbiJdfQ== */'
  );
Label.propTypes = {
  htmlFor: _propTypes.default.string.isRequired
};
var _default = Label;
exports.default = _default;
