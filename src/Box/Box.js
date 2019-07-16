import styled from '@emotion/styled';
import {
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  color,
  display,
  gridArea,
  height,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  overflow,
  position,
  space,
  textAlign,
  width
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
  ${gridArea};
  ${maxHeight};
  ${maxWidth};
  ${minHeight};
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
  ...borderRadius.propTypes,
  ...boxShadow.propTypes,
  ...color.propTypes,
  ...display.propTypes,
  ...gridArea.propTypes,
  ...height.propTypes,
  ...maxHeight.propTypes,
  ...maxWidth.propTypes,
  ...minHeight.propTypes,
  ...minWidth.propTypes,
  ...overflow.propTypes,
  ...position.propTypes,
  ...space.propTypes,
  ...textAlign.propTypes,
  ...width.propTypes
};

export default Box;
