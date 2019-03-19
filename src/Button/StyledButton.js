import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { space } from 'styled-system';
import buttonSizes from './buttonSizes';
import variants from './variants';

const fullWidthStyles = ({ fullWidth }) =>
  fullWidth &&
  css`
    width: 100%;
  `;

const StyledButton = styled.button`
  appearance: none;
  border-radius: ${props => props.theme.radii.small};
  border: 1px solid transparent;
  font-family: ${props => props.theme.brandFont};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: ${props => props.theme.lineHeights.regular};
  outline: none;
  text-align: center;
  transition: box-shadow 0.3s ease, background 0.2s ease;

  &:disabled {
    background: ${props => props.theme.colors.background.default};
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
`;

StyledButton.propTypes = {
  ...space.propTypes
};

export default StyledButton;
