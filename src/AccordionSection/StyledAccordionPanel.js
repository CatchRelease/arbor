import styled from '@emotion/styled';

import Box from '../Box';
import createWithComponent from '../utils/createWithComponent';

const StyledAccordionPanel = styled(createWithComponent(Box, 'div'))`
  border-bottom: 1px solid ${props => props.theme.borderColors.default};

  section:last-child & {
    border-bottom: none;
    border-top: 1px solid ${props => props.theme.borderColors.default};
  }
`;

export default StyledAccordionPanel;
