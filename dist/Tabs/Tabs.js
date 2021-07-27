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
const Box_1 = __importDefault(require("../Box"));
const Flex_1 = __importDefault(require("../Flex"));
const StyledTabs_1 = __importDefault(require("./StyledTabs"));
const Tab_1 = __importDefault(require("./Tab"));
const constants_1 = require("../constants");
const getTabContentId = ({ props: { children, id } }) => children.props.id || `${id}-tab-content`;
class Tabs extends react_1.Component {
    constructor(props) {
        super(props);
        this.activateTab = (tab) => {
            this.setState({ activeTabId: tab.props.id });
        };
        this.handleKeyPress = (key, onClick) => {
            if (key === constants_1.ENTER_KEY || key === constants_1.SPACEBAR) {
                onClick();
            }
        };
        this.handleTabClick = (tab, originalOnClick) => {
            const callback = this.isControlled ? () => { } : () => this.activateTab(tab);
            if (originalOnClick) {
                originalOnClick(callback);
            }
            else {
                callback();
            }
        };
        const { activeTabId, defaultTabId, children } = this.props;
        this.state = activeTabId
            ? {}
            : { activeTabId: defaultTabId || children.find((tab) => !!tab).props.id };
    }
    get activeTab() {
        const { activeTabId } = this;
        const { children } = this.props;
        return children.find((tab) => {
            if (!tab) {
                return false;
            }
            const { props: { id } } = tab;
            return id === activeTabId;
        });
    }
    get activeTabId() {
        const { activeTabId: activeTabIdProp } = this.props;
        const { activeTabId: activeTabIdFromState } = this.state;
        return activeTabIdProp || activeTabIdFromState;
    }
    get activeTabContent() {
        const { activeTab } = this;
        return react_1.cloneElement(activeTab.props.children, {
            id: getTabContentId(activeTab)
        });
    }
    get isControlled() {
        const { activeTabId } = this.props;
        return !!activeTabId;
    }
    render() {
        const { activeTabId } = this;
        const _a = this.props, { children, tabBarAside } = _a, props = __rest(_a, ["children", "tabBarAside"]);
        return (jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsxs(StyledTabs_1.default, Object.assign({}, props, { children: [jsx_runtime_1.jsx(Box_1.default, { children: children.map((tab) => {
                                if (!tab) {
                                    return tab;
                                }
                                const { id, title, onClick: originalOnClick } = tab.props;
                                const active = activeTabId === id;
                                const tabContentId = getTabContentId(tab);
                                const onClick = () => this.handleTabClick(tab, originalOnClick);
                                return react_1.cloneElement(tab, {
                                    'aria-controls': tabContentId,
                                    'aria-selected': active ? 'true' : 'false',
                                    active,
                                    key: id,
                                    onClick,
                                    onKeyPress: ({ key }) => this.handleKeyPress(key, onClick)
                                }, title);
                            }) }, void 0), tabBarAside && jsx_runtime_1.jsx(Flex_1.default, Object.assign({ alignItems: "center" }, { children: tabBarAside }), void 0)] }), void 0), this.activeTabContent] }, void 0));
    }
}
Tabs.propTypes = {
    activeTabId: prop_types_1.default.string,
    defaultTabId: prop_types_1.default.string,
    children: prop_types_1.default.oneOfType([
        prop_types_1.default.arrayOf(Tab_1.default),
        prop_types_1.default.objectOf(Tab_1.default)
    ]).isRequired,
    tabBarAside: prop_types_1.default.node
};
Tabs.defaultProps = {
    activeTabId: undefined,
    defaultTabId: undefined,
    tabBarAside: undefined
};
exports.default = Tabs;
