"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(require("@emotion/styled/base"));

var _react = require("@emotion/react");

var _styledSystem = require("styled-system");

var _Text = _interopRequireDefault(require("../Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var baseStyles = process.env.NODE_ENV === "production" ? {
  name: "k9zfl1-baseStyles",
  styles: "text-decoration:none;cursor:pointer;&:hover{text-decoration:underline;}&:focus{outline-offset:2px;}&:disabled{cursor:not-allowed;};label:baseStyles;"
} : {
  name: "k9zfl1-baseStyles",
  styles: "text-decoration:none;cursor:pointer;&:hover{text-decoration:underline;}&:focus{outline-offset:2px;}&:disabled{cursor:not-allowed;};label:baseStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9MaW5rL0xpbmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU3NCIiwiZmlsZSI6Ii4uLy4uL3NyYy9MaW5rL0xpbmsudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MsIFRoZW1lIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY29sb3IsIENvbG9yUHJvcHMgfSBmcm9tICdzdHlsZWQtc3lzdGVtJztcblxuaW1wb3J0IHsgV2l0aENvbG9yUHJvcEZpeCB9IGZyb20gJy4uL2NvbG9yUHJvcEZpeCc7XG5pbXBvcnQgeyBQb2x5Q29tcG9uZW50IH0gZnJvbSAnLi4vcG9seUNvbXBvbmVudCc7XG5cbmltcG9ydCBUZXh0IGZyb20gJy4uL1RleHQnO1xuXG5jb25zdCBiYXNlU3R5bGVzID0gY3NzYFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmUtb2Zmc2V0OiAycHg7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG5gO1xuXG50eXBlIFZhcmlhbnQgPSAnZGVmYXVsdCcgfCAnbXV0ZWQnIHwgJ2JyYW5kTGlnaHQnIHwgJ2JyYW5kRGFyayc7XG5cbmNvbnN0IHZhcmlhbnRTdHlsZXMgPSAoe1xuICB2YXJpYW50ID0gJ2RlZmF1bHQnLFxuICB0aGVtZTogeyBjb2xvcnMgfVxufToge1xuICB2YXJpYW50PzogVmFyaWFudDtcbiAgdGhlbWU6IFRoZW1lO1xufSkgPT4ge1xuICBjb25zdCB2YXJpYW50TWFwcGluZyA9IHtcbiAgICBicmFuZERhcms6IHtcbiAgICAgIGNvbG9yOiBjb2xvcnMuaW50ZW50LmJyYW5kLmRhcmssXG4gICAgICAnJjp2aXNpdGVkJzoge1xuICAgICAgICBjb2xvcjogY29sb3JzLmludGVudC5icmFuZC5kYXJrXG4gICAgICB9LFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMuaW50ZW50LmJyYW5kLmRhcmtcbiAgICAgIH0sXG4gICAgICAnJjphY3RpdmUnOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMuaW50ZW50LmJyYW5kLmRhcmtcbiAgICAgIH0sXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgb3V0bGluZTogYDFweCBzb2xpZCAke2NvbG9ycy5icmFuZC5kYXJrfWBcbiAgICAgIH1cbiAgICB9LFxuICAgIGJyYW5kTGlnaHQ6IHtcbiAgICAgIGNvbG9yOiBjb2xvcnMuaW50ZW50LmJyYW5kLmxpZ2h0LFxuICAgICAgJyY6dmlzaXRlZCc6IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy5pbnRlbnQuYnJhbmQubGlnaHRcbiAgICAgIH0sXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy5pbnRlbnQuYnJhbmQubGlnaHRcbiAgICAgIH0sXG4gICAgICAnJjphY3RpdmUnOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMuaW50ZW50LmJyYW5kLmxpZ2h0XG4gICAgICB9LFxuICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgIG91dGxpbmU6IGAxcHggc29saWQgJHtjb2xvcnMuYnJhbmQubGlnaHR9YFxuICAgICAgfVxuICAgIH0sXG4gICAgZGVmYXVsdDoge1xuICAgICAgY29sb3I6IGNvbG9ycy5wYWxldHRlLnRlYWwuZGVmYXVsdCxcbiAgICAgICcmOnZpc2l0ZWQnOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMucGFsZXR0ZS50ZWFsLmRlZmF1bHRcbiAgICAgIH0sXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy5wYWxldHRlLnRlYWwuZGFya1xuICAgICAgfSxcbiAgICAgICcmOmFjdGl2ZSc6IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy5wYWxldHRlLnRlYWwuZGFya2VyXG4gICAgICB9LFxuICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgIG91dGxpbmU6IGAxcHggc29saWQgJHtjb2xvcnMucGFsZXR0ZS50ZWFsLmRlZmF1bHR9YFxuICAgICAgfVxuICAgIH0sXG4gICAgbXV0ZWQ6IHtcbiAgICAgIGNvbG9yOiBjb2xvcnMudGV4dC5tdXRlZCxcbiAgICAgICcmOnZpc2l0ZWQnOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMudGV4dC5tdXRlZFxuICAgICAgfSxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogY29sb3JzLnRleHQuZGVmYXVsdFxuICAgICAgfSxcbiAgICAgICcmOmFjdGl2ZSc6IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy50ZXh0LmRhcmtcbiAgICAgIH0sXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgb3V0bGluZTogYDFweCBzb2xpZCAke2NvbG9ycy5ncmV5MTAwfWBcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHZhcmlhbnRNYXBwaW5nW3ZhcmlhbnRdO1xufTtcblxudHlwZSBQcm9wcyA9IENvbG9yUHJvcHMgJiB7XG4gIHZhcmlhbnQ/OiBWYXJpYW50O1xufTtcblxuY29uc3QgVGV4dEFuY2hvciA9IFRleHQud2l0aENvbXBvbmVudCgnYScpO1xuY29uc3QgVGV4dEFuY2hvcldpdGhDb2xvclByb3BGaXg6IFdpdGhDb2xvclByb3BGaXg8dHlwZW9mIFRleHRBbmNob3I+ID1cbiAgVGV4dEFuY2hvcjtcblxuY29uc3QgTGluazogUG9seUNvbXBvbmVudDwnYScsIFByb3BzPiA9IHN0eWxlZChcbiAgVGV4dEFuY2hvcldpdGhDb2xvclByb3BGaXhcbik8UHJvcHM+YFxuICAke2Jhc2VTdHlsZXN9O1xuICAke3ZhcmlhbnRTdHlsZXN9O1xuICAke2NvbG9yfTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IExpbms7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var variantStyles = function variantStyles(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      colors = _ref.theme.colors;
  var variantMapping = {
    brandDark: {
      color: colors.intent.brand.dark,
      '&:visited': {
        color: colors.intent.brand.dark
      },
      '&:hover': {
        color: colors.intent.brand.dark
      },
      '&:active': {
        color: colors.intent.brand.dark
      },
      '&:focus': {
        outline: "1px solid ".concat(colors.brand.dark)
      }
    },
    brandLight: {
      color: colors.intent.brand.light,
      '&:visited': {
        color: colors.intent.brand.light
      },
      '&:hover': {
        color: colors.intent.brand.light
      },
      '&:active': {
        color: colors.intent.brand.light
      },
      '&:focus': {
        outline: "1px solid ".concat(colors.brand.light)
      }
    },
    "default": {
      color: colors.palette.teal["default"],
      '&:visited': {
        color: colors.palette.teal["default"]
      },
      '&:hover': {
        color: colors.palette.teal.dark
      },
      '&:active': {
        color: colors.palette.teal.darker
      },
      '&:focus': {
        outline: "1px solid ".concat(colors.palette.teal["default"])
      }
    },
    muted: {
      color: colors.text.muted,
      '&:visited': {
        color: colors.text.muted
      },
      '&:hover': {
        color: colors.text["default"]
      },
      '&:active': {
        color: colors.text.dark
      },
      '&:focus': {
        outline: "1px solid ".concat(colors.grey100)
      }
    }
  };
  return variantMapping[variant];
};

var TextAnchor = _Text["default"].withComponent('a', {
  target: "eq1i4jb1",
  label: "TextAnchor"
});

var TextAnchorWithColorPropFix = TextAnchor;
var Link = ( /*#__PURE__*/0, _base["default"])(TextAnchorWithColorPropFix, {
  target: "eq1i4jb0",
  label: "Link"
})(baseStyles, ";", variantStyles, ";", _styledSystem.color, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9MaW5rL0xpbmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0dRIiwiZmlsZSI6Ii4uLy4uL3NyYy9MaW5rL0xpbmsudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MsIFRoZW1lIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY29sb3IsIENvbG9yUHJvcHMgfSBmcm9tICdzdHlsZWQtc3lzdGVtJztcblxuaW1wb3J0IHsgV2l0aENvbG9yUHJvcEZpeCB9IGZyb20gJy4uL2NvbG9yUHJvcEZpeCc7XG5pbXBvcnQgeyBQb2x5Q29tcG9uZW50IH0gZnJvbSAnLi4vcG9seUNvbXBvbmVudCc7XG5cbmltcG9ydCBUZXh0IGZyb20gJy4uL1RleHQnO1xuXG5jb25zdCBiYXNlU3R5bGVzID0gY3NzYFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuXG4gICY6Zm9jdXMge1xuICAgIG91dGxpbmUtb2Zmc2V0OiAycHg7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG5gO1xuXG50eXBlIFZhcmlhbnQgPSAnZGVmYXVsdCcgfCAnbXV0ZWQnIHwgJ2JyYW5kTGlnaHQnIHwgJ2JyYW5kRGFyayc7XG5cbmNvbnN0IHZhcmlhbnRTdHlsZXMgPSAoe1xuICB2YXJpYW50ID0gJ2RlZmF1bHQnLFxuICB0aGVtZTogeyBjb2xvcnMgfVxufToge1xuICB2YXJpYW50PzogVmFyaWFudDtcbiAgdGhlbWU6IFRoZW1lO1xufSkgPT4ge1xuICBjb25zdCB2YXJpYW50TWFwcGluZyA9IHtcbiAgICBicmFuZERhcms6IHtcbiAgICAgIGNvbG9yOiBjb2xvcnMuaW50ZW50LmJyYW5kLmRhcmssXG4gICAgICAnJjp2aXNpdGVkJzoge1xuICAgICAgICBjb2xvcjogY29sb3JzLmludGVudC5icmFuZC5kYXJrXG4gICAgICB9LFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMuaW50ZW50LmJyYW5kLmRhcmtcbiAgICAgIH0sXG4gICAgICAnJjphY3RpdmUnOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMuaW50ZW50LmJyYW5kLmRhcmtcbiAgICAgIH0sXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgb3V0bGluZTogYDFweCBzb2xpZCAke2NvbG9ycy5icmFuZC5kYXJrfWBcbiAgICAgIH1cbiAgICB9LFxuICAgIGJyYW5kTGlnaHQ6IHtcbiAgICAgIGNvbG9yOiBjb2xvcnMuaW50ZW50LmJyYW5kLmxpZ2h0LFxuICAgICAgJyY6dmlzaXRlZCc6IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy5pbnRlbnQuYnJhbmQubGlnaHRcbiAgICAgIH0sXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy5pbnRlbnQuYnJhbmQubGlnaHRcbiAgICAgIH0sXG4gICAgICAnJjphY3RpdmUnOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMuaW50ZW50LmJyYW5kLmxpZ2h0XG4gICAgICB9LFxuICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgIG91dGxpbmU6IGAxcHggc29saWQgJHtjb2xvcnMuYnJhbmQubGlnaHR9YFxuICAgICAgfVxuICAgIH0sXG4gICAgZGVmYXVsdDoge1xuICAgICAgY29sb3I6IGNvbG9ycy5wYWxldHRlLnRlYWwuZGVmYXVsdCxcbiAgICAgICcmOnZpc2l0ZWQnOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMucGFsZXR0ZS50ZWFsLmRlZmF1bHRcbiAgICAgIH0sXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy5wYWxldHRlLnRlYWwuZGFya1xuICAgICAgfSxcbiAgICAgICcmOmFjdGl2ZSc6IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy5wYWxldHRlLnRlYWwuZGFya2VyXG4gICAgICB9LFxuICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgIG91dGxpbmU6IGAxcHggc29saWQgJHtjb2xvcnMucGFsZXR0ZS50ZWFsLmRlZmF1bHR9YFxuICAgICAgfVxuICAgIH0sXG4gICAgbXV0ZWQ6IHtcbiAgICAgIGNvbG9yOiBjb2xvcnMudGV4dC5tdXRlZCxcbiAgICAgICcmOnZpc2l0ZWQnOiB7XG4gICAgICAgIGNvbG9yOiBjb2xvcnMudGV4dC5tdXRlZFxuICAgICAgfSxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogY29sb3JzLnRleHQuZGVmYXVsdFxuICAgICAgfSxcbiAgICAgICcmOmFjdGl2ZSc6IHtcbiAgICAgICAgY29sb3I6IGNvbG9ycy50ZXh0LmRhcmtcbiAgICAgIH0sXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgb3V0bGluZTogYDFweCBzb2xpZCAke2NvbG9ycy5ncmV5MTAwfWBcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHZhcmlhbnRNYXBwaW5nW3ZhcmlhbnRdO1xufTtcblxudHlwZSBQcm9wcyA9IENvbG9yUHJvcHMgJiB7XG4gIHZhcmlhbnQ/OiBWYXJpYW50O1xufTtcblxuY29uc3QgVGV4dEFuY2hvciA9IFRleHQud2l0aENvbXBvbmVudCgnYScpO1xuY29uc3QgVGV4dEFuY2hvcldpdGhDb2xvclByb3BGaXg6IFdpdGhDb2xvclByb3BGaXg8dHlwZW9mIFRleHRBbmNob3I+ID1cbiAgVGV4dEFuY2hvcjtcblxuY29uc3QgTGluazogUG9seUNvbXBvbmVudDwnYScsIFByb3BzPiA9IHN0eWxlZChcbiAgVGV4dEFuY2hvcldpdGhDb2xvclByb3BGaXhcbik8UHJvcHM+YFxuICAke2Jhc2VTdHlsZXN9O1xuICAke3ZhcmlhbnRTdHlsZXN9O1xuICAke2NvbG9yfTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IExpbms7XG4iXX0= */"));
var _default = Link;
exports["default"] = _default;