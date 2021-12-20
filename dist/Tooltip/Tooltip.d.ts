import { ComponentProps, ReactNode, VFC } from 'react';
import Tippy from '@tippyjs/react/headless';
declare type TippyProps = ComponentProps<typeof Tippy>;
declare type Props = {
    children: TippyProps['children'];
    content?: ReactNode;
    title?: ReactNode;
};
declare const Tooltip: VFC<Props>;
export default Tooltip;
