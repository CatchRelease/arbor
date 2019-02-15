import styled from '@emotion/styled';

import Box from '../Box';

const StyledAccordionPanel = styled(Box.withComponent('div'))`
  border-bottom: 1px solid ${props => props.theme.borderColors.default};
  padding: ${props => props.theme.space.regular};

  section:last-child & {
    border-bottom: none;
    border-top: 1px solid ${props => props.theme.borderColors.default};
  }
`;

export default StyledAccordionPanel;
