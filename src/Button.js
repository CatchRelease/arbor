import React from 'react';
import { space } from 'styled-system';
import styled, { css } from 'react-emotion';
import PropTypes from 'prop-types';
import { rem, transparentize } from 'polished';

const verticalAlignSmall = '-4px';
const verticalAlignSmaller = '-6px';

const sizeStyles = ({ theme, size, text }) => {
  const sizeMap = {
    small: {
      padding: `0 ${theme.space.smaller}`,
      height: rem('24px'),
      fontSize: theme.fontSizes.size1,
      i: {
        fontSize: rem('24px'),
        verticalAlign: text === undefined ? 0 : verticalAlignSmall
      }
    },
    medium: {
      padding: `0 ${theme.space.smaller}`,
      height: rem('32px'),
      fontSize: theme.fontSizes.size2,
      i: {
        fontSize: rem('24px'),
        verticalAlign: verticalAlignSmall
      }
    },
    large: {
      padding: `0 ${theme.space.regular}`,
      height: rem('40px'),
      fontSize: theme.fontSizes.size2,
      i: {
        fontSize: rem('32px'),
        verticalAlign: verticalAlignSmaller
      }
    },
    jumbo: {
      padding: `0 ${theme.space.regular}`,
      height: rem('48px'),
      fontSize: theme.fontSizes.size2,
      i: {
        fontSize: rem('32px'),
        verticalAlign: verticalAlignSmaller
      }
    }
  };

  return sizeMap[size];
};

const iconStyles = ({ theme, size, iconStart, text }) => {
  const sizeMap = {
    small: {
      paddingLeft: 0,
      paddingRight: text === undefined ? 0 : undefined
    },
    medium: {
      paddingLeft: theme.space.smallest,
      paddingRight: text === undefined ? theme.space.smallest : undefined
    },
    large: {
      paddingLeft: theme.space.smallest,
      paddingRight: text === undefined ? theme.space.smallest : undefined
    },
    jumbo: {
      paddingLeft: theme.space.smaller,
      paddingRight: text === undefined ? theme.space.smaller : undefined
    }
  };

  return iconStart && sizeMap[size];
};

const iconOnlyStyles = ({ text }) =>
  text === undefined &&
  css`
    i {
      margin-right: 0;
    }
  `;

const variantStyles = ({ theme, variant }) => {
  const variantMap = {
    primary: {
      backgroundColor: theme.colors.blue,
      color: theme.colors.white,
      boxShadow: `0 1px 3px ${transparentize(
        0.7,
        theme.colors.blue
      )}, inset 0 -1px 0 ${transparentize(0.9, theme.colors.black)}`,
      '&:enabled': {
        border: `1px solid ${theme.colors.blue}`
      },
      '&:hover:enabled': {
        backgroundColor: theme.colors.blueLight,
        boxShadow: `0 2px 6px ${transparentize(0.8, theme.colors.blue)}`
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
      boxShadow: `0 1px 3px ${transparentize(
        0.9,
        theme.colors.black
      )}, 0 1px 0 ${transparentize(0.95, theme.colors.black)}`,
      '&:enabled': {
        border: `1px solid ${theme.colors.grey10}`
      },
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

const fullWidthStyles = ({ fullWidth }) =>
  fullWidth &&
  css`
    width: 100%;
  `;

const StyledButton = styled.button`
  border-radius: ${props => props.theme.borderRadius.small};
  border: none;
  font-family: ${props => props.theme.brandFont};
  font-weight: ${props => props.theme.fontWeights.medium};
  line-height: ${props => props.theme.lineHeights.large};
  outline: none;
  text-align: center;
  transition: box-shadow 0.3s ease, background 0.2s ease;

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

  i {
    margin-right: ${props => props.theme.space.smallest};
  }

  ${sizeStyles};
  ${variantStyles};
  ${fullWidthStyles};
  ${iconStyles};
  ${iconOnlyStyles};
  ${space};
`;

const Button = ({ iconStart, children, ...props }) => (
  <StyledButton {...{ ...props, iconStart, text: children }}>
    {iconStart}
    {children}
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

  ...space.propTypes
};

Button.defaultProps = {
  disabled: false,
  size: 'large',
  variant: 'primary',
  fullWidth: false,
  iconStart: undefined
};

export default Button;
