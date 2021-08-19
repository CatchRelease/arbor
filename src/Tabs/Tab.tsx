import { ReactElement, ReactNode } from 'react';

import StyledTab, { Props as StyledTabProps } from './StyledTab';

export type Props = StyledTabProps & {
  children: ReactElement<{ id?: string }>;
  id: string;
  onClick?: (callback: () => void) => void;
  title: ReactNode;
};

const Tab = ({ children, ...props }: Props) => (
  <StyledTab {...props}>{children}</StyledTab>
);

Tab.defaultProps = {
  active: false,
  tabIndex: 0
};

export default Tab;
