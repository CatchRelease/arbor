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
var Box_1 = __importDefault(require("../Box"));
var Flex_1 = __importDefault(require("../Flex"));
var StyledTabs_1 = __importDefault(require("./StyledTabs"));
var Tab_1 = __importDefault(require("./Tab"));
var constants_1 = require("../constants");
var getTabContentId = function (_a) {
    var _b = _a.props, children = _b.children, id = _b.id;
    return children.props.id || id + "-tab-content";
};
var Tabs = /** @class */ (function (_super) {
    __extends(Tabs, _super);
    function Tabs(props) {
        var _this = _super.call(this, props) || this;
        _this.activateTab = function (tab) {
            _this.setState({ activeTabId: tab.props.id });
        };
        _this.handleKeyPress = function (key, onClick) {
            if (key === constants_1.ENTER_KEY || key === constants_1.SPACEBAR) {
                onClick();
            }
        };
        _this.handleTabClick = function (tab, originalOnClick) {
            var callback = _this.isControlled ? function () { } : function () { return _this.activateTab(tab); };
            if (originalOnClick) {
                originalOnClick(callback);
            }
            else {
                callback();
            }
        };
        var _a = _this.props, activeTabId = _a.activeTabId, defaultTabId = _a.defaultTabId, children = _a.children;
        _this.state = activeTabId
            ? {}
            : { activeTabId: defaultTabId || children.find(function (tab) { return !!tab; }).props.id };
        return _this;
    }
    Object.defineProperty(Tabs.prototype, "activeTab", {
        get: function () {
            var activeTabId = this.activeTabId;
            var children = this.props.children;
            return children.find(function (tab) {
                if (!tab) {
                    return false;
                }
                var id = tab.props.id;
                return id === activeTabId;
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tabs.prototype, "activeTabId", {
        get: function () {
            var activeTabIdProp = this.props.activeTabId;
            var activeTabIdFromState = this.state.activeTabId;
            return activeTabIdProp || activeTabIdFromState;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tabs.prototype, "activeTabContent", {
        get: function () {
            var activeTab = this.activeTab;
            return react_1.cloneElement(activeTab.props.children, {
                id: getTabContentId(activeTab)
            });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tabs.prototype, "isControlled", {
        get: function () {
            var activeTabId = this.props.activeTabId;
            return !!activeTabId;
        },
        enumerable: false,
        configurable: true
    });
    Tabs.prototype.render = function () {
        var _this = this;
        var activeTabId = this.activeTabId;
        var _a = this.props, children = _a.children, tabBarAside = _a.tabBarAside, props = __rest(_a, ["children", "tabBarAside"]);
        return (jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsxs(StyledTabs_1["default"], __assign({}, props, { children: [jsx_runtime_1.jsx(Box_1["default"], { children: children.map(function (tab) {
                                if (!tab) {
                                    return tab;
                                }
                                var _a = tab.props, id = _a.id, title = _a.title, originalOnClick = _a.onClick;
                                var active = activeTabId === id;
                                var tabContentId = getTabContentId(tab);
                                var onClick = function () { return _this.handleTabClick(tab, originalOnClick); };
                                return react_1.cloneElement(tab, {
                                    'aria-controls': tabContentId,
                                    'aria-selected': active ? 'true' : 'false',
                                    active: active,
                                    key: id,
                                    onClick: onClick,
                                    onKeyPress: function (_a) {
                                        var key = _a.key;
                                        return _this.handleKeyPress(key, onClick);
                                    }
                                }, title);
                            }) }, void 0), tabBarAside && jsx_runtime_1.jsx(Flex_1["default"], __assign({ alignItems: "center" }, { children: tabBarAside }), void 0)] }), void 0), this.activeTabContent] }, void 0));
    };
    return Tabs;
}(react_1.Component));
Tabs.propTypes = {
    activeTabId: prop_types_1["default"].string,
    defaultTabId: prop_types_1["default"].string,
    children: prop_types_1["default"].oneOfType([
        prop_types_1["default"].arrayOf(Tab_1["default"]),
        prop_types_1["default"].objectOf(Tab_1["default"])
    ]).isRequired,
    tabBarAside: prop_types_1["default"].node
};
Tabs.defaultProps = {
    activeTabId: undefined,
    defaultTabId: undefined,
    tabBarAside: undefined
};
exports["default"] = Tabs;
