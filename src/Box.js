import styled from 'react-emotion';
import {
  boxShadow,
  color,
  space,
  width,
  height,
  maxWidth,
  textAlign,
  border,
  borderColor,
  borderRadius
} from 'styled-system';

const Box = styled.div`
  box-sizing: border-box;
  ${boxShadow};
  ${color};
  ${height};
  ${maxWidth};
  ${space};
  ${textAlign};
  ${width};
  ${border};
  ${borderColor};
  ${borderRadius};
`;

Box.propTypes = {
  ...boxShadow.propTypes,
  ...color.propTypes,
  ...height.propTypes,
  ...maxWidth.propTypes,
  ...space.propTypes,
  ...textAlign.propTypes,
  ...width.propTypes,
  ...border.propTypes,
  ...borderColor.propTypes,
  ...borderRadius.propTypes
};

Box.section = Box.withComponent('section');

export default Box;
