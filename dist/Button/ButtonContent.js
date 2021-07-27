"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var prop_types_1 = __importDefault(require("prop-types"));
var styled_1 = __importDefault(require("@emotion/styled"));
var Grid_1 = __importDefault(require("../Grid"));
var gridTemplateColumns = function (_a) {
    var hasText = _a.hasText, iconStart = _a.iconStart, iconEnd = _a.iconEnd;
    if (hasText) {
        if (iconStart && iconEnd) {
            return '0fr 1fr 0fr';
        }
        if (iconStart) {
            return '0fr 1fr';
        }
        if (iconEnd) {
            return '1fr 0fr';
        }
        return '1fr';
    }
    if (iconStart && iconEnd) {
        return '0fr 0fr';
    }
    return '0fr';
};
var ButtonContent = styled_1["default"](Grid_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  grid-template-columns: ", ";\n  visibility: ", ";\n"], ["\n  grid-template-columns: ", ";\n  visibility: ", ";\n"])), gridTemplateColumns, function (props) { return (props.spin ? 'hidden' : 'inherit'); });
ButtonContent.propTypes = {
    hasText: prop_types_1["default"].bool,
    iconEnd: prop_types_1["default"].element,
    iconStart: prop_types_1["default"].element,
    spin: prop_types_1["default"].bool.isRequired
};
ButtonContent.defaultProps = __assign(__assign({}, Grid_1["default"].defaultProps), { display: 'inline-grid', alignItems: 'center', hasText: false, iconEnd: undefined, iconStart: undefined });
exports["default"] = ButtonContent;
var templateObject_1;
