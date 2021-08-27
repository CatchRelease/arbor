import { FC } from 'react';

import StyledAccordionPanel, {
  Props as StyledAccordionPanelProps
} from './StyledAccordionPanel';

type Props = StyledAccordionPanelProps & {
  isOpen: boolean | undefined;
};

const AccordionPanel: FC<Props> = ({ isOpen, ...panelProps }) => {
  const display = isOpen ? 'block' : 'none';

  return <StyledAccordionPanel {...{ ...panelProps, display }} />;
};

export default AccordionPanel;
