import styled from '@emotion/styled';

import Flex from '../Flex';

const CheckboxLabel = styled(Flex.withComponent('label'))`
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  align-items: start;
  line-height: ${({ theme }) => theme.lineHeights.small};
`;

export default CheckboxLabel;
