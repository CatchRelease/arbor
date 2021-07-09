export default Tabs;
declare class Tabs extends Component<any, any, any> {
    constructor(props: any);
    get activeTab(): any;
    get activeTabId(): any;
    get activeTabContent(): import("react").DetailedReactHTMLElement<{
        id: any;
    }, HTMLElement>;
    get isControlled(): boolean;
    activateTab: (tab: any) => void;
    handleKeyPress: (key: any, onClick: any) => void;
    handleTabClick: (tab: any, originalOnClick: any) => void;
}
declare namespace Tabs {
    namespace propTypes {
        const activeTabId: PropTypes.Requireable<string>;
        const defaultTabId: PropTypes.Requireable<string>;
        const children: PropTypes.Validator<{
            [x: string]: any;
        }>;
        const tabBarAside: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    }
    namespace defaultProps {
        const activeTabId_1: undefined;
        export { activeTabId_1 as activeTabId };
        const defaultTabId_1: undefined;
        export { defaultTabId_1 as defaultTabId };
        const tabBarAside_1: undefined;
        export { tabBarAside_1 as tabBarAside };
    }
}
import { Component } from "react";
import PropTypes from "prop-types";
