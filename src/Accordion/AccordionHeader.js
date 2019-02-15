import React from 'react';
import PropTypes from 'prop-types';

import StyledAccordionHeader from './StyledAccordionHeader';
import StyledAccordionHeading from './StyledAccordionHeading';
import StyledAccordionHeadingButton from './StyledAccordionHeadingButton';
import Text from '../Text';

const AccordionHeaderNote = ({ note }) =>
  note && (
    <Text fontSize="size4" textAlign="right" color="text.muted">
      {note}
    </Text>
  );

const AccordionHeader = ({ isOpen, note, onClick, panelId, text }) => (
  <StyledAccordionHeader
    alignItems="center"
    justifyContent="space-between"
    p="regular"
  >
    <StyledAccordionHeading fontWeight="medium" mr="regular">
      <StyledAccordionHeadingButton
        type="button"
        aria-controls={panelId}
        aria-expanded={isOpen}
        onClick={onClick}
      >
        {text}
      </StyledAccordionHeadingButton>
    </StyledAccordionHeading>
    <AccordionHeaderNote note={note} />
  </StyledAccordionHeader>
);

AccordionHeader.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  note: PropTypes.node,
  onClick: PropTypes.func,
  panelId: PropTypes.string.isRequired,
  text: PropTypes.node.isRequired
};

AccordionHeader.defaultProps = {
  note: null,
  onClick: () => {}
};

export default AccordionHeader;
