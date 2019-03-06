import styled from '@emotion/styled';
import { transparentize } from 'polished';

import Card from '../Card';

const PopoverContent = styled(Card)`
  background: ${props => props.theme.colors.white};
  box-shadow: 0 4px 8px
      ${props => transparentize(0.9, props.theme.colors.black)},
    0 0 1px ${props => props.theme.colors.grey20};
  min-height: 40px;
  min-width: 200px;
  overflow: hidden;
`;

export default PopoverContent;
