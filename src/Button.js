import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { rem, transparentize } from 'polished';

const sizeStyles = ({ theme, size }) => {
  const sizeMap = {
    small: {
      padding: `0 ${theme.space.smaller}`,
      height: rem('24px'),
      fontSize: theme.fontSizes.size1
    },
    medium: {
      padding: `0 ${theme.space.smaller}`,
      height: rem('32px'),
      fontSize: theme.fontSizes.size2
    },
    large: {
      padding: `0 ${theme.space.regular}`,
      height: rem('40px'),
      fontSize: theme.fontSizes.size2
    },
    jumbo: {
      padding: `0 ${theme.space.regular}`,
      height: rem('48px'),
      fontSize: theme.fontSizes.size2
    }
  };

  return sizeMap[size];
};

const variantStyles = ({ theme, variant }) => {
  const variantMap = {
    primary: {
      backgroundColor: theme.colors.blue,
      color: theme.colors.white,
      boxShadow: `0 1px 3px ${transparentize(
        0.7,
        theme.colors.blue
      )}, inset 0 -1px 0 ${transparentize(0.9, theme.colors.black)}`,
      '&:focus:enabled': {
        boxShadow: `0 0 0 1px ${theme.colors.white}, 0 0 0 2px ${
          theme.colors.blueDark
        }`
      },
      '&:hover:enabled': {
        backgroundColor: theme.colors.blueLight,
        boxShadow: `0 2px 6px ${transparentize(0.8, theme.colors.blue)}`
      },
      '&:active:enabled': {
        background: theme.colors.blueDark
      }
    },
    secondary: {
      backgroundColor: theme.colors.white,
      color: theme.colors.grey100,
      fontWeight: theme.fontWeights.regular,
      boxShadow: `0 1px 3px ${transparentize(
        0.9,
        theme.colors.black
      )}, 0 1px 0 ${transparentize(0.95, theme.colors.black)}`,
      border: `1px solid ${theme.colors.grey10}`,
      '&:hover:enabled': {
        color: theme.colors.blue,
        boxShadow: `0 1px 7px ${transparentize(0.9, theme.colors.black)}`
      },
      '&:active:enabled': {
        color: theme.colors.blueDark,
        backgroundColor: theme.colors.white10,
        border: 'none'
      },
      '&:focus:enabled': {
        outline: theme.colors.blueDark,
        border: `1px solid ${theme.colors.grey10}`,
        color: theme.colors.grey100,
        boxShadow: `0 0 0 1px ${theme.colors.white}, 0 0 0 2px ${
          theme.colors.blueDark
        }`
      }
    },
    minimal: {
      background: 'none',
      border: '1px solid transparent',
      color: theme.colors.grey80,
      '&:hover:enabled': {
        backgroundColor: theme.colors.white10,
        color: theme.colors.grey100
      },
      '&:active:enabled': {
        color: theme.colors.grey100,
        backgroundColor: theme.colors.grey10
      },
      '&:focus:enabled': {
        color: theme.colors.blue
      },
      '&:disabled': {
        background: 'none',
        color: theme.colors.grey40
      }
    }
  };

  return variantMap[variant];
};

const Button = styled.button`
  font-family: ${props => props.theme.brandFont};
  border: 1px solid transparent;
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: ${props => props.theme.lineHeights.large};
  outline: none;
  transition: box-shadow 0.3s ease, background 0.2s ease;
  border-radius: ${props => props.theme.borderRadius.small};
  margin-top: ${props => props.theme.space.regular};

  &:disabled {
    background: ${props => props.theme.colors.grey20};
    color: ${props => props.theme.colors.grey50};
    box-shadow: none;
    cursor: not-allowed;
  }

  &:enabled {
    cursor: pointer;
  }

  &:active:enabled {
    box-shadow: none;
  }

  &:focus:enabled {
    border: 1px solid ${props => props.theme.colors.blueDark};
  }

  ${sizeStyles};
  ${variantStyles};
`;

Button.propTypes = {
  /**
   * Disabled state of button
   * */
  disabled: PropTypes.bool,

  /**
   * Button size
   * */
  size: PropTypes.oneOf(['small', 'medium', 'large', 'jumbo']),

  /**
   * Button variant.
   * */
  variant: PropTypes.oneOf(['primary', 'secondary', 'minimal'])
};

Button.defaultProps = {
  disabled: false,
  size: 'large',
  variant: 'primary'
};

export default Button;
