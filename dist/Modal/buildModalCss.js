"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("@emotion/react");
var polished_1 = require("polished");
var baseModalCss = react_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  outline: none;\n"], ["\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  outline: none;\n"])));
var baseOverlayCss = function (theme) { return react_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  align-items: center;\n  background: ", ";\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n"], ["\n  align-items: center;\n  background: ", ";\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n"])), polished_1.transparentize(0.5, theme.colors.grey90)); };
var buildModalCss = function (_a) {
    var theme = _a.theme, overlayCss = _a.overlayCss, modalCss = _a.modalCss;
    return react_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  .ArborModalOverlay {\n    ", ";\n    ", ";\n  }\n\n  .ArborModal {\n    ", ";\n    ", ";\n  }\n\n  /* Prevent body scrolling when modal is open */\n  .ReactModal__Body--open {\n    overflow: hidden;\n  }\n"], ["\n  .ArborModalOverlay {\n    ", ";\n    ", ";\n  }\n\n  .ArborModal {\n    ", ";\n    ", ";\n  }\n\n  /* Prevent body scrolling when modal is open */\n  .ReactModal__Body--open {\n    overflow: hidden;\n  }\n"])), baseOverlayCss(theme), typeof overlayCss === 'function' ? overlayCss(theme) : overlayCss, baseModalCss, typeof modalCss === 'function' ? modalCss(theme) : modalCss);
};
exports["default"] = buildModalCss;
var templateObject_1, templateObject_2, templateObject_3;
