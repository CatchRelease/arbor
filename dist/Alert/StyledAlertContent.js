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
var Grid_1 = __importDefault(require("../Grid"));
var intents_1 = __importDefault(require("./intents"));
var gridTemplateColumns = function (_a) {
    var intent = _a.intent, onClose = _a.onClose;
    var columns;
    if (intent && onClose) {
        columns = '0fr 1fr 0fr';
    }
    else if (intent) {
        columns = '0fr 1fr';
    }
    else if (onClose) {
        columns = '1fr 0fr';
    }
    return react_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    grid-template-columns: ", ";\n  "], ["\n    grid-template-columns: ", ";\n  "])), columns);
};
var StyledAlertContent = styled_1["default"](Grid_1["default"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), gridTemplateColumns);
StyledAlertContent.propTypes = {
    details: prop_types_1["default"].oneOfType([
        prop_types_1["default"].node,
        prop_types_1["default"].arrayOf(prop_types_1["default"].node)
    ]),
    intent: prop_types_1["default"].oneOf(intents_1["default"]),
    onClose: prop_types_1["default"].func
};
StyledAlertContent.defaultProps = __assign(__assign({}, Grid_1["default"].defaultProps), { alignItems: 'center', details: undefined, gridColumnGap: 'regular', gridRowGap: 'smaller', intent: undefined, onClose: undefined, p: 'regular' });
exports["default"] = StyledAlertContent;
var templateObject_1, templateObject_2;
