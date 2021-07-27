"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var prop_types_1 = __importDefault(require("prop-types"));
var AccordionHeader_1 = __importDefault(require("./AccordionHeader"));
var AccordionPanel_1 = __importDefault(require("./AccordionPanel"));
var variants_1 = __importDefault(require("./variants"));
var AccordionSection = /** @class */ (function (_super) {
    __extends(AccordionSection, _super);
    function AccordionSection(props) {
        var _this = _super.call(this, props) || this;
        _this.onHeaderClick = function () {
            var onHeaderClick = _this.props.onHeaderClick;
            if (!_this.isControlled) {
                _this.toggle();
            }
            onHeaderClick();
        };
        _this.state = {
            isOpen: false
        };
        return _this;
    }
    Object.defineProperty(AccordionSection.prototype, "isControlled", {
        get: function () {
            var isOpen = this.props.isOpen;
            return isOpen !== undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccordionSection.prototype, "isOpen", {
        get: function () {
            var controlledIsOpen = this.props.isOpen;
            var internalIsOpen = this.state.isOpen;
            return this.isControlled ? controlledIsOpen : internalIsOpen;
        },
        enumerable: false,
        configurable: true
    });
    AccordionSection.prototype.toggle = function () {
        this.setState(function (prevState) { return ({ isOpen: !prevState.isOpen }); });
    };
    AccordionSection.prototype.render = function () {
        var _a = this.props, children = _a.children, header = _a.header, headerNote = _a.headerNote, panelId = _a.panelId, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onHeaderClick = _a.onHeaderClick, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        isOpen = _a.isOpen, variant = _a.variant, props = __rest(_a, ["children", "header", "headerNote", "panelId", "onHeaderClick", "isOpen", "variant"]);
        return (jsx_runtime_1.jsxs("section", { children: [jsx_runtime_1.jsx(AccordionHeader_1["default"], __assign({ isOpen: this.isOpen, note: headerNote, onClick: this.onHeaderClick, panelId: panelId, text: header, variant: variant }, props), void 0), jsx_runtime_1.jsx(AccordionPanel_1["default"], __assign({ id: panelId, isOpen: this.isOpen, variant: variant }, { children: children }), void 0)] }, void 0));
    };
    return AccordionSection;
}(react_1.Component));
AccordionSection.propTypes = {
    /**
     * Content to render inside the opened accordion
     * */
    children: prop_types_1["default"].oneOfType([
        prop_types_1["default"].node,
        prop_types_1["default"].arrayOf(prop_types_1["default"].node)
    ]).isRequired,
    /**
     * Content to display within the AccordionHeader component
     */
    header: prop_types_1["default"].node.isRequired,
    /**
     * Note to render within the AccordionHeader component
     */
    headerNote: prop_types_1["default"].node,
    /**
     * Manually specify whether or not the accordion is open or not. If it is not
     * provided, then the accordion section will maintain it's own open state.
     * When the component is uncontrolled, clicking the header will open the
     * accordion section.
     */
    isOpen: prop_types_1["default"].bool,
    /**
     * Callback function to call when the AccordionHeader component is clicked.
     */
    onHeaderClick: prop_types_1["default"].func,
    /**
     * HTML id attribute for the AccordionPanel component. Used in conjunction
     * with the AccordionHeader for the aria-controls attribute.
     */
    panelId: prop_types_1["default"].string.isRequired,
    /**
     * Link variant for styling. See storybook for examples.
     */
    variant: prop_types_1["default"].oneOf(variants_1["default"])
};
AccordionSection.defaultProps = {
    isOpen: undefined,
    headerNote: null,
    onHeaderClick: function () { },
    variant: 'default'
};
exports["default"] = AccordionSection;
