import React from 'react';
import { space, fontSize, color } from 'styled-system';
import styled, { css } from 'react-emotion';
import PropTypes from 'prop-types';
import { rem } from 'polished';

const calculatePadding = ({ xDefault, iconStart, iconEnd, theme, text }) => {
  if (text === undefined || (iconStart && iconEnd)) {
    return `0 ${theme.space.smallest}`;
  }

  if (iconStart) {
    return `0 ${xDefault} 0 ${theme.space.smallest}`;
  }

  if (iconEnd) {
    return `0 ${theme.space.smallest} 0 ${xDefault}`;
  }

  return `0 ${xDefault}`;
};

const sizeStyles = ({ theme, iconStart, iconEnd, size, text }) => {
  const sizeMap = {
    small: {
      padding: (() => {
        if (text === undefined || (iconEnd && iconStart)) {
          return 0;
        }

        if (iconStart) {
          return `0 ${theme.space.smaller} 0 0`;
        }

        if (iconEnd) {
          return `0 0 0 ${theme.space.smaller}`;
        }

        return `0 ${theme.space.smaller}`;
      })(),
      height: rem('24px'),
      fontSize: theme.fontSizes.size1,
      i: {
        fontSize: rem('22px')
      }
    },
    medium: {
      padding: calculatePadding({
        iconStart,
        iconEnd,
        text,
        theme,
        xDefault: theme.space.smaller
      }),
      height: rem('32px'),
      fontSize: theme.fontSizes.size2,
      i: {
        fontSize: rem('24px')
      }
    },
    large: {
      padding: calculatePadding({
        iconStart,
        iconEnd,
        text,
        theme,
        xDefault: theme.space.regular
      }),
      height: rem('40px'),
      fontSize: theme.fontSizes.size2,
      i: {
        fontSize: rem('32px')
      }
    },
    jumbo: {
      padding: (() => {
        if (text === undefined) {
          return theme.space.smaller;
        }

        if (iconStart && iconEnd) {
          return `0 ${theme.space.smallest}`;
        }

        if (iconStart) {
          return `0 ${theme.space.regular} 0 ${theme.space.smallest}`;
        }

        if (iconEnd) {
          return `0 ${theme.space.smallest} 0 ${theme.space.regular}`;
        }

        return `${theme.space.smaller} ${theme.space.regular}`;
      })(),
      height: rem('48px'),
      fontSize: theme.fontSizes.size2,
      i: {
        fontSize: rem('32px')
      }
    }
  };

  return sizeMap[size];
};

const variantStyles = ({ theme, variant }) => {
  const variantMap = {
    primary: {
      backgroundColor: theme.colors.blue,
      color: theme.colors.white,
      '&:hover:enabled': {
        backgroundColor: theme.colors.blueLight
      },
      '&:active:enabled': {
        background: theme.colors.blueDark
      },
      '&:focus:enabled': {
        boxShadow: `0 0 0 1px ${theme.colors.white}, 0 0 0 2px ${
          theme.colors.blueDark
        }`
      }
    },
    secondary: {
      backgroundColor: theme.colors.white,
      color: theme.colors.grey100,
      fontWeight: theme.fontWeights.regular,
      '&:enabled': {
        border: `1px solid ${theme.colors.grey20}`
      },
      '&:hover:enabled': {
        backgroundColor: theme.colors.white10,
        color: theme.colors.blue,
        border: `1px solid ${theme.colors.blue}`
      },
      '&:active:enabled': {
        color: theme.colors.blueDark,
        backgroundColor: theme.colors.grey10,
        border: '1px solid transparent'
      },
      '&:focus:enabled': {
        border: '1px solid transparent',
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
        boxShadow: `0 0 0 1px ${theme.colors.white}, 0 0 0 2px ${
          theme.colors.blueDark
        }`
      },
      '&:disabled': {
        background: 'none',
        color: theme.colors.grey40
      }
    }
  };

  return variantMap[variant];
};

const fullWidthStyles = ({ fullWidth }) =>
  fullWidth &&
  css`
    width: 100%;
  `;

const StyledButton = styled.button`
  border-radius: ${props => props.theme.radii.small};
  border: 1px solid transparent;
  font-family: ${props => props.theme.brandFont};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: ${props => props.theme.lineHeights.large};
  outline: none;
  text-align: center;
  transition: box-shadow 0.3s ease, background 0.2s ease;

  &:disabled {
    background: ${props => props.theme.colors.grey20};
    color: ${props => props.theme.colors.grey50};
    cursor: not-allowed;
  }

  &:enabled {
    cursor: pointer;
  }

  i {
    vertical-align: middle;
    color: inherit;
  }

  ${sizeStyles};
  ${variantStyles};
  ${fullWidthStyles};
  ${space};
  ${fontSize};
  ${color};
`;

const ButtonText = styled.span`
  margin-left: ${props =>
    props.iconStart === undefined ? 0 : props.theme.space.smallest};
  margin-right: ${props =>
    props.iconEnd === undefined ? 0 : props.theme.space.smallest};
  vertical-align: middle;
`;

const Button = ({ iconStart, iconEnd, children, ...props }) => (
  <StyledButton {...{ ...props, iconStart, iconEnd, text: children }}>
    {iconStart}
    {children && (
      <ButtonText {...{ iconStart, iconEnd, ...props }}>{children}</ButtonText>
    )}
    {iconEnd}
  </StyledButton>
);

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
  variant: PropTypes.oneOf(['primary', 'secondary', 'minimal']),

  /**
   * Property to set for a button to take the full width of it's parent
   * container.
   * */
  fullWidth: PropTypes.bool,

  iconStart: PropTypes.element,

  iconEnd: PropTypes.element,

  ...space.propTypes,

  ...color.propTypes
};

Button.defaultProps = {
  disabled: false,
  size: 'large',
  variant: 'primary',
  fullWidth: false,
  iconStart: undefined,
  iconEnd: undefined
};

export default Button;
