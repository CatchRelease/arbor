import { FC, MouseEventHandler, ReactNode } from 'react';

import StyledAccordionHeader from './StyledAccordionHeader';
import StyledAccordionHeading from './StyledAccordionHeading';
import StyledAccordionHeadingText from './StyledAccordionHeadingText';

import AccordionHeaderIcon from './AccordionHeaderIcon';
import { Variant } from './variants';

type Props = {
  iconRight?: boolean;
  isOpen: boolean | undefined;
  note?: ReactNode;
  onClick?: MouseEventHandler<HTMLElement>;
  panelId: string;
  text: ReactNode;
  variant?: Variant;
};

const AccordionHeader: FC<Props> = ({
  isOpen,
  note,
  onClick = () => {},
  panelId,
  text,
  iconRight = false,
  ...props
}) => (
  <StyledAccordionHeader
    alignItems="center"
    justifyContent="space-between"
    px="regular"
    onClick={onClick}
    aria-controls={panelId}
    aria-expanded={isOpen}
    {...props}
  >
    <StyledAccordionHeading fontSize="size4" fontWeight="medium" mr="regular">
      <StyledAccordionHeadingText
        alignItems="center"
        aria-controls={panelId}
        aria-expanded={isOpen}
      >
        {iconRight ? (
          <>
            {text}
            <AccordionHeaderIcon isOpen={isOpen} ml="smallest" />
          </>
        ) : (
          <>
            <AccordionHeaderIcon isOpen={isOpen} />
            {text}
          </>
        )}
      </StyledAccordionHeadingText>
    </StyledAccordionHeading>
    {note}
  </StyledAccordionHeader>
);

export default AccordionHeader;
