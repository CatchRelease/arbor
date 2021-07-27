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
const prop_types_1 = __importDefault(require("prop-types"));
const AccordionHeader_1 = __importDefault(require("./AccordionHeader"));
const AccordionPanel_1 = __importDefault(require("./AccordionPanel"));
const variants_1 = __importDefault(require("./variants"));
class AccordionSection extends react_1.Component {
    constructor(props) {
        super(props);
        this.onHeaderClick = () => {
            const { onHeaderClick } = this.props;
            if (!this.isControlled) {
                this.toggle();
            }
            onHeaderClick();
        };
        this.state = {
            isOpen: false
        };
    }
    get isControlled() {
        const { isOpen } = this.props;
        return isOpen !== undefined;
    }
    get isOpen() {
        const { isOpen: controlledIsOpen } = this.props;
        const { isOpen: internalIsOpen } = this.state;
        return this.isControlled ? controlledIsOpen : internalIsOpen;
    }
    toggle() {
        this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
    }
    render() {
        const _a = this.props, { children, header, headerNote, panelId, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onHeaderClick, 
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        isOpen, variant } = _a, props = __rest(_a, ["children", "header", "headerNote", "panelId", "onHeaderClick", "isOpen", "variant"]);
        return (jsx_runtime_1.jsxs("section", { children: [jsx_runtime_1.jsx(AccordionHeader_1.default, Object.assign({ isOpen: this.isOpen, note: headerNote, onClick: this.onHeaderClick, panelId: panelId, text: header, variant: variant }, props), void 0), jsx_runtime_1.jsx(AccordionPanel_1.default, Object.assign({ id: panelId, isOpen: this.isOpen, variant: variant }, { children: children }), void 0)] }, void 0));
    }
}
AccordionSection.propTypes = {
    /**
     * Content to render inside the opened accordion
     * */
    children: prop_types_1.default.oneOfType([
        prop_types_1.default.node,
        prop_types_1.default.arrayOf(prop_types_1.default.node)
    ]).isRequired,
    /**
     * Content to display within the AccordionHeader component
     */
    header: prop_types_1.default.node.isRequired,
    /**
     * Note to render within the AccordionHeader component
     */
    headerNote: prop_types_1.default.node,
    /**
     * Manually specify whether or not the accordion is open or not. If it is not
     * provided, then the accordion section will maintain it's own open state.
     * When the component is uncontrolled, clicking the header will open the
     * accordion section.
     */
    isOpen: prop_types_1.default.bool,
    /**
     * Callback function to call when the AccordionHeader component is clicked.
     */
    onHeaderClick: prop_types_1.default.func,
    /**
     * HTML id attribute for the AccordionPanel component. Used in conjunction
     * with the AccordionHeader for the aria-controls attribute.
     */
    panelId: prop_types_1.default.string.isRequired,
    /**
     * Link variant for styling. See storybook for examples.
     */
    variant: prop_types_1.default.oneOf(variants_1.default)
};
AccordionSection.defaultProps = {
    isOpen: undefined,
    headerNote: null,
    onHeaderClick: () => { },
    variant: 'default'
};
exports.default = AccordionSection;
