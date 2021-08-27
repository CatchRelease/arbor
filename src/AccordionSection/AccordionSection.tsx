import { FC, ReactNode, useState } from 'react';

import AccordionHeader from './AccordionHeader';
import AccordionPanel from './AccordionPanel';
import { Variant } from './variants';

export type Props = {
  header: ReactNode;
  headerNote?: ReactNode;
  isOpen?: boolean;
  onHeaderClick?: () => void;
  panelId: string;
  variant?: Variant;
};

const AccordionSection: FC<Props> = ({
  children,
  header,
  headerNote,
  isOpen: controlledIsOpen,
  onHeaderClick = () => {},
  panelId,
  variant = 'default',
  ...props
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);

  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const toggle = () => {
    setInternalIsOpen((previous) => !previous);
  };

  const handleHeaderClick = () => {
    if (!isControlled) {
      toggle();
    }

    onHeaderClick();
  };

  return (
    <section>
      <AccordionHeader
        isOpen={isOpen}
        note={headerNote}
        onClick={handleHeaderClick}
        panelId={panelId}
        text={header}
        variant={variant}
        {...props}
      />
      <AccordionPanel id={panelId} isOpen={isOpen} variant={variant}>
        {children}
      </AccordionPanel>
    </section>
  );
};

export default AccordionSection;
