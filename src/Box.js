import styled from 'react-emotion';
import {
  color,
  space,
  width,
  height,
  maxWidth,
  textAlign
} from 'styled-system';

const Box = styled.div`
  ${space};
  ${color};
  ${width};
  ${height};
  ${maxWidth};
  ${textAlign};
`;

Box.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...width.propTypes,
  ...height.propTypes,
  ...maxWidth.propTypes,
  ...textAlign.propTypes
};

Box.section = Box.withComponent('section');

export default Box;
