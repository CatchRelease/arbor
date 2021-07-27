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
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var react_1 = require("react");
var react_2 = require("@emotion/react");
var prop_types_1 = __importDefault(require("prop-types"));
var headless_1 = __importDefault(require("@tippyjs/react/headless"));
var tippy_js_1 = require("tippy.js");
var framer_motion_1 = require("framer-motion");
var Box_1 = __importDefault(require("../Box"));
var Card_1 = __importDefault(require("../Card"));
var Grid_1 = __importDefault(require("../Grid"));
var Heading_1 = __importDefault(require("../Heading"));
var Text_1 = __importDefault(require("../Text"));
var Tooltip = function (_a) {
    var title = _a.title, content = _a.content, children = _a.children, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    render = _a.render, props = __rest(_a, ["title", "content", "children", "render"]);
    var _b = react_1.useState(false), mounted = _b[0], setMounted = _b[1];
    var lazyPlugin = {
        fn: function () { return ({
            onMount: function () { return setMounted(true); },
            onHide: function () { return setMounted(false); }
        }); }
    };
    var springConfig = {
        type: 'spring',
        damping: 24,
        stiffness: 480,
        restSpeed: 0.1,
        restDelta: 0.6
    };
    var variants = {
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.5 }
    };
    var renderTooltip = function (attrs) { return (jsx_runtime_1.jsx(Box_1["default"], __assign({ as: framer_motion_1.motion.div, initial: "hidden", variants: variants, animate: mounted ? 'visible' : 'hidden', transition: springConfig }, attrs, { children: jsx_runtime_1.jsxs(Card_1["default"], __assign({ bg: "monochrome.grey90", borderRadius: "small", boxShadow: "elevation1", color: "monochrome.white", gridGap: "smallest", fontSize: "size3", maxWidth: "200px", p: "smaller", css: react_2.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          word-break: break-word;\n        "], ["\n          word-break: break-word;\n        "]))) }, props, { children: [title && (jsx_runtime_1.jsx(Heading_1["default"].H3, __assign({ mb: "0", fontSize: "inherit", color: "inherit", textAlign: "inherit" }, { children: title }), void 0)), content && (jsx_runtime_1.jsx(Text_1["default"], __assign({ as: Grid_1["default"], fontSize: "inherit", color: "inherit", textAlign: "inherit" }, { children: content }), void 0))] }), void 0) }), void 0)); };
    return (jsx_runtime_1.jsx(headless_1["default"], __assign({ render: function (attrs) { return (mounted ? renderTooltip(attrs) : ''); }, offset: [0, 4], plugins: [tippy_js_1.sticky, lazyPlugin], popperOptions: {
            modifiers: [
                {
                    name: 'preventOverflow',
                    options: {
                        padding: 4
                    }
                }
            ]
        } }, { children: children }), void 0));
};
Tooltip.propTypes = {
    /**
     * Node which will trigger the tooltip. This should be either an Icon, Button,
     * or Link.
     * */
    children: prop_types_1["default"].element.isRequired,
    /**
     * Content to display within the tooltip when it is displayed
     * */
    content: prop_types_1["default"].oneOfType([prop_types_1["default"].string, prop_types_1["default"].node]),
    /**
     * Title to display above the tooltip content
     * */
    title: prop_types_1["default"].oneOfType([prop_types_1["default"].string, prop_types_1["default"].node]),
    /**
     * Render function for rendering tippy element from scratch
     */
    render: prop_types_1["default"].func
};
Tooltip.defaultProps = {
    content: null,
    title: null,
    render: null
};
exports["default"] = Tooltip;
var templateObject_1;
