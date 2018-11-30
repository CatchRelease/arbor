import styled from '@emotion/styled';

import Flex from '../Flex';

const CheckboxLabel = styled(Flex.withComponent('label'))`
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export default CheckboxLabel;
