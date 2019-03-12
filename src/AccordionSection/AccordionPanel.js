import React from 'react';
import PropTypes from 'prop-types';

import StyledAccordionPanel from './StyledAccordionPanel';

const AccordionPanel = ({ isOpen, ...panelProps }) => {
  const display = isOpen ? 'block' : 'none';

  return (
    <StyledAccordionPanel
      {...{ ...panelProps, display, borderBottom: 'default' }}
    />
  );
};

AccordionPanel.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default AccordionPanel;
