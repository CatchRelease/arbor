import styled from 'react-emotion';
import { color, space, width, maxWidth } from 'styled-system';

const Box = styled.div`
  ${space};
  ${color};
  ${width};
  ${maxWidth};
`;

Box.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...width.propTypes,
  ...maxWidth.propTypes
};

Box.section = Box.withComponent('section');

export default Box;
