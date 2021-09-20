import styled from '@emotion/styled';

import Flex from '../Flex';

const CheckboxLabel = styled(Flex)`
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  line-height: ${({ theme }) => theme.lineHeights.small};
`;

CheckboxLabel.defaultProps = {
  as: 'label'
};

export default CheckboxLabel;
