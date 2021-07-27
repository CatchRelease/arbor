"use strict";
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
exports.__esModule = true;
exports.Modal = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var react_modal_1 = __importDefault(require("react-modal"));
var prop_types_1 = __importDefault(require("prop-types"));
var react_1 = require("@emotion/react");
var buildModalCss_1 = __importDefault(require("./buildModalCss"));
var Modal = function (_a) {
    var children = _a.children, modalCss = _a.modalCss, overlayCss = _a.overlayCss, theme = _a.theme, // eslint-disable-line react/prop-types
    props = __rest(_a, ["children", "modalCss", "overlayCss", "theme"]);
    var combinedModalCss = buildModalCss_1["default"]({ theme: theme, modalCss: modalCss, overlayCss: overlayCss });
    return (jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsx(react_1.Global, { styles: combinedModalCss }, void 0), jsx_runtime_1.jsx(react_modal_1["default"], __assign({ overlayClassName: "ArborModalOverlay", className: "ArborModal" }, props, { children: children }), void 0)] }, void 0));
};
exports.Modal = Modal;
exports.Modal.propTypes = {
    /**
     * Content to be displayed with the modal
     */
    children: prop_types_1["default"].oneOfType([
        prop_types_1["default"].node,
        prop_types_1["default"].arrayOf(prop_types_1["default"].node)
    ]).isRequired,
    /**
     * Optional overrides of the modal css. This will be injected via emotion's
     * Global style component.
     */
    modalCss: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].func]),
    /**
     * Optional overrides to the overlay CSS. This will be injected via emotion's
     * Global style component.
     */
    overlayCss: prop_types_1["default"].oneOfType([prop_types_1["default"].object, prop_types_1["default"].func])
};
exports.Modal.defaultProps = {
    modalCss: {},
    overlayCss: {}
};
exports["default"] = react_1.withTheme(exports.Modal);
