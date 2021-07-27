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
const react_popover_1 = __importDefault(require("react-popover"));
const prop_types_1 = __importDefault(require("prop-types"));
const PopoverContent_1 = __importDefault(require("./PopoverContent"));
class Popover extends react_1.Component {
    constructor(props) {
        super(props);
        this.handleOutsideClick = (e) => {
            const { isOpen } = this.state;
            if (!isOpen) {
                return;
            }
            const currentRef = this.node.current;
            if (!currentRef.containerEl.contains(e.target) &&
                !currentRef.targetEl.contains(e.target)) {
                this.close();
            }
        };
        this.handleKeyboard = (e) => {
            if (e.key === 'Escape') {
                this.close();
            }
        };
        this.toggle = (e) => {
            const { isOpen } = this.state;
            if (e) {
                if (typeof e.preventDefault === 'function') {
                    e.preventDefault();
                }
                if (typeof e.stopPropagation === 'function') {
                    e.stopPropagation();
                }
            }
            if (isOpen) {
                this.close();
            }
            else {
                this.open();
            }
        };
        this.state = {
            isOpen: false
        };
        this.node = react_1.createRef();
    }
    componentDidMount() {
        document.addEventListener('click', this.handleOutsideClick, true);
        document.addEventListener('keypress', this.handleKeyboard, true);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.handleOutsideClick, true);
        document.removeEventListener('keypress', this.handleKeyboard, true);
    }
    open(callback) {
        const { onOpen } = this.props;
        const { isOpen } = this.state;
        if (isOpen) {
            return;
        }
        this.setState({ isOpen: true }, () => {
            if (callback) {
                callback();
            }
            onOpen();
        });
    }
    close() {
        const { onClose } = this.props;
        const { isOpen } = this.state;
        if (!isOpen) {
            return;
        }
        this.setState({ isOpen: false }, onClose);
    }
    render() {
        const _a = this.props, { children, content, contentProps, preferPlace, place } = _a, popoverProps = __rest(_a, ["children", "content", "contentProps", "preferPlace", "place"]);
        const { isOpen } = this.state;
        const styledContent = (jsx_runtime_1.jsx(PopoverContent_1.default, Object.assign({}, contentProps, { children: content }), void 0));
        const trigger = react_1.cloneElement(children, {
            onClick: this.toggle
        });
        return (jsx_runtime_1.jsx(react_popover_1.default, Object.assign({ ref: this.node, isOpen: isOpen, body: styledContent, preferPlace: preferPlace, place: place, tipSize: 0.01, enterExitTransitionDurationMs: 0 }, popoverProps, { children: trigger }), void 0));
    }
}
Popover.propTypes = {
    /**
     * Content to display within the Popover
     */
    content: prop_types_1.default.node.isRequired,
    /**
     * Props to be passed to the PopoverContent component
     */
    contentProps: prop_types_1.default.object,
    /**
     * The trigger which will open the popover when it is clicked. By default,
     * the child will be cloned and an onClick handler will be attached to open
     * the popover when it is clicked.
     */
    children: prop_types_1.default.node.isRequired,
    /**
     * Optional callback that will be fired once the Popover's state is set to opened
     */
    onOpen: prop_types_1.default.func,
    /**
     * Optional callback that will be fired once the Popover's state is set to closed
     */
    onClose: prop_types_1.default.func,
    /**
     * Preferred location to place the popover when it's opened in the event that
     * there are multiple available areas where the popover would fit. This list
     * is based off the supported places provided by [littlebits/react-popover](https://github.com/littlebits/react-popover#preferplace--enum-string--null)
     */
    preferPlace: prop_types_1.default.oneOf([
        'above',
        'right',
        'below',
        'left',
        'row',
        'column',
        'start',
        'end'
    ]),
    /**
     * Required location or scope to place the popover when it's opened in the event that
     * there are multiple available areas where the popover would fit. This list
     * is based off the supported places provided by [littlebits/react-popover](https://github.com/littlebits/react-popover#code-place-string-null-code)
     */
    place: prop_types_1.default.oneOf([
        'above',
        'right',
        'below',
        'left',
        'row',
        'column',
        'start',
        'end'
    ])
};
Popover.defaultProps = {
    contentProps: {},
    preferPlace: 'below',
    place: 'column',
    onOpen: () => null,
    onClose: () => null
};
exports.default = Popover;
