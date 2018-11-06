import styled, { css } from 'react-emotion';
import Box from './Box';

const spaceStyles = ({ theme }) => css`
  padding: ${theme.space.smaller} ${theme.space.regular};
  margin: ${theme.space.smaller} 0;
`;

const CardRow = styled(Box.withComponent('div'))`
  ${spaceStyles};
`;

export default CardRow;
