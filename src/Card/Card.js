import styled from '@emotion/styled';
import Box from '../Box';

const Card = styled(Box.withComponent('div'))`
  border-radius: ${props => props.theme.borderRadius.large};
  border: 1px solid ${props => props.theme.colors.border.default};
  width: 100%;
`;

Card.defaultProps = {
  boxShadow: 'elevation0'
};

export default Card;
