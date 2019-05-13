import styled from '@emotion/styled';
import { display, width } from 'styled-system';

const MasonryItem = styled.div`
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
