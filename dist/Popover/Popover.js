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
var react_popover_1 = __importDefault(require("react-popover"));
var prop_types_1 = __importDefault(require("prop-types"));
var PopoverContent_1 = __importDefault(require("./PopoverContent"));
var Popover = /** @class */ (function (_super) {
    __extends(Popover, _super);
    function Popover(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOutsideClick = function (e) {
            var isOpen = _this.state.isOpen;
            if (!isOpen) {
                return;
            }
            var currentRef = _this.node.current;
            if (!currentRef.containerEl.contains(e.target) &&
                !currentRef.targetEl.contains(e.target)) {
                _this.close();
            }
        };
        _this.handleKeyboard = function (e) {
            if (e.key === 'Escape') {
                _this.close();
            }
        };
        _this.toggle = function (e) {
            var isOpen = _this.state.isOpen;
            if (e) {
                if (typeof e.preventDefault === 'function') {
                    e.preventDefault();
                }
                if (typeof e.stopPropagation === 'function') {
                    e.stopPropagation();
                }
            }
            if (isOpen) {
                _this.close();
            }
            else {
                _this.open();
            }
        };
        _this.state = {
            isOpen: false
        };
        _this.node = react_1.createRef();
        return _this;
    }
    Popover.prototype.componentDidMount = function () {
        document.addEventListener('click', this.handleOutsideClick, true);
        document.addEventListener('keypress', this.handleKeyboard, true);
    };
    Popover.prototype.componentWillUnmount = function () {
        document.removeEventListener('click', this.handleOutsideClick, true);
        document.removeEventListener('keypress', this.handleKeyboard, true);
    };
    Popover.prototype.open = function (callback) {
        var onOpen = this.props.onOpen;
        var isOpen = this.state.isOpen;
        if (isOpen) {
            return;
        }
        this.setState({ isOpen: true }, function () {
            if (callback) {
                callback();
            }
            onOpen();
        });
    };
    Popover.prototype.close = function () {
        var onClose = this.props.onClose;
        var isOpen = this.state.isOpen;
        if (!isOpen) {
            return;
        }
        this.setState({ isOpen: false }, onClose);
    };
    Popover.prototype.render = function () {
        var _a = this.props, children = _a.children, content = _a.content, contentProps = _a.contentProps, preferPlace = _a.preferPlace, place = _a.place, popoverProps = __rest(_a, ["children", "content", "contentProps", "preferPlace", "place"]);
        var isOpen = this.state.isOpen;
        var styledContent = (jsx_runtime_1.jsx(PopoverContent_1["default"], __assign({}, contentProps, { children: content }), void 0));
        var trigger = react_1.cloneElement(children, {
            onClick: this.toggle
        });
        return (jsx_runtime_1.jsx(react_popover_1["default"], __assign({ ref: this.node, isOpen: isOpen, body: styledContent, preferPlace: preferPlace, place: place, tipSize: 0.01, enterExitTransitionDurationMs: 0 }, popoverProps, { children: trigger }), void 0));
    };
    return Popover;
}(react_1.Component));
Popover.propTypes = {
    /**
     * Content to display within the Popover
     */
    content: prop_types_1["default"].node.isRequired,
    /**
     * Props to be passed to the PopoverContent component
     */
    contentProps: prop_types_1["default"].object,
    /**
     * The trigger which will open the popover when it is clicked. By default,
     * the child will be cloned and an onClick handler will be attached to open
     * the popover when it is clicked.
     */
    children: prop_types_1["default"].node.isRequired,
    /**
     * Optional callback that will be fired once the Popover's state is set to opened
     */
    onOpen: prop_types_1["default"].func,
    /**
     * Optional callback that will be fired once the Popover's state is set to closed
     */
    onClose: prop_types_1["default"].func,
    /**
     * Preferred location to place the popover when it's opened in the event that
     * there are multiple available areas where the popover would fit. This list
     * is based off the supported places provided by [littlebits/react-popover](https://github.com/littlebits/react-popover#preferplace--enum-string--null)
     */
    preferPlace: prop_types_1["default"].oneOf([
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
    place: prop_types_1["default"].oneOf([
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
    onOpen: function () { return null; },
    onClose: function () { return null; }
};
exports["default"] = Popover;
