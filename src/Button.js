import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { transparentize } from 'polished';
import {
  borderRadius,
  brandFont,
  colors,
  fontWeights,
  lineHeights,
  spacings,
  typography
} from './theme';

const Button = styled.button`
  font-family: ${brandFont};
  font-size: ${typography.text.ui.fontSize};
  border: none;
  color: ${colors.white};
  font-weight: ${fontWeights.medium};
  line-height: ${lineHeights.large};
  outline: none;
  transition: box-shadow 0.3s ease, background 0.2s ease;

  &:enabled {
    cursor: pointer;
  }
`;

Button.CTA = styled(Button.withComponent('button'))`
  background: ${colors.blue};
  border-radius: ${borderRadius.large};
  box-shadow: 0 1px 3px ${transparentize(0.7, colors.blue)},
    inset 0 -1px 0 ${transparentize(0.9, colors.black)};
  padding: ${spacings.small} 0;
  text-transform: uppercase;
  width: 100%;

  &:disabled {
    background: ${colors.grey80};
    box-shadow: none;
  }

  &:hover:enabled {
    background: ${colors.blueLight};
    box-shadow: 0 2px 6px ${transparentize(0.8, colors.blueLight)};
  }

  &:focus:enabled {
    background: ${colors.blue};
    box-shadow: 0 0 0 1px ${colors.white}, ${colors.blueDark} 0 0 0 2px;
  }
`;

Button.CTA.displayName = 'Button.CTA';

Button.CTA.propTypes = {
  disabled: PropTypes.bool
};

Button.CTA.defaultProps = {
  disabled: false
};

export default Button;
