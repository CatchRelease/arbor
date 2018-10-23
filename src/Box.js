import styled from 'react-emotion';
import {
  boxShadow,
  color,
  space,
  width,
  height,
  maxWidth,
  textAlign
} from 'styled-system';

const Box = styled.div`
  ${boxShadow};
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
  ...textAlign.propTypes,
  ...boxShadow.propTypes
};

Box.section = Box.withComponent('section');

export default Box;
