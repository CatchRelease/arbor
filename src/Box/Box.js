import styled from '@emotion/styled';
import {
  borders,
  boxShadow,
  display,
  gridArea,
  height,
  maxHeight,
  minHeight,
  position,
  width
} from 'styled-system';

import Text from '../Text';

const Box = styled(Text.withComponent('div'))`
  box-sizing: border-box;
  ${borders};
  ${boxShadow};
  ${display};
  ${height};
  ${gridArea};
  ${maxHeight};
  ${minHeight};
  ${position};
  ${width};
`;

Box.propTypes = {
  ...borders.propTypes,
  ...boxShadow.propTypes,
  ...display.propTypes,
  ...gridArea.propTypes,
  ...height.propTypes,
  ...maxHeight.propTypes,
  ...minHeight.propTypes,
  ...position.propTypes,
  ...width.propTypes
};

export default Box;
