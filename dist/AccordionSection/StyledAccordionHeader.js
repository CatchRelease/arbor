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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_1 = __importDefault(require("@emotion/styled"));
const theme_get_1 = require("@styled-system/theme-get");
const react_1 = require("@emotion/react");
const Flex_1 = __importDefault(require("../Flex"));
const variantStyles = (_a) => {
    var { variant } = _a, props = __rest(_a, ["variant"]);
    const borderColor = theme_get_1.themeGet('borders.default')(props);
    const backgroundColor = theme_get_1.themeGet('colors.background.default')(props);
    switch (variant) {
        case 'default':
            return react_1.css `
        background: ${backgroundColor};

        border-bottom: ${borderColor};

        section:last-child & {
          border-bottom: none;
        }
      `;
        case 'minimal':
            return '';
        default:
            return '';
    }
};
const StyledHeader = styled_1.default(Flex_1.default) `
  .button--minimal:last-of-type {
    margin-right: -${(props) => props.theme.space.smallest};

    + :not(object) {
      margin-left: ${(props) => props.theme.space.smallest};
    }
  }

  button + .button--secondary,
  button + .button--primary {
    margin-left: ${(props) => props.theme.space.smaller};
  }

  cursor: pointer;

  ${variantStyles};
`;
StyledHeader.defaultProps = {
    as: 'header'
};
exports.default = StyledHeader;
