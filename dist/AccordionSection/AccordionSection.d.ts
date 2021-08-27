import { FC, ReactNode } from 'react';
import { Variant } from './variants';
export declare type Props = {
    header: ReactNode;
    headerNote?: ReactNode;
    isOpen?: boolean;
    onHeaderClick?: () => void;
    panelId: string;
    variant?: Variant;
};
declare const AccordionSection: FC<Props>;
export default AccordionSection;
