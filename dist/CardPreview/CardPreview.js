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
var styled_1 = __importDefault(require("@emotion/styled"));
var prop_types_1 = __importDefault(require("prop-types"));
var utils_1 = require("../utils");
var Box_1 = __importDefault(require("../Box"));
var CardPreview = styled_1["default"](Box_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: url(", ") center center no-repeat\n    ", ";\n  background-size: contain;\n  ", ";\n"], ["\n  background: url(", ") center center no-repeat\n    ", ";\n  background-size: contain;\n  ", ";\n"])), function (props) { return props.image; }, function (props) { return props.theme.colors.monochrome.black; }, utils_1.ratio);
CardPreview.propTypes = __assign({ 
    /**
     * Image to be rendered as the background of the CardPreview
     */
    image: prop_types_1["default"].string.isRequired }, utils_1.ratio.propTypes);
CardPreview.defaultProps = {
    ratio: 9 / 16
};
exports["default"] = CardPreview;
var templateObject_1;
