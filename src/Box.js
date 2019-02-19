import styled from '@emotion/styled';
import {
  boxShadow,
  color,
  display,
  space,
  width,
  height,
  maxWidth,
  textAlign
} from 'styled-system';

const Box = styled.div`
  box-sizing: border-box;
  ${boxShadow};
  ${color};
  ${display};
  ${height};
  ${maxWidth};
  ${space};
  ${textAlign};
  ${width};
`;

Box.propTypes = {
  ...boxShadow.propTypes,
  ...color.propTypes,
  ...display.propTypes,
  ...height.propTypes,
  ...maxWidth.propTypes,
  ...space.propTypes,
  ...textAlign.propTypes,
  ...width.propTypes
};

Box.section = Box.withComponent('section');

export default Box;
