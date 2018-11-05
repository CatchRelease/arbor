import styled from 'react-emotion';
import Box from './Box';

const Card = styled(Box.withComponent('div'))`
  border-radius: ${props => props.theme.borderRadius.large};
  border: 1px solid ${props => props.theme.colors.grey20};
  width: 100%;
`;

export default Card;
