import PropTypes from 'prop-types';

import StyledAccordionPanel from './StyledAccordionPanel';

const AccordionPanel = ({ isOpen, ...panelProps }) => {
  const display = isOpen ? 'block' : 'none';

  return <StyledAccordionPanel {...{ ...panelProps, display }} />;
};

AccordionPanel.propTypes = {
  /**
   * Whether or not the panel is open or not. When the panel is closed, the
   * content will be rendered with display none.
   */
  isOpen: PropTypes.bool.isRequired
};

export default AccordionPanel;
