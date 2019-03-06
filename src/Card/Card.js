import styled from '@emotion/styled';

import Box from '../Box';
import createWithComponent from '../utils/createWithComponent';

const Card = styled(
  createWithComponent(Box, 'div', {
    defaultProps: {
      borderRadius: 'large',
      boxShadow: 'elevation0'
    }
  })
)`
  border: 1px solid ${props => props.theme.colors.border.default};
  width: 100%;
`;

export default Card;
