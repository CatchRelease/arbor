import React from 'react';
import PropTypes from 'prop-types';

import StyledAccordionHeader from './StyledAccordionHeader';
import StyledAccordionHeading from './StyledAccordionHeading';
import StyledAccordionHeadingButton from './StyledAccordionHeadingButton';
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
  >
    <StyledAccordionHeading fontWeight="medium" mr="regular">
      <StyledAccordionHeadingButton
        alignItems="center"
        aria-controls={panelId}
        aria-expanded={isOpen}
        onClick={onClick}
        type="button"
      >
        <AccordionHeaderIcon isOpen={isOpen} />
        {text}
      </StyledAccordionHeadingButton>
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
