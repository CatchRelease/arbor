import styled from '@emotion/styled';
import {
  borders,
  BordersProps,
  boxShadow,
  BoxShadowProps,
  display,
  DisplayProps,
  gridArea,
  GridAreaProps,
  height,
  HeightProps,
  maxHeight,
  minHeight,
  position,
  PositionProps,
  width,
  WidthProps
} from 'styled-system';

import Text, { TextProps } from '../Text';

export type Props = TextProps &
  BordersProps &
  BoxShadowProps &
  DisplayProps &
  HeightProps &
  GridAreaProps &
  PositionProps &
  WidthProps;

const Box = styled(Text.withComponent('div'))<Props>`
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

export default Box;
