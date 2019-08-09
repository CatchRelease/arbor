import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { borders, borderColor, space } from 'styled-system';

import buttonSizes from './buttonSizes';
import variants from './variants';
import whiteSpace from '../utils/whiteSpace';
import textTransform from '../utils/textTransform';

const fullWidthStyles = ({ fullWidth }) =>
  fullWidth &&
  css`
    width: 100%;
  `;
const StyledButton = styled.button`
  appearance: none;
  border-radius: ${props => props.theme.radii.small};
  font-family: ${props => props.theme.brandFont};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: ${props => props.theme.lineHeights.regular};
  outline: none;
  position: relative;
  text-align: center;
  transition: box-shadow 0.3s ease, background 0.2s ease;

  &:disabled {
    background: ${props => props.theme.colors.background.disabled};
    border: 1px solid transparent;
    color: ${props => props.theme.colors.text.disabled};
    cursor: not-allowed;
  }

  &:enabled {
    cursor: pointer;
  }

  i {
    vertical-align: middle;
  }

  ${buttonSizes};
  ${variants};
  ${fullWidthStyles};
  ${space};
  ${textTransform};
  ${whiteSpace};
  ${borders};
  ${borderColor};
`;

StyledButton.propTypes = {
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...space.propTypes,
  ...textTransform.propTypes,
  ...whiteSpace.propTypes
};

StyledButton.defaultProps = {
  border: '1px solid transparent'
};

export default StyledButton;
