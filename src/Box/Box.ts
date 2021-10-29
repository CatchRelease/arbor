import { ComponentProps } from 'react';
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

type InternalProps = TextProps &
  BordersProps &
  BoxShadowProps &
  DisplayProps &
  HeightProps &
  GridAreaProps &
  PositionProps &
  WidthProps;

const TextDiv = Text.withComponent('div');
const TextDivWithColorPropFix: WithColorPropFix<typeof TextDiv> = TextDiv;

const Box = styled(TextDivWithColorPropFix)<InternalProps>`
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

const PolyBox: PolyComponent<'div', InternalProps> = Box;

export type Props = ComponentProps<typeof PolyBox>;

export default Object.assign(PolyBox, {
  withComponent: Box.withComponent
});
