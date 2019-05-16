import React from 'react';
import PropTypes from 'prop-types';

import StyledAccordionHeader from './StyledAccordionHeader';
import StyledAccordionHeading from './StyledAccordionHeading';
import StyledAccordionHeadingText from './StyledAccordionHeadingText';
import Icon from '../Icon';

const AccordionHeaderIcon = ({ isOpen }) => (
  <Icon mr="small" name="caret" rotation={isOpen ? null : '270'} />
);

AccordionHeaderIcon.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

const AccordionHeader = ({ isOpen, note, onClick, panelId, text }) => (
  <StyledAccordionHeader
    alignItems="center"
    justifyContent="space-between"
    px="regular"
    borderBottom="default"
    onClick={onClick}
    aria-controls={panelId}
    aria-expanded={isOpen}
  >
    <StyledAccordionHeading fontWeight="medium" mr="regular">
      <StyledAccordionHeadingText
        alignItems="center"
        aria-controls={panelId}
        aria-expanded={isOpen}
      >
        <AccordionHeaderIcon isOpen={isOpen} />
        {text}
      </StyledAccordionHeadingText>
    </StyledAccordionHeading>
    {note}
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
