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
var react_1 = require("@emotion/react");
var Box_1 = __importDefault(require("../Box"));
var inlineStyles = function (_a) {
    var inline = _a.inline, theme = _a.theme;
    if (!inline) {
        return '';
    }
    return react_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    white-space: nowrap;\n    max-width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n\n    dd {\n      display: inline;\n      margin-left: ", ";\n    }\n\n    dd:after {\n      display: block;\n      content: '';\n    }\n\n    dt {\n      display: inline-block;\n      margin-bottom: ", ";\n    }\n  "], ["\n    white-space: nowrap;\n    max-width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n\n    dd {\n      display: inline;\n      margin-left: ", ";\n    }\n\n    dd:after {\n      display: block;\n      content: '';\n    }\n\n    dt {\n      display: inline-block;\n      margin-bottom: ", ";\n    }\n  "])), theme.space.smaller, theme.space.small);
};
var DescriptionList = styled_1["default"](Box_1["default"].withComponent('dl'))(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), inlineStyles);
DescriptionList.propTypes = {
    inline: prop_types_1["default"].bool
};
DescriptionList.defaultProps = __assign(__assign({}, Box_1["default"].defaultProps), { inline: false });
exports["default"] = DescriptionList;
var templateObject_1, templateObject_2;
