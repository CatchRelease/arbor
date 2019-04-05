import styled from '@emotion/styled';

import Box from '../Box';

const StyledAccordionPanel = styled(Box)`
  section:last-child & {
    border-bottom: none;
    border-top: ${props => props.theme.borders.default};
  }
`;

StyledAccordionPanel.defaultProps = {
  overflow: 'hidden'
};

export default StyledAccordionPanel;
