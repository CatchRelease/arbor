import styled from '@emotion/styled';

import Flex from '../Flex';

const RadioButtonLabel = styled(Flex)`
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  line-height: ${({ theme }) => theme.lineHeights.small};
`;

RadioButtonLabel.defaultProps = {
  as: 'label'
};

export default RadioButtonLabel;
