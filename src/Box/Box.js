import styled from '@emotion/styled';
import {
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  color,
  display,
  position,
  space,
  width,
  height,
  maxHeight,
  maxWidth,
  minWidth,
  overflow,
  textAlign
} from 'styled-system';

const Box = styled.div`
  box-sizing: border-box;
  ${borders};
  ${borderColor};
  ${borderRadius};
  ${boxShadow};
  ${color};
  ${display};
  ${height};
  ${maxHeight};
  ${maxWidth};
  ${minWidth};
  ${overflow};
  ${position};
  ${space};
  ${textAlign};
  ${width};
`;

Box.propTypes = {
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...boxShadow.propTypes,
  ...borderRadius.propTypes,
  ...color.propTypes,
  ...display.propTypes,
  ...height.propTypes,
  ...maxHeight.propTypes,
  ...maxWidth.propTypes,
  ...minWidth.propTypes,
  ...overflow.propTypes,
  ...position.propTypes,
  ...space.propTypes,
  ...textAlign.propTypes,
  ...width.propTypes
};

export default Box;
