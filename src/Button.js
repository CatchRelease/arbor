import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { transparentize } from 'polished';

const Button = styled.button`
  font-family: ${props => props.theme.brandFont};
  font-size: ${props => props.theme.typography.text.ui.fontSize};
  border: none;
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: ${props => props.theme.lineHeights.large};
  outline: none;
  transition: box-shadow 0.3s ease, background 0.2s ease;

  &:enabled {
    cursor: pointer;
  }
`;

Button.CTA = styled(Button.withComponent('button'))`
  background: ${props => props.theme.colors.blue};
  border-radius: ${props => props.theme.borderRadius.large};
  box-shadow: 0 1px 3px ${props => transparentize(0.7, props.theme.colors.blue)},
    inset 0 -1px 0 ${props => transparentize(0.9, props.theme.colors.black)};
  padding: ${props => props.theme.space.small} 0;
  text-transform: uppercase;
  width: 100%;
  margin-top: ${props => props.theme.space.regular};

  &:disabled {
    background: ${props => props.theme.colors.grey80};
    box-shadow: none;
  }

  &:hover:enabled {
    background: ${props => props.theme.colors.blueLight};
    box-shadow: 0 2px 6px
      ${props => transparentize(0.8, props.theme.colors.blueLight)};
  }

  &:focus:enabled {
    background: ${props => props.theme.colors.blue};
    box-shadow: 0 0 0 1px ${props => props.theme.colors.white},
      ${props => props.theme.colors.blueDark} 0 0 0 2px;
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
