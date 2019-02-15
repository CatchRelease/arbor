import styled from '@emotion/styled';

import Box from '../Box';

const Accordion = styled(Box)`
  border: 1px solid ${props => props.theme.colors.border.default};
  border-radius: ${props => props.theme.borderRadius.large};
`;

export default Accordion;
