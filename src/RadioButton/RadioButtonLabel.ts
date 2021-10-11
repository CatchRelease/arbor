import styled from '@emotion/styled';

import Flex, { FlexProps } from '../Flex';

export type Props = FlexProps;

const RadioButtonLabel = styled(Flex)`
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  line-height: ${({ theme }) => theme.lineHeights.small};
`;

RadioButtonLabel.defaultProps = {
  as: 'label'
};

export default RadioButtonLabel;
