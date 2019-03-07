import React from 'react';
import PropTypes from 'prop-types';

import StyledAccordionHeader from './StyledAccordionHeader';
import StyledAccordionHeading from './StyledAccordionHeading';
import StyledAccordionHeadingButton from './StyledAccordionHeadingButton';
import Text from '../Text';
import Icon from '../Icon';

const AccordionHeaderIcon = ({ isOpen }) => (
  <Icon ml="regular" mr="small" name="caret" rotation={isOpen ? null : '270'} />
);

AccordionHeaderIcon.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

const AccordionHeaderNote = ({ note }) =>
  note && (
    <Text mr="regular" fontSize="size4" textAlign="right" color="text.muted">
      {note}
    </Text>
  );

const AccordionHeader = ({ isOpen, note, onClick, panelId, text }) => (
  <StyledAccordionHeader alignItems="center" justifyContent="space-between">
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
