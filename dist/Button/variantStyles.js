"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@emotion/react");
const polished_1 = require("polished");
const theme_get_1 = require("@styled-system/theme-get");
const variants = (_a) => {
    var { intent, variant, paletteColor } = _a, props = __rest(_a, ["intent", "variant", "paletteColor"]);
    const colorIntent = theme_get_1.themeGet(`colors.intent.${intent}.default`)(props);
    const colorWhite = theme_get_1.themeGet('colors.monochrome.white')(props);
    const colorGrey = theme_get_1.themeGet(`colors.monochrome.grey10`)(props);
    const color = () => {
        if (paletteColor) {
            return theme_get_1.themeGet(`colors.palette.${paletteColor}.default`)(props);
        }
        if (variant === 'primary') {
            return intent === 'brand'
                ? theme_get_1.themeGet(`colors.intent.${intent}.lighter`)(props)
                : colorWhite;
        }
        return colorIntent;
    };
    const colorActive = polished_1.shade(0.16, colorIntent);
    const colorFocus = theme_get_1.themeGet(`colors.intent.${intent}.light`)(props);
    const colorHover = polished_1.tint(0.16, colorIntent);
    const colorIcon = () => {
        if (paletteColor) {
            return theme_get_1.themeGet(`colors.palette.${paletteColor}.default`)(props);
        }
        if (variant !== 'primary' && intent === 'brand') {
            return theme_get_1.themeGet(`colors.icon.default`)(props);
        }
        return 'inherit';
    };
    const common = react_1.css `
    &::-moz-focus-inner {
      border: 0;
    }

    &:focus {
      border: 1px solid transparent;
    }

    &:focus:hover {
      border: 1px solid transparent;
    }

    i {
      color: ${colorIcon()};
    }
  `;
    switch (variant) {
        case 'primary':
            return react_1.css `
        background-color: ${colorIntent};
        color: ${color()};

        &:enabled {
          &:active {
            background-color: ${colorActive};
          }

          &:focus {
            box-shadow: 0 0 0 3px ${colorFocus};
          }

          &:hover {
            background-color: ${colorHover};
          }
        }

        ${common};
      `;
        case 'secondary':
            return react_1.css `
        background-color: ${colorWhite};
        color: ${color()};

        &:enabled {
          border: 1px solid ${theme_get_1.themeGet(`colors.border.default`)(props)};

          &:active {
            color: ${colorActive};
            background-color: ${colorGrey};
          }

          &:focus {
            box-shadow: 0 0 0 3px ${colorFocus};
          }

          &:hover {
            border: 1px solid ${colorHover};

            i {
              color: ${color()};
            }
          }
        }

        ${common};
      `;
        case 'minimal':
            return react_1.css `
        background-color: transparent;
        border: 1px solid transparent;
        color: ${color()};

        &:disabled {
          background-color: transparent;
          color: ${theme_get_1.themeGet(`colors.text.disabled`)(props)};

          /* quiet an invalid lint error - button cannot be disabled and enabled at the same time */
          /* stylelint-disable-next-line no-descending-specificity */
          i {
            color: ${theme_get_1.themeGet(`colors.icon.disabled`)(props)};
          }
        }

        &:enabled {
          &:active {
            background-color: ${colorGrey};
            color: ${colorActive};
          }

          &:focus {
            box-shadow: 0 0 0 3px ${colorFocus};
          }

          &:hover {
            background-color: ${colorGrey};

            i {
              color: ${color()};
            }
          }
        }

        ${common};
      `;
        default:
            return '';
    }
};
exports.default = variants;
