import {
  cloneElement,
  KeyboardEvent,
  ReactElement,
  ReactNode,
  useState
} from 'react';

import castArray from 'lodash/castArray';

import Box from '../Box';
import Flex from '../Flex';
import StyledTabs, { Props as StyledTabProps } from './StyledTabs';
import { Props as TabProps } from './Tab';
import { ENTER_KEY, SPACEBAR } from '../constants';

type Tab = ReactElement<TabProps>;

const getActiveTab = (
  activeTabId: string | undefined,
  children: Array<Tab | null>
) =>
  children.find((tab) => {
    if (!tab) {
      return false;
    }

    const {
      props: { id }
    } = tab;

    return id === activeTabId;
  });

const getTabContentId = (tab: Tab) => {
  if (!tab) {
    return undefined;
  }

  const {
    props: { children, id }
  } = tab;

  return children?.props.id || `${id}-tab-content`;
};

type Props = Omit<StyledTabProps, 'children'> & {
  activeTabId?: string;
  children: Tab | Array<Tab | null>;
  defaultTabId?: string;
  tabBarAside?: ReactNode;
};

const Tabs = ({
  activeTabId,
  children,
  defaultTabId,
  tabBarAside,
  ...props
}: Props) => {
  const childrenAsArray = castArray(children);

  const [state, setState] = useState(() =>
    activeTabId
      ? {}
      : {
          activeTabId:
            defaultTabId || childrenAsArray.find((tab) => !!tab)?.props.id
        }
  );

  const currentTabId = activeTabId || state.activeTabId;
  const activeTab = getActiveTab(currentTabId, childrenAsArray);

  if (!activeTab) {
    return null;
  }

  const activeTabContent = cloneElement(activeTab.props.children, {
    id: getTabContentId(activeTab)
  });

  const activateTab = (tab: Tab) => {
    setState({ activeTabId: tab.props.id });
  };

  const handleKeyPress = (key: string, onClick: () => void) => {
    if (key === ENTER_KEY || key === SPACEBAR) {
      onClick();
    }
  };

  const handleTabClick = (
    tab: Tab,
    originalOnClick?: (callback: () => void) => void
  ) => {
    const isControlled = !!activeTabId;
    const callback = isControlled ? () => {} : () => activateTab(tab);

    if (originalOnClick) {
      originalOnClick(callback);
    } else {
      callback();
    }
  };

  return (
    <>
      <StyledTabs {...props}>
        <Box>
          {childrenAsArray.map((tab) => {
            if (!tab) {
              return tab;
            }

            const { id, title, onClick: originalOnClick } = tab.props;
            const active = currentTabId === id;
            const tabContentId = getTabContentId(tab);
            const onClick = () => handleTabClick(tab, originalOnClick);

            return cloneElement(
              tab,
              {
                'aria-controls': tabContentId,
                'aria-selected': active ? 'true' : 'false',
                active,
                key: id,
                onClick,
                onKeyPress: ({ key }: KeyboardEvent<HTMLElement>) =>
                  handleKeyPress(key, onClick)
              },
              title
            );
          })}
        </Box>
        {tabBarAside && <Flex alignItems="center">{tabBarAside}</Flex>}
      </StyledTabs>
      {activeTabContent}
    </>
  );
};

Tabs.defaultProps = {
  activeTabId: undefined,
  defaultTabId: undefined,
  tabBarAside: undefined
};

export default Tabs;
