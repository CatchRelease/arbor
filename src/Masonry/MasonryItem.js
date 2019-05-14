import styled from '@emotion/styled';
import { display, width } from 'styled-system';

import Box from '../Box';

const MasonryItem = styled(Box)`
  ${display};
  ${width};
`;

MasonryItem.propTypes = {
  ...display.propTypes,
  ...width.propTypes
};

MasonryItem.defaultProps = {
  display: 'inline-block',
  width: '100%'
};

export default MasonryItem;
