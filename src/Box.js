import styled from 'react-emotion';
import { color, space, width } from 'styled-system';

const Box = styled.div`
  ${space};
  ${color};
  ${width};
`;

Box.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...width.propTypes
};

Box.section = Box.withComponent('section');

export default Box;
