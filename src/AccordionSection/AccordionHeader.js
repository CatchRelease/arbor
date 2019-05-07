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
  /**
   * Whether or not the AccordionSection this header resides in is open or not.
   */
  isOpen: PropTypes.bool.isRequired,

  /**
   * Optional note to render within the AccordionHeader
   */
  note: PropTypes.node,

  /**
   * Callback to call whenever the StyledAccordionHeadingButton is clicked
   */
  onClick: PropTypes.func,

  /**
   * ID of the AccordionPanel that holds the content of the AccordionSection.
   * Used to specify aria-controls for accessbility.
   */
  panelId: PropTypes.string.isRequired,

  /**
   * Header text for the section
   */
  text: PropTypes.node.isRequired
};

AccordionHeader.defaultProps = {
  note: null,
  onClick: () => {}
};

export default AccordionHeader;
