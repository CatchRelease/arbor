import styled from '@emotion/styled';

import createWithComponent from '../utils/createWithComponent';
import Flex from '../Flex';

const CheckboxLabel = styled(createWithComponent(Flex, 'label'))`
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  line-height: ${({ theme }) => theme.lineHeights.small};
`;

export default CheckboxLabel;
