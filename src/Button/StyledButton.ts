import { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';

import {
  borders,
  borderColor,
  color,
  display,
  fontWeight,
  fontSize,
  lineHeight,
  space,
  variant,
  FontWeightProps,
  FontSizeProps,
  LineHeightProps,
  SpaceProps,
  BordersProps,
  BorderColorProps,
  ColorProps,
  DisplayProps
} from 'styled-system';

import textTransform, { TextTransformProps } from '../utils/textTransform';
import variantStyles from './variantStyles';
import whiteSpace, { WhitespaceProps } from '../utils/whiteSpace';
import { Intent } from '../theme/colors/intent';
import { Variant } from './variants';
import { PaletteColor } from '../theme/colors/palette';

const fullWidth = variant({
  prop: 'fullWidth',
  variants: {
    true: {
      width: '100%'
    },
    false: {
      width: 'auto'
    }
  }
});

const size = variant({
  prop: 'size',
  scale: 'buttons.sizes',
  variants: {
    small: {},
    medium: {},
    large: {},
    jumbo: {}
  }
});

export type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  BordersProps &
  BorderColorProps &
  ColorProps &
  DisplayProps &
  FontWeightProps &
  FontSizeProps &
  LineHeightProps &
  SpaceProps &
  TextTransformProps &
  WhitespaceProps & {
    intent?: Intent;
    paletteColor?: PaletteColor;
    variant?: Variant;
  };

const StyledButton = styled.button<Props>`
  appearance: none;
  outline: none;
  position: relative;
  text-align: center;

  &:disabled {
    background: ${(props) => props.theme.colors.background.disabled};
    border: 1px solid transparent;
    color: ${(props) => props.theme.colors.text.disabled};
    cursor: not-allowed;
  }

  &:enabled {
    cursor: pointer;
    transition: all 0.3s ease;
  }

  i {
    transition: all 0.3s ease;
    vertical-align: middle;
  }

  ${size};
  ${variantStyles};
  ${fontWeight};
  ${fontSize};
  ${fullWidth};
  ${lineHeight};
  ${space};
  ${textTransform};
  ${whiteSpace};
  ${borders};
  ${borderColor};
  ${color};
  ${display};
`;

StyledButton.defaultProps = {
  border: '1px solid transparent',
  borderRadius: 'small',
  fontWeight: 'medium',
  lineHeight: 'regular'
};

export default StyledButton;
