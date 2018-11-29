'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _core = require('@emotion/core');

var _styled = _interopRequireDefault(require('@emotion/styled'));

var _propTypes = _interopRequireDefault(require('prop-types'));

var _polished = require('polished');

var _Label = _interopRequireDefault(require('./Label'));

var _Paragraph = _interopRequireDefault(require('./Paragraph'));

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

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var InputContainer =
  /*#__PURE__*/
  (0, _styled.default)('div', {
    label: 'InputContainer',
    target: 'e13x5kwi0'
  })(
    'margin-bottom:',
    function(props) {
      return props.caption
        ? props.theme.space.smaller
        : props.theme.space.regular;
    },
    ';/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTaUMiLCJmaWxlIjoiLi4vc3JjL0lucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHBsYWNlaG9sZGVyLCB0cmFuc3BhcmVudGl6ZSB9IGZyb20gJ3BvbGlzaGVkJztcblxuaW1wb3J0IExhYmVsIGZyb20gJy4vTGFiZWwnO1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tICcuL1BhcmFncmFwaCc7XG5cbmNvbnN0IElucHV0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWJvdHRvbTogJHtwcm9wcyA9PlxuICAgIHByb3BzLmNhcHRpb24gPyBwcm9wcy50aGVtZS5zcGFjZS5zbWFsbGVyIDogcHJvcHMudGhlbWUuc3BhY2UucmVndWxhcn07XG5gO1xuXG5JbnB1dENvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gIGNhcHRpb246IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbklucHV0Q29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2FwdGlvbjogJydcbn07XG5cbmNvbnN0IGJhc2VTdHlsZXMgPSAoeyB0aGVtZSB9KSA9PiBjc3NgXG4gIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUuYm9yZGVyUmFkaXVzLnNtYWxsfTtcbiAgYm9yZGVyOiAke3RoZW1lLmJvcmRlcldpZHRoLnNtYWxsfSBzb2xpZCAke3RoZW1lLmNvbG9ycy5ncmV5MjB9O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZ3JleTEwMH07XG4gIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250U2l6ZXMuc2l6ZTJ9O1xuICBsaW5lLWhlaWdodDogJHt0aGVtZS5saW5lSGVpZ2h0cy5zbWFsbH07XG4gIG1hcmdpbjogJHt0aGVtZS5zcGFjZS5zbWFsbGVzdH0gMDtcbiAgcGFkZGluZzogJHt0aGVtZS5zcGFjZS5zbWFsbGVyfTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgJHtwbGFjZWhvbGRlcih7IGNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JleTUwIH0pfTtcblxuICAmOmZvY3VzIHtcbiAgICBib3JkZXI6ICR7dGhlbWUuYm9yZGVyV2lkdGguc21hbGx9IHNvbGlkICR7dGhlbWUuY29sb3JzLmJsdWVMaWdodH07XG4gICAgYm94LXNoYWRvdzogMCAwIDhweCAke3RyYW5zcGFyZW50aXplKDAuOSwgdGhlbWUuY29sb3JzLmJsdWVMaWdodCl9O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy53aGl0ZTEwfTtcbiAgfVxuYDtcblxuY29uc3QgbGFyZ2VTdHlsZXMgPSAoeyB0aGVtZSwgbGFyZ2UgfSkgPT5cbiAgbGFyZ2UgJiZcbiAgY3NzYFxuICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2Uuc21hbGx9ICR7dGhlbWUuc3BhY2Uuc21hbGxlcn07XG4gIGA7XG5cbmNvbnN0IFN0eWxlZElucHV0ID0gc3R5bGVkLmlucHV0YFxuICAke2Jhc2VTdHlsZXN9O1xuICAke2xhcmdlU3R5bGVzfTtcbmA7XG5cbmNvbnN0IElucHV0ID0gKHsgY2FwdGlvbiwgbGFiZWwsIGlkLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxJbnB1dENvbnRhaW5lciBjYXB0aW9uPXtjYXB0aW9ufT5cbiAgICA8TGFiZWwgaHRtbEZvcj17aWR9PntsYWJlbH08L0xhYmVsPlxuICAgIDxTdHlsZWRJbnB1dCB7Li4ueyAuLi5wcm9wcywgaWQgfX0gLz5cbiAgICB7Y2FwdGlvbiAmJiAoXG4gICAgICA8UGFyYWdyYXBoLnNwYW4gdmFyaWFudD1cInRpbnlcIiBjb2xvcj1cInJlZFwiPlxuICAgICAgICB7Y2FwdGlvbn1cbiAgICAgIDwvUGFyYWdyYXBoLnNwYW4+XG4gICAgKX1cbiAgPC9JbnB1dENvbnRhaW5lcj5cbik7XG5cbklucHV0LnByb3BUeXBlcyA9IHtcbiAgY2FwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbGFyZ2U6IFByb3BUeXBlcy5ib29sXG59O1xuXG5JbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNhcHRpb246ICcnLFxuICBsYXJnZTogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIl19 */'
  );
InputContainer.propTypes = {
  caption: _propTypes.default.string
};
InputContainer.defaultProps = {
  caption: ''
};

var baseStyles = function baseStyles(_ref) {
  var theme = _ref.theme;
  return (
    /*#__PURE__*/
    (0, _core.css)(
      'border-radius:',
      theme.borderRadius.small,
      ';border:',
      theme.borderWidth.small,
      ' solid ',
      theme.colors.grey20,
      ';box-sizing:border-box;color:',
      theme.colors.grey100,
      ';font-size:',
      theme.fontSizes.size2,
      ';line-height:',
      theme.lineHeights.small,
      ';margin:',
      theme.space.smallest,
      ' 0;padding:',
      theme.space.smaller,
      ';width:100%;',
      (0, _polished.placeholder)({
        color: theme.colors.grey50
      }),
      ';&:focus{border:',
      theme.borderWidth.small,
      ' solid ',
      theme.colors.blueLight,
      ';box-shadow:0 0 8px ',
      (0, _polished.transparentize)(0.9, theme.colors.blueLight),
      ';outline:none;}&:disabled{background:',
      theme.colors.white10,
      ';}/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQnFDIiwiZmlsZSI6Ii4uL3NyYy9JbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBwbGFjZWhvbGRlciwgdHJhbnNwYXJlbnRpemUgfSBmcm9tICdwb2xpc2hlZCc7XG5cbmltcG9ydCBMYWJlbCBmcm9tICcuL0xhYmVsJztcbmltcG9ydCBQYXJhZ3JhcGggZnJvbSAnLi9QYXJhZ3JhcGgnO1xuXG5jb25zdCBJbnB1dENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5jYXB0aW9uID8gcHJvcHMudGhlbWUuc3BhY2Uuc21hbGxlciA6IHByb3BzLnRoZW1lLnNwYWNlLnJlZ3VsYXJ9O1xuYDtcblxuSW5wdXRDb250YWluZXIucHJvcFR5cGVzID0ge1xuICBjYXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5JbnB1dENvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNhcHRpb246ICcnXG59O1xuXG5jb25zdCBiYXNlU3R5bGVzID0gKHsgdGhlbWUgfSkgPT4gY3NzYFxuICBib3JkZXItcmFkaXVzOiAke3RoZW1lLmJvcmRlclJhZGl1cy5zbWFsbH07XG4gIGJvcmRlcjogJHt0aGVtZS5ib3JkZXJXaWR0aC5zbWFsbH0gc29saWQgJHt0aGVtZS5jb2xvcnMuZ3JleTIwfTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmdyZXkxMDB9O1xuICBmb250LXNpemU6ICR7dGhlbWUuZm9udFNpemVzLnNpemUyfTtcbiAgbGluZS1oZWlnaHQ6ICR7dGhlbWUubGluZUhlaWdodHMuc21hbGx9O1xuICBtYXJnaW46ICR7dGhlbWUuc3BhY2Uuc21hbGxlc3R9IDA7XG4gIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2Uuc21hbGxlcn07XG4gIHdpZHRoOiAxMDAlO1xuXG4gICR7cGxhY2Vob2xkZXIoeyBjb2xvcjogdGhlbWUuY29sb3JzLmdyZXk1MCB9KX07XG5cbiAgJjpmb2N1cyB7XG4gICAgYm9yZGVyOiAke3RoZW1lLmJvcmRlcldpZHRoLnNtYWxsfSBzb2xpZCAke3RoZW1lLmNvbG9ycy5ibHVlTGlnaHR9O1xuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggJHt0cmFuc3BhcmVudGl6ZSgwLjksIHRoZW1lLmNvbG9ycy5ibHVlTGlnaHQpfTtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMud2hpdGUxMH07XG4gIH1cbmA7XG5cbmNvbnN0IGxhcmdlU3R5bGVzID0gKHsgdGhlbWUsIGxhcmdlIH0pID0+XG4gIGxhcmdlICYmXG4gIGNzc2BcbiAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNlLnNtYWxsfSAke3RoZW1lLnNwYWNlLnNtYWxsZXJ9O1xuICBgO1xuXG5jb25zdCBTdHlsZWRJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgJHtiYXNlU3R5bGVzfTtcbiAgJHtsYXJnZVN0eWxlc307XG5gO1xuXG5jb25zdCBJbnB1dCA9ICh7IGNhcHRpb24sIGxhYmVsLCBpZCwgLi4ucHJvcHMgfSkgPT4gKFxuICA8SW5wdXRDb250YWluZXIgY2FwdGlvbj17Y2FwdGlvbn0+XG4gICAgPExhYmVsIGh0bWxGb3I9e2lkfT57bGFiZWx9PC9MYWJlbD5cbiAgICA8U3R5bGVkSW5wdXQgey4uLnsgLi4ucHJvcHMsIGlkIH19IC8+XG4gICAge2NhcHRpb24gJiYgKFxuICAgICAgPFBhcmFncmFwaC5zcGFuIHZhcmlhbnQ9XCJ0aW55XCIgY29sb3I9XCJyZWRcIj5cbiAgICAgICAge2NhcHRpb259XG4gICAgICA8L1BhcmFncmFwaC5zcGFuPlxuICAgICl9XG4gIDwvSW5wdXRDb250YWluZXI+XG4pO1xuXG5JbnB1dC5wcm9wVHlwZXMgPSB7XG4gIGNhcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGxhcmdlOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuICBjYXB0aW9uOiAnJyxcbiAgbGFyZ2U6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiJdfQ== */label:baseStyles;'
    )
  );
};

var largeStyles = function largeStyles(_ref2) {
  var theme = _ref2.theme,
    large = _ref2.large;
  return (
    large &&
    /*#__PURE__*/
    (0, _core.css)(
      'padding:',
      theme.space.small,
      ' ',
      theme.space.smaller,
      ';/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnREsiLCJmaWxlIjoiLi4vc3JjL0lucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHBsYWNlaG9sZGVyLCB0cmFuc3BhcmVudGl6ZSB9IGZyb20gJ3BvbGlzaGVkJztcblxuaW1wb3J0IExhYmVsIGZyb20gJy4vTGFiZWwnO1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tICcuL1BhcmFncmFwaCc7XG5cbmNvbnN0IElucHV0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWJvdHRvbTogJHtwcm9wcyA9PlxuICAgIHByb3BzLmNhcHRpb24gPyBwcm9wcy50aGVtZS5zcGFjZS5zbWFsbGVyIDogcHJvcHMudGhlbWUuc3BhY2UucmVndWxhcn07XG5gO1xuXG5JbnB1dENvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gIGNhcHRpb246IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbklucHV0Q29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2FwdGlvbjogJydcbn07XG5cbmNvbnN0IGJhc2VTdHlsZXMgPSAoeyB0aGVtZSB9KSA9PiBjc3NgXG4gIGJvcmRlci1yYWRpdXM6ICR7dGhlbWUuYm9yZGVyUmFkaXVzLnNtYWxsfTtcbiAgYm9yZGVyOiAke3RoZW1lLmJvcmRlcldpZHRoLnNtYWxsfSBzb2xpZCAke3RoZW1lLmNvbG9ycy5ncmV5MjB9O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuZ3JleTEwMH07XG4gIGZvbnQtc2l6ZTogJHt0aGVtZS5mb250U2l6ZXMuc2l6ZTJ9O1xuICBsaW5lLWhlaWdodDogJHt0aGVtZS5saW5lSGVpZ2h0cy5zbWFsbH07XG4gIG1hcmdpbjogJHt0aGVtZS5zcGFjZS5zbWFsbGVzdH0gMDtcbiAgcGFkZGluZzogJHt0aGVtZS5zcGFjZS5zbWFsbGVyfTtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgJHtwbGFjZWhvbGRlcih7IGNvbG9yOiB0aGVtZS5jb2xvcnMuZ3JleTUwIH0pfTtcblxuICAmOmZvY3VzIHtcbiAgICBib3JkZXI6ICR7dGhlbWUuYm9yZGVyV2lkdGguc21hbGx9IHNvbGlkICR7dGhlbWUuY29sb3JzLmJsdWVMaWdodH07XG4gICAgYm94LXNoYWRvdzogMCAwIDhweCAke3RyYW5zcGFyZW50aXplKDAuOSwgdGhlbWUuY29sb3JzLmJsdWVMaWdodCl9O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmNvbG9ycy53aGl0ZTEwfTtcbiAgfVxuYDtcblxuY29uc3QgbGFyZ2VTdHlsZXMgPSAoeyB0aGVtZSwgbGFyZ2UgfSkgPT5cbiAgbGFyZ2UgJiZcbiAgY3NzYFxuICAgIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2Uuc21hbGx9ICR7dGhlbWUuc3BhY2Uuc21hbGxlcn07XG4gIGA7XG5cbmNvbnN0IFN0eWxlZElucHV0ID0gc3R5bGVkLmlucHV0YFxuICAke2Jhc2VTdHlsZXN9O1xuICAke2xhcmdlU3R5bGVzfTtcbmA7XG5cbmNvbnN0IElucHV0ID0gKHsgY2FwdGlvbiwgbGFiZWwsIGlkLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxJbnB1dENvbnRhaW5lciBjYXB0aW9uPXtjYXB0aW9ufT5cbiAgICA8TGFiZWwgaHRtbEZvcj17aWR9PntsYWJlbH08L0xhYmVsPlxuICAgIDxTdHlsZWRJbnB1dCB7Li4ueyAuLi5wcm9wcywgaWQgfX0gLz5cbiAgICB7Y2FwdGlvbiAmJiAoXG4gICAgICA8UGFyYWdyYXBoLnNwYW4gdmFyaWFudD1cInRpbnlcIiBjb2xvcj1cInJlZFwiPlxuICAgICAgICB7Y2FwdGlvbn1cbiAgICAgIDwvUGFyYWdyYXBoLnNwYW4+XG4gICAgKX1cbiAgPC9JbnB1dENvbnRhaW5lcj5cbik7XG5cbklucHV0LnByb3BUeXBlcyA9IHtcbiAgY2FwdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbGFyZ2U6IFByb3BUeXBlcy5ib29sXG59O1xuXG5JbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNhcHRpb246ICcnLFxuICBsYXJnZTogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIl19 */label:largeStyles;'
    )
  );
};

var StyledInput =
  /*#__PURE__*/
  (0, _styled.default)('input', {
    label: 'StyledInput',
    target: 'e13x5kwi1'
  })(
    baseStyles,
    ';',
    largeStyles,
    ';/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRGdDIiwiZmlsZSI6Ii4uL3NyYy9JbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBwbGFjZWhvbGRlciwgdHJhbnNwYXJlbnRpemUgfSBmcm9tICdwb2xpc2hlZCc7XG5cbmltcG9ydCBMYWJlbCBmcm9tICcuL0xhYmVsJztcbmltcG9ydCBQYXJhZ3JhcGggZnJvbSAnLi9QYXJhZ3JhcGgnO1xuXG5jb25zdCBJbnB1dENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5jYXB0aW9uID8gcHJvcHMudGhlbWUuc3BhY2Uuc21hbGxlciA6IHByb3BzLnRoZW1lLnNwYWNlLnJlZ3VsYXJ9O1xuYDtcblxuSW5wdXRDb250YWluZXIucHJvcFR5cGVzID0ge1xuICBjYXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5JbnB1dENvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNhcHRpb246ICcnXG59O1xuXG5jb25zdCBiYXNlU3R5bGVzID0gKHsgdGhlbWUgfSkgPT4gY3NzYFxuICBib3JkZXItcmFkaXVzOiAke3RoZW1lLmJvcmRlclJhZGl1cy5zbWFsbH07XG4gIGJvcmRlcjogJHt0aGVtZS5ib3JkZXJXaWR0aC5zbWFsbH0gc29saWQgJHt0aGVtZS5jb2xvcnMuZ3JleTIwfTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6ICR7dGhlbWUuY29sb3JzLmdyZXkxMDB9O1xuICBmb250LXNpemU6ICR7dGhlbWUuZm9udFNpemVzLnNpemUyfTtcbiAgbGluZS1oZWlnaHQ6ICR7dGhlbWUubGluZUhlaWdodHMuc21hbGx9O1xuICBtYXJnaW46ICR7dGhlbWUuc3BhY2Uuc21hbGxlc3R9IDA7XG4gIHBhZGRpbmc6ICR7dGhlbWUuc3BhY2Uuc21hbGxlcn07XG4gIHdpZHRoOiAxMDAlO1xuXG4gICR7cGxhY2Vob2xkZXIoeyBjb2xvcjogdGhlbWUuY29sb3JzLmdyZXk1MCB9KX07XG5cbiAgJjpmb2N1cyB7XG4gICAgYm9yZGVyOiAke3RoZW1lLmJvcmRlcldpZHRoLnNtYWxsfSBzb2xpZCAke3RoZW1lLmNvbG9ycy5ibHVlTGlnaHR9O1xuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggJHt0cmFuc3BhcmVudGl6ZSgwLjksIHRoZW1lLmNvbG9ycy5ibHVlTGlnaHQpfTtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZDogJHt0aGVtZS5jb2xvcnMud2hpdGUxMH07XG4gIH1cbmA7XG5cbmNvbnN0IGxhcmdlU3R5bGVzID0gKHsgdGhlbWUsIGxhcmdlIH0pID0+XG4gIGxhcmdlICYmXG4gIGNzc2BcbiAgICBwYWRkaW5nOiAke3RoZW1lLnNwYWNlLnNtYWxsfSAke3RoZW1lLnNwYWNlLnNtYWxsZXJ9O1xuICBgO1xuXG5jb25zdCBTdHlsZWRJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgJHtiYXNlU3R5bGVzfTtcbiAgJHtsYXJnZVN0eWxlc307XG5gO1xuXG5jb25zdCBJbnB1dCA9ICh7IGNhcHRpb24sIGxhYmVsLCBpZCwgLi4ucHJvcHMgfSkgPT4gKFxuICA8SW5wdXRDb250YWluZXIgY2FwdGlvbj17Y2FwdGlvbn0+XG4gICAgPExhYmVsIGh0bWxGb3I9e2lkfT57bGFiZWx9PC9MYWJlbD5cbiAgICA8U3R5bGVkSW5wdXQgey4uLnsgLi4ucHJvcHMsIGlkIH19IC8+XG4gICAge2NhcHRpb24gJiYgKFxuICAgICAgPFBhcmFncmFwaC5zcGFuIHZhcmlhbnQ9XCJ0aW55XCIgY29sb3I9XCJyZWRcIj5cbiAgICAgICAge2NhcHRpb259XG4gICAgICA8L1BhcmFncmFwaC5zcGFuPlxuICAgICl9XG4gIDwvSW5wdXRDb250YWluZXI+XG4pO1xuXG5JbnB1dC5wcm9wVHlwZXMgPSB7XG4gIGNhcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGxhcmdlOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuICBjYXB0aW9uOiAnJyxcbiAgbGFyZ2U6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcbiJdfQ== */'
  );

var Input = function Input(_ref3) {
  var caption = _ref3.caption,
    label = _ref3.label,
    id = _ref3.id,
    props = _objectWithoutProperties(_ref3, ['caption', 'label', 'id']);

  return (0, _core.jsx)(
    InputContainer,
    {
      caption: caption
    },
    (0, _core.jsx)(
      _Label.default,
      {
        htmlFor: id
      },
      label
    ),
    (0, _core.jsx)(
      StyledInput,
      _objectSpread({}, props, {
        id: id
      })
    ),
    caption &&
      (0, _core.jsx)(
        _Paragraph.default.span,
        {
          variant: 'tiny',
          color: 'red'
        },
        caption
      )
  );
};

Input.propTypes = {
  caption: _propTypes.default.string,
  id: _propTypes.default.string.isRequired,
  large: _propTypes.default.bool
};
Input.defaultProps = {
  caption: '',
  large: false
};
var _default = Input;
exports.default = _default;
