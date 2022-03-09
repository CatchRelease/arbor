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
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const react_1 = require("react");
const react_2 = require("@emotion/react");
const headless_1 = __importDefault(require("@tippyjs/react/headless"));
const tippy_js_1 = require("tippy.js");
const framer_motion_1 = require("framer-motion");
const Box_1 = __importDefault(require("../Box"));
const Card_1 = __importDefault(require("../Card"));
const Grid_1 = __importDefault(require("../Grid"));
const Heading_1 = __importDefault(require("../Heading"));
const Text_1 = __importDefault(require("../Text"));
const Tooltip = (_a) => {
    var { children, content, title } = _a, props = __rest(_a, ["children", "content", "title"]);
    const [mounted, setMounted] = (0, react_1.useState)(false);
    const lazyPlugin = {
        fn: () => ({
            onMount: () => setMounted(true),
            onHide: () => setMounted(false)
        })
    };
    const springConfig = {
        type: 'spring',
        damping: 24,
        stiffness: 480,
        restSpeed: 0.1,
        restDelta: 0.6
    };
    const variants = {
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.5 }
    };
    const renderTooltip = (attrs) => ((0, jsx_runtime_1.jsx)(Box_1.default, Object.assign({ as: framer_motion_1.motion.div, initial: "hidden", variants: variants, animate: mounted ? 'visible' : 'hidden', transition: springConfig }, attrs, { children: (0, jsx_runtime_1.jsxs)(Card_1.default, Object.assign({ bg: "monochrome.grey90", borderRadius: "small", boxShadow: "elevation1", color: "monochrome.white", gridGap: "smallest", fontSize: "size3", maxWidth: "200px", p: "smaller", css: (0, react_2.css) `
          word-break: break-word;
        ` }, props, { children: [title && ((0, jsx_runtime_1.jsx)(Heading_1.default.H3, Object.assign({ color: "inherit", mb: "0" }, { children: title }), void 0)), content && ((0, jsx_runtime_1.jsx)(Text_1.default, Object.assign({ as: Grid_1.default, fontSize: "inherit", color: "inherit", textAlign: "inherit" }, { children: content }), void 0))] }), void 0) }), void 0));
    return ((0, jsx_runtime_1.jsx)(headless_1.default, Object.assign({ render: (attrs) => (mounted ? renderTooltip(attrs) : ''), offset: [0, 4], plugins: [tippy_js_1.sticky, lazyPlugin], popperOptions: {
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
exports.default = Tooltip;
