import { FC } from 'react';
import { Props as StyledAccordionPanelProps } from './StyledAccordionPanel';
declare type Props = StyledAccordionPanelProps & {
    isOpen: boolean | undefined;
};
declare const AccordionPanel: FC<Props>;
export default AccordionPanel;
