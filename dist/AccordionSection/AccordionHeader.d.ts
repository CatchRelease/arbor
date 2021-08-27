import { FC, MouseEventHandler, ReactNode } from 'react';
import { Variant } from './variants';
declare type Props = {
    iconRight?: boolean;
    isOpen: boolean | undefined;
    note?: ReactNode;
    onClick?: MouseEventHandler<HTMLElement>;
    panelId: string;
    text: ReactNode;
    variant?: Variant;
};
declare const AccordionHeader: FC<Props>;
export default AccordionHeader;
