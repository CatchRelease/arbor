import { ReactElement, ReactNode } from 'react';
import { Props as StyledTabProps } from './StyledTabs';
import { Props as TabProps } from './Tab';
declare type Tab = ReactElement<TabProps>;
declare type Props = Omit<StyledTabProps, 'children'> & {
    activeTabId?: string;
    children: Tab | Array<Tab | null>;
    defaultTabId?: string;
    tabBarAside?: ReactNode;
};
declare const Tabs: {
    ({ activeTabId, children, defaultTabId, tabBarAside, ...props }: Props): import("@emotion/react/jsx-runtime").JSX.Element | null;
    defaultProps: {
        activeTabId: undefined;
        defaultTabId: undefined;
        tabBarAside: undefined;
    };
};
export default Tabs;
