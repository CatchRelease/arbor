import { ReactElement, ReactNode } from 'react';
import { Props as StyledTabProps } from './StyledTab';
export declare type Props = StyledTabProps & {
    children: ReactElement<{
        id?: string;
    }>;
    id: string;
    onClick?: (callback: () => void) => void;
    title: ReactNode;
};
declare const Tab: {
    ({ children, ...props }: Props): import("@emotion/react/jsx-runtime").JSX.Element;
    defaultProps: {
        active: boolean;
        tabIndex: number;
    };
};
export default Tab;
