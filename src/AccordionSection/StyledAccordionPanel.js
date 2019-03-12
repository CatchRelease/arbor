import styled from '@emotion/styled';

import Box from '../Box';
import createWithComponent from '../utils/createWithComponent';

const StyledAccordionPanel = styled(createWithComponent(Box, 'div'))`
  section:last-child & {
    border-bottom: none;
    border-top: ${props => props.theme.borders.default};
  }
`;

export default StyledAccordionPanel;
