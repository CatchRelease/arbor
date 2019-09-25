import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { color } from 'styled-system';

import Text from '../Text';

const baseStyles = css`
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const variantStyles = ({ variant, theme: { colors } }) => {
  const variantMapping = {
    brandDark: {
      color: colors.intent.brand.dark,
      '&:visited': {
        color: colors.intent.brand.dark
      },
      '&:hover': {
        color: colors.intent.brand.dark
      },
      '&:active': {
        color: colors.intent.brand.dark
      },
      '&:focus': {
        outline: `1px solid ${colors.brand.dark}`
      }
    },
    brandLight: {
      color: colors.intent.brand.light,
      '&:visited': {
        color: colors.intent.brand.light
      },
      '&:hover': {
        color: colors.intent.brand.light
      },
      '&:active': {
        color: colors.intent.brand.light
      },
      '&:focus': {
        outline: `1px solid ${colors.brand.light}`
      }
    },
    default: {
      color: colors.palette.teal.default,
      '&:visited': {
        color: colors.palette.teal.default
      },
      '&:hover': {
        color: colors.palette.teal.dark
      },
      '&:active': {
        color: colors.palette.teal.darker
      },
      '&:focus': {
        outline: `1px solid ${colors.palette.teal.default}`
      }
    },
    muted: {
      color: colors.text.muted,
      '&:visited': {
        color: colors.text.muted
      },
      '&:hover': {
        color: colors.text.default
      },
      '&:active': {
        color: colors.text.dark
      },
      '&:focus': {
        outline: `1px solid ${colors.grey100}`
      }
    }
  };

  return variantMapping[variant];
};

const Link = styled(Text)`
  ${baseStyles};
  ${variantStyles};
  ${color};
`;

Link.propTypes = {
  /**
   * Link variant for styling of link. See storybook for examples.
   */
  variant: PropTypes.oneOf(['default', 'muted'])
};

Link.defaultProps = {
  as: 'a',
  variant: 'default'
};

export default Link;
