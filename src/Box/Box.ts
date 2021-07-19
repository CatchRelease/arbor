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

import { PolyComponent } from '../polyComponent';

import Text, { TextProps } from '../Text';
import { WithColorPropFix } from '../colorPropFix';

export type Props = TextProps &
  BordersProps &
  BoxShadowProps &
  DisplayProps &
  HeightProps &
  GridAreaProps &
  PositionProps &
  WidthProps;

const TextDiv = Text.withComponent('div');
const TextDivWithColorPropFix: WithColorPropFix<typeof TextDiv> = TextDiv;

const Box: PolyComponent<'div', Props> = styled(TextDivWithColorPropFix)<Props>`
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
