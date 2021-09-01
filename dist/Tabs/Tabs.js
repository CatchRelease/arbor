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
const castArray_1 = __importDefault(require("lodash/castArray"));
const Box_1 = __importDefault(require("../Box"));
const Flex_1 = __importDefault(require("../Flex"));
const StyledTabs_1 = __importDefault(require("./StyledTabs"));
const constants_1 = require("../constants");
const getActiveTab = (activeTabId, children) => children.find((tab) => {
    if (!tab) {
        return false;
    }
    const { props: { id } } = tab;
    return id === activeTabId;
});
const getTabContentId = (tab) => {
    if (!tab) {
        return undefined;
    }
    const { props: { children, id } } = tab;
    return (children === null || children === void 0 ? void 0 : children.props.id) || `${id}-tab-content`;
};
const Tabs = (_a) => {
    var { activeTabId, children, defaultTabId, tabBarAside } = _a, props = __rest(_a, ["activeTabId", "children", "defaultTabId", "tabBarAside"]);
    const childrenAsArray = (0, castArray_1.default)(children);
    const [state, setState] = (0, react_1.useState)(() => {
        var _a;
        return activeTabId
            ? {}
            : {
                activeTabId: defaultTabId || ((_a = childrenAsArray.find((tab) => !!tab)) === null || _a === void 0 ? void 0 : _a.props.id)
            };
    });
    const currentTabId = activeTabId || state.activeTabId;
    const activeTab = getActiveTab(currentTabId, childrenAsArray);
    if (!activeTab) {
        return null;
    }
    const activeTabContent = (0, react_1.cloneElement)(activeTab.props.children, {
        id: getTabContentId(activeTab)
    });
    const activateTab = (tab) => {
        setState({ activeTabId: tab.props.id });
    };
    const handleKeyPress = (key, onClick) => {
        if (key === constants_1.ENTER_KEY || key === constants_1.SPACEBAR) {
            onClick();
        }
    };
    const handleTabClick = (tab, originalOnClick) => {
        const isControlled = !!activeTabId;
        const callback = isControlled ? () => { } : () => activateTab(tab);
        if (originalOnClick) {
            originalOnClick(callback);
        }
        else {
            callback();
        }
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(StyledTabs_1.default, Object.assign({}, props, { children: [(0, jsx_runtime_1.jsx)(Box_1.default, { children: childrenAsArray.map((tab) => {
                            if (!tab) {
                                return tab;
                            }
                            const { id, title, onClick: originalOnClick } = tab.props;
                            const active = currentTabId === id;
                            const tabContentId = getTabContentId(tab);
                            const onClick = () => handleTabClick(tab, originalOnClick);
                            return (0, react_1.cloneElement)(tab, {
                                'aria-controls': tabContentId,
                                'aria-selected': active ? 'true' : 'false',
                                active,
                                key: id,
                                onClick,
                                onKeyPress: ({ key }) => handleKeyPress(key, onClick)
                            }, title);
                        }) }, void 0), tabBarAside && (0, jsx_runtime_1.jsx)(Flex_1.default, Object.assign({ alignItems: "center" }, { children: tabBarAside }), void 0)] }), void 0), activeTabContent] }, void 0));
};
Tabs.defaultProps = {
    activeTabId: undefined,
    defaultTabId: undefined,
    tabBarAside: undefined
};
exports.default = Tabs;
