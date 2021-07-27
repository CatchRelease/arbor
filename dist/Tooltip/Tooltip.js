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
const prop_types_1 = __importDefault(require("prop-types"));
const headless_1 = __importDefault(require("@tippyjs/react/headless"));
const tippy_js_1 = require("tippy.js");
const framer_motion_1 = require("framer-motion");
const Box_1 = __importDefault(require("../Box"));
const Card_1 = __importDefault(require("../Card"));
const Grid_1 = __importDefault(require("../Grid"));
const Heading_1 = __importDefault(require("../Heading"));
const Text_1 = __importDefault(require("../Text"));
const Tooltip = (_a) => {
    var { title, content, children, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    render } = _a, props = __rest(_a, ["title", "content", "children", "render"]);
    const [mounted, setMounted] = react_1.useState(false);
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
    const renderTooltip = (attrs) => (jsx_runtime_1.jsx(Box_1.default, Object.assign({ as: framer_motion_1.motion.div, initial: "hidden", variants: variants, animate: mounted ? 'visible' : 'hidden', transition: springConfig }, attrs, { children: jsx_runtime_1.jsxs(Card_1.default, Object.assign({ bg: "monochrome.grey90", borderRadius: "small", boxShadow: "elevation1", color: "monochrome.white", gridGap: "smallest", fontSize: "size3", maxWidth: "200px", p: "smaller", css: react_2.css `
          word-break: break-word;
        ` }, props, { children: [title && (jsx_runtime_1.jsx(Heading_1.default.H3, Object.assign({ mb: "0", fontSize: "inherit", color: "inherit", textAlign: "inherit" }, { children: title }), void 0)), content && (jsx_runtime_1.jsx(Text_1.default, Object.assign({ as: Grid_1.default, fontSize: "inherit", color: "inherit", textAlign: "inherit" }, { children: content }), void 0))] }), void 0) }), void 0));
    return (jsx_runtime_1.jsx(headless_1.default, Object.assign({ render: (attrs) => (mounted ? renderTooltip(attrs) : ''), offset: [0, 4], plugins: [tippy_js_1.sticky, lazyPlugin], popperOptions: {
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
    children: prop_types_1.default.element.isRequired,
    /**
     * Content to display within the tooltip when it is displayed
     * */
    content: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.node]),
    /**
     * Title to display above the tooltip content
     * */
    title: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.node]),
    /**
     * Render function for rendering tippy element from scratch
     */
    render: prop_types_1.default.func
};
Tooltip.defaultProps = {
    content: null,
    title: null,
    render: null
};
exports.default = Tooltip;
