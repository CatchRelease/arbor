import styled from '@emotion/styled';

import Card from '../Card';

const PopoverContent = styled(Card)`
  background: ${props => props.theme.colors.monochrome.white};
  box-shadow: ${props => props.theme.shadows.elevation2};
  min-height: 40px;
  min-width: 160px;
`;

PopoverContent.defaultProps = {
  overflow: 'hidden'
};

export default PopoverContent;
