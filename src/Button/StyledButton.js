import styled from '@emotion/styled';
import { css } from '@emotion/core';
import {
  borders,
  borderColor,
  fontWeight,
  lineHeight,
  space
} from 'styled-system';

import sizeStyles from './sizeStyles';
import textTransform from '../utils/textTransform';
import variantStyles from './variantStyles';
import whiteSpace from '../utils/whiteSpace';

const fullWidthStyles = ({ fullWidth }) =>
  fullWidth &&
  css`
    width: 100%;
  `;
const StyledButton = styled.button`
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

  ${sizeStyles};
  ${variantStyles};
  ${fontWeight};
  ${fullWidthStyles};
  ${lineHeight};
  ${space};
  ${textTransform};
  ${whiteSpace};
  ${borders};
  ${borderColor};
`;

StyledButton.propTypes = {
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...fontWeight.propTypes,
  ...lineHeight.propTypes,
  ...space.propTypes,
  ...textTransform.propTypes,
  ...whiteSpace.propTypes
};

StyledButton.defaultProps = {
  border: '1px solid transparent',
  borderRadius: 'small',
  fontWeight: 'medium',
  lineHeight: 'regular'
};

export default StyledButton;
